const firebaseConfig = {
  apiKey: 'AIzaSyCNL6Is9hD7GsErVbxBIZlrvgZrMjtjr8g',
  authDomain: 'procesadoptie-ontrafeld.firebaseapp.com',
  projectId: 'procesadoptie-ontrafeld',
  appId: '1:718613892822:web:1528895fa0cc4feb91c377',
};

const sdk = 'https://www.gstatic.com/firebasejs/13.3.0/';
const sessionKey = 'procesadoptie-firebase-session';
const emptyNote = { status: outcomes[0], text: '' };
let connection;
let baseline;
let timer;
let saving;
let busy = false;
let message = 'Log in met Google om wijzigingen automatisch online te bewaren.';

async function connect() {
  if (connection) return connection;
  const [appSdk, authSdk, firestore] = await Promise.all([
    import(`${sdk}firebase-app.js`),
    import(`${sdk}firebase-auth.js`),
    import(`${sdk}firebase-firestore.js`),
  ]);
  const app = appSdk.getApps()[0] || appSdk.initializeApp(firebaseConfig);
  const auth = authSdk.getAuth(app);
  await authSdk.setPersistence(auth, authSdk.browserSessionPersistence);
  const db = firestore.getFirestore(app);
  connection = { auth, authSdk, db, firestore, ref: firestore.doc(db, 'gesprekslijst', 'actief') };
  return connection;
}

function baselineKey() {
  return `procesadoptie-firebase-baseline:${connection.auth.currentUser.uid}`;
}

function rememberBaseline(value) {
  baseline = value;
  try { localStorage.setItem(baselineKey(), JSON.stringify(value)); } catch {}
}

function changesSince(current, previous) {
  const changes = {};
  for (const { id } of consequences) {
    const patch = {};
    for (const field of ['status', 'text']) {
      const value = current[id]?.[field] ?? emptyNote[field];
      if (value !== (previous[id]?.[field] ?? emptyNote[field])) patch[field] = value;
    }
    if (Object.keys(patch).length) changes[id] = patch;
  }
  return changes;
}

function applyChanges(original, changes) {
  const result = structuredClone(original);
  for (const [id, patch] of Object.entries(changes)) {
    result[id] = { ...emptyNote, ...result[id], ...patch };
  }
  return result;
}

function updateVisibleNotes() {
  for (const field of ['status', 'text']) {
    for (const input of document.querySelectorAll(`[data-note-${field}]`)) {
      if (input === document.activeElement) continue;
      input.value = notes[input.getAttribute(`data-note-${field}`)]?.[field] ?? emptyNote[field];
    }
  }
}

function setStatus(text, editorStatus = text) {
  message = text;
  document.querySelectorAll('cloud-notes').forEach(panel => panel.refresh());
  document.querySelectorAll('[data-saved]').forEach(label => { label.textContent = editorStatus; });
}

async function openOnlineList() {
  const { firestore, ref } = connection;
  const remote = (await firestore.getDocFromServer(ref)).data()?.notes ?? {};
  let previous;
  try { previous = JSON.parse(localStorage.getItem(baselineKey())); } catch {}
  const local = changesSince(notes, previous ?? {});

  for (const [id, patch] of Object.entries(local)) {
    const remoteText = remote[id]?.text;
    if (patch.text && remoteText && remoteText !== (previous?.[id]?.text ?? '')) {
      if (remoteText.includes(patch.text)) delete patch.text;
      else if (!patch.text.includes(remoteText)) patch.text = `${remoteText}\n\n${patch.text}`;
    }
    if (!previous && remote[id]?.status !== emptyNote.status && remote[id]?.status) delete patch.status;
    if (!Object.keys(patch).length) delete local[id];
  }

  rememberBaseline(remote);
  notes = applyChanges(remote, local);
  saveNotes(false);
  if (state.mode === 'notes' && !document.querySelector('#detail')?.open) renderNotes();
  updateVisibleNotes();
  setStatus('Je bent ingelogd. Wijzigingen worden automatisch online bewaard.');
  scheduleSave();
}

