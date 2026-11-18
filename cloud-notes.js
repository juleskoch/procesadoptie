const firebaseConfig = {
  apiKey: 'AIzaSyCNL6Is9hD7GsErVbxBIZlrvgZrMjtjr8g',
  authDomain: 'procesadoptie-ontrafeld.firebaseapp.com',
  projectId: 'procesadoptie-ontrafeld',
  appId: '1:718613892822:web:1528895fa0cc4feb91c377',
};

const sdk = 'https://www.gstatic.com/firebasejs/13.3.0/';
let connection;
let loadedRevision;

async function connect() {
  if (!connection) {
    try {
      const [appSdk, authSdk, firestore] = await Promise.all([
        import(`${sdk}firebase-app.js`),
        import(`${sdk}firebase-auth.js`),
        import(`${sdk}firebase-firestore.js`),
      ]);
      const app = appSdk.getApps()[0] || appSdk.initializeApp(firebaseConfig);
      const auth = authSdk.getAuth(app);
      await authSdk.setPersistence(auth, authSdk.inMemoryPersistence);
      const db = firestore.getFirestore(app);
      connection = { auth, authSdk, db, firestore, ref: firestore.doc(db, 'gesprekslijst', 'actief') };
    } catch (error) {
      connection = undefined;
      throw error;
    }
  }
  return connection;
}

class CloudNotes extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<section class="panel soft" aria-labelledby="cloud-notes-title">
      <h2 id="cloud-notes-title">Online gesprekslijst</h2>
      <p class="small" role="status">Log in met Google om je gesprekslijst online te bewaren of terug te halen.</p>
      <div class="toolbar">
        <button type="button" data-cloud="login">Inloggen met Google</button>
        <button type="button" data-cloud="load" hidden>Online notities ophalen</button>
        <button type="button" data-cloud="save" hidden>Online bewaren</button>
        <button type="button" data-cloud="logout" hidden>Uitloggen</button>
      </div>
    </section>`;
    this.status = this.querySelector('[role=status]');
    this.buttons = [...this.querySelectorAll('button')];
    for (const button of this.buttons) {
      button.addEventListener('click', () => this.run(button.dataset.cloud));
    }
    this.refresh();
  }

  refresh() {
    const signedIn = Boolean(connection?.auth.currentUser);
    for (const button of this.buttons) {
      button.hidden = button.dataset.cloud === 'login' ? signedIn : !signedIn;
    }
    if (signedIn) this.status.textContent = 'Je bent ingelogd. Je kunt de online gesprekslijst ophalen of bewaren.';
  }

  async run(action) {
    for (const button of this.buttons) button.disabled = true;
    try {
      const { auth, authSdk, db, firestore, ref } = await connect();
      if (action === 'login') {
        await authSdk.signInWithPopup(auth, new authSdk.GoogleAuthProvider());
        loadedRevision = undefined;
        try {
          const current = await firestore.getDocFromServer(ref);
          if (!current.exists()) loadedRevision = null;
        } catch (error) {
          await authSdk.signOut(auth);
          throw error;
        }
        this.refresh();
      } else if (action === 'logout') {
        await authSdk.signOut(auth);
        loadedRevision = undefined;
        this.refresh();
        this.status.textContent = 'Je bent uitgelogd.';
      } else if (action === 'load') {
        const current = await firestore.getDocFromServer(ref);
        if (!current.exists()) {
          loadedRevision = null;
          this.status.textContent = 'Er zijn nog geen online notities opgeslagen.';
          return;
        }
        const data = current.data();
        if (noteCount() && JSON.stringify(notes) !== JSON.stringify(data.notes)
          && !confirm('De opgehaalde gesprekslijst vervangt je notities in deze browser. Wil je doorgaan?')) return;
        const previousNotes = notes;
        notes = data.notes;
        if (!saveNotes()) {
          notes = previousNotes;
          this.status.textContent = 'De online notities konden niet in deze browser worden bewaard.';
          return;
        }
        loadedRevision = data.revision;
        if (state.mode === 'notes') renderNotes();
        toast('Online gesprekslijst opgehaald.');
      } else if (action === 'save') {
        if (loadedRevision === undefined) {
          this.status.textContent = 'Haal eerst de bestaande online gesprekslijst op. Exporteer desgewenst je lokale notities voordat je dat doet.';
          return;
        }
        const snapshot = structuredClone(notes);
        const expectedRevision = loadedRevision;
        const revision = crypto.randomUUID();
        const saved = await firestore.runTransaction(db, async transaction => {
          const current = await transaction.get(ref);
          if ((current.data()?.revision ?? null) !== expectedRevision) return false;
          transaction.set(ref, { notes: snapshot, revision });
          return true;
        });
        if (saved) {
          loadedRevision = revision;
          this.status.textContent = 'Je gesprekslijst is online bewaard.';
        } else {
          loadedRevision = undefined;
          this.status.textContent = 'De online gesprekslijst is gewijzigd. Haal eerst de nieuwste versie op.';
        }
      }
    } catch (error) {
      this.refresh();
      this.status.textContent = error.code === 'permission-denied'
        ? 'Dit Google-account heeft geen toegang tot de online gesprekslijst.'
        : 'De online actie is niet gelukt. Probeer het opnieuw. Je lokale notities blijven beschikbaar.';
    } finally {
      for (const button of this.buttons) button.disabled = false;
    }
  }
}

customElements.define('cloud-notes', CloudNotes);