function scheduleSave() {
  if (baseline === undefined || !Object.keys(changesSince(notes, baseline)).length) return;
  clearTimeout(timer);
  setStatus('Wijzigingen worden automatisch online bewaard…', 'Online opslaan…');
  timer = setTimeout(flush, 700);
}

async function flush() {
  if (saving || baseline === undefined) return saving;
  clearTimeout(timer);
  const snapshot = structuredClone(notes);
  const changes = changesSince(snapshot, baseline);
  if (!Object.keys(changes).length) return;
  const { db, firestore, ref } = connection;
  saving = (async () => {
    try {
      const revision = crypto.randomUUID();
      const saved = await firestore.runTransaction(db, async transaction => {
        const remote = (await transaction.get(ref)).data()?.notes ?? {};
        const merged = applyChanges(remote, changes);
        transaction.set(ref, { notes: merged, revision });
        return merged;
      });
      const newestLocalChanges = changesSince(notes, snapshot);
      notes = applyChanges(saved, newestLocalChanges);
      rememberBaseline(saved);
      saveNotes(false);
      updateVisibleNotes();
      setStatus('Je wijzigingen zijn online bewaard.', 'Online bewaard.');
      scheduleSave();
    } catch (error) {
      setStatus('Online opslaan is tijdelijk niet gelukt. Je wijzigingen staan in deze browser.');
      if (navigator.onLine && error.code !== 'permission-denied') timer = setTimeout(flush, 15000);
    } finally {
      saving = undefined;
    }
  })();
  return saving;
}

async function setSession(action) {
  if (busy) return;
  busy = true;
  setStatus(action === 'logout' ? 'Uitloggen…' : 'Verbinden met je online gesprekslijst…');
  try {
    const { auth, authSdk } = await connect();
    if (action === 'logout') {
      await saving;
      await flush();
      clearTimeout(timer);
      await authSdk.signOut(auth);
      baseline = undefined;
      sessionStorage.removeItem(sessionKey);
      setStatus('Je bent uitgelogd. Wijzigingen worden in deze browser bewaard.');
      return;
    }
    if (action === 'login') await authSdk.signInWithPopup(auth, new authSdk.GoogleAuthProvider());
    if (auth.currentUser) {
      await openOnlineList();
      sessionStorage.setItem(sessionKey, 'yes');
    } else {
      setStatus('Log in met Google om wijzigingen automatisch online te bewaren.');
    }
  } catch (error) {
    if (error.code === 'permission-denied' && connection?.auth.currentUser) {
      await connection.authSdk.signOut(connection.auth);
      baseline = undefined;
      sessionStorage.removeItem(sessionKey);
    }
    setStatus(error.code === 'permission-denied'
      ? 'Dit Google-account heeft geen toegang tot de online gesprekslijst.'
      : 'Verbinden is niet gelukt. Je notities staan in deze browser.');
  } finally {
    busy = false;
    document.querySelectorAll('cloud-notes').forEach(panel => panel.refresh());
  }
}

class CloudNotes extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<section class="panel soft" aria-labelledby="cloud-notes-title">
      <h2 id="cloud-notes-title">Online gesprekslijst</h2>
      <p class="small" role="status"></p>
      <div class="toolbar">
        <button type="button" data-cloud="login">Inloggen met Google</button>
        <button type="button" data-cloud="logout" hidden>Uitloggen</button>
      </div>
    </section>`;
    for (const button of this.querySelectorAll('button')) {
      button.addEventListener('click', () => setSession(button.dataset.cloud));
    }
    this.refresh();
  }

  refresh() {
    this.querySelector('[role=status]').textContent = message;
    const connected = baseline !== undefined;
    for (const button of this.querySelectorAll('button')) {
      button.hidden = button.dataset.cloud === 'login' ? connected : !connected;
      button.disabled = busy;
    }
  }
}

customElements.define('cloud-notes', CloudNotes);
window.addEventListener('procesadoptie:notes-changed', scheduleSave);
window.addEventListener('online', scheduleSave);
document.addEventListener('visibilitychange', () => { if (document.hidden) flush(); });
try { if (sessionStorage.getItem(sessionKey)) setSession('restore'); } catch {}
