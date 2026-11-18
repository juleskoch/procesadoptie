const steps = [
 ['Waarom procesadoptie?','Begrijpen','Van beschreven processen naar dagelijks gebruik.','Het HWBP-WL wil doorgroeien van niveau 3 naar niveau 4 binnen het volwassenheidsmodel voor kwaliteits- en procesmanagement. We gaan van een beschreven werkwijze naar aantoonbare toepassing, controle en bijsturing.'],
 ['De procesarchitectuur','Begrijpen','Eén ordening voor al ons werk.','De procesarchitectuur laat zien welke processen er zijn. We onderscheiden programmaprocessen en projectprocessen, elk onderverdeeld in categorieën.'],
 ['Van proces naar werk','Begrijpen','De DRAP vertaalt naar uitvoering en sturing','De DRAP’s beschrijven de gezamenlijke procesinhoud. Werkpakketbeschrijvingen en managementplannen vertalen die naar de uitvoering en sturing binnen projecten en het programma.'],
 ['De vijf uitvoeringslijnen','Doorgronden','Vijf invalshoeken. Eén opgave.','Sturing, ondersteuning, toepassing, leren en kwaliteitsborging helpen elkaar. Open een uitvoeringslijn om te ontdekken wat zij bijdraagt.'],
 ['Samenhang & afhankelijkheden','Doorgronden','Waarom het één het ander nodig heeft.','De uitvoeringslijnen hangen samen, versterken elkaar en zijn op onderdelen van elkaar afhankelijk.'],
 ['De uitvoering in 2027','Doorgronden','Samen starten, gericht verdergaan.','In 2027 werken de vijf uitvoeringslijnen samen aan procesadoptie. De tijdlijn laat zien wanneer activiteiten starten en waarvan zij afhankelijk zijn.'],
 ['Consequenties & gesprek','Beoordelen','Wat vraagt dit van ons?','Hier maken we inzichtelijk welke directe consequenties procesadoptie met zich meebrengt voor werkwijze, inzet (zoals opleiding) en kosten.']
];
const lines = [
 {id:1,short:'Sturen',title:'Management en procesgericht sturen',why:'Procesafspraken gaan pas werken als managers ze gebruiken bij het verdelen van werk, het volgen van de uitvoering en het bijsturen. Managers passen ook zelf de project- en programmaprocessen toe waarvoor zij verantwoordelijk zijn.',activities:['Een visuele sturings- en verantwoordingsroute uitwerken, die laat zien hoe de sturing en verantwoording binnen de procesarchitectuur werkt en hoe deze bijdraagt aan werken volgens de processen.','Het gebruik van de S&V-route koppelen aan bestaande overleggen, het Plan van Aanpak en werkpakketten.','Programmasturing verbinden aan managementplannen.','Oefenen met een herkenbare casus en de eerste toepassing evalueren.'],result:'Een sturings- en verantwoordingsroute, paper voor EVI, praktische sturingsvragen, een sturingsproef en inzicht in de toepassing van project- en programmaprocessen.',who:'De Proces- en Kwaliteitsmanager organiseert de ondersteuning. Projectmanagers passen hun eigen processen toe en sturen IPM-rolhouders aan. De programmamanager stuurt de managementlijn en de eigen programmaprocessen.',relation:'Lijn 1 geeft richting aan lijn 3. Werkpakketten maken de mogelijkheid om te sturen concreet.'},
 {id:2,short:'Ondersteunen',title:'(AI)werkondersteuning, kennisdeling en verbinding',why:'Medewerkers hebben toegankelijke procesinformatie, praktische hulp en ruimte om te oefenen nodig.',activities:['Het gebruik van MAVIM stimuleren met handleidingen en gebruikerssessies.','Corporate AI-voorwaarden en beleid uitwerken.','EVI en AI-skills met gebruikers ontwikkelen en beproeven.','AI-geletterdheid en gebruikerssessies organiseren.','Kennisdeling en verbinding tussen vakgebieden versterken via vakgroepen en de Werkgroep Kennis & Structuur.','Beheer, expertise, continuïteit en overdracht van EVI organiseren.'],result:'Bruikbare handleidingen, instructies, AI-skills, trainingen, gebruikerssessies en overzichten van ontwikkeling, randvoorwaarden en beheer. Goed functionerende vakgroepen en de Werkgroep Kennis & Structuur ondersteunen de kennisdeling.',who:'De Proces- en Kwaliteitsmanager organiseert. Medewerkers leveren vakkennis en beoordelen resultaten. Informatievoorziening, communicatie, kennismanagement en bevoegde organisatieonderdelen dragen vanuit hun eigen rol bij.',relation:'Werkende EVI-ondersteuning en bruikbare accounts zijn startvoorwaarden voor lijn 3.'},
 {id:3,short:'Toepassen',title:'Het toepassen van processen in de praktijk',why:'De concrete werkzaamheden binnen projecten en het programma sluiten aan op de gezamenlijke procesafspraken.',activities:['Per project bepalen hoe de DRAP’s worden toegepast, afhankelijk van de projectfase en de beschikbare werkpakketbeschrijvingen, en de prioriteiten afstemmen.','Projectteams die een nieuwe fase ingaan, kunnen op verzoek aanvullende begeleiding krijgen. Die begeleiding helpt bij het opstellen van de WBS en werkpakketbeschrijvingen voor die fase op basis van de DRAP’s.','Projectteams in een lopende fase beoordelen welke resterende werkpakketten of activiteiten en producten daarbinnen op de DRAP’s aansluiten en waar aanpassing zinvol is. Die beoordeling gebeurt risicogestuurd.','Bij programmaprocessen ontbrekende resultaten en producten zichtbaar maken.','De eerste toepassing evalueren en overdracht voorbereiden.'],result:'Ondersteunde projectteams, werkpakketbeschrijvingen voor nieuwe projectfasen, beoordeelde en waar zinvol aangepaste werkpakketbeschrijvingen voor lopende projectfasen, inzicht in ontbrekende programmaproducten en overdrachtsafspraken.',who:'Projectteams en procesverantwoordelijken maken en gebruiken de producten. Projectmanagers en de programmamanager sturen. De Proces- en Kwaliteitsmanager begeleidt en reviewt.',relation:'Lijn 2 is een voorwaarde voor de uitvoering van lijn 3. Zonder AI-ondersteuning is het uitwerken van werkpakketbeschrijvingen een te omvangrijke klus, ook voor projecten die aan een nieuwe fase beginnen. Via lijn 1 wordt uiteindelijk gestuurd op de uitgewerkte processen. De praktijk levert ervaringen voor lijnen 4 en 5.'},
 {id:4,short:'Leren',title:'Projectissues, stabiliseren en verbeteren',why:'Een concreet issue binnen een project kan laten zien waar werkzaamheden of een procesketen vastlopen. De oorzaak kan liggen in de toepassing van processen, de procesafspraken of andere omstandigheden.',activities:['Projectissues ophalen en selecteren waarbij de toepassing van processen kan bijdragen aan een oplossing.','Het issue analyseren en afzetten tegen de betrokken processen, hun onderlinge afhankelijkheden, benodigde input en overdrachten.','Het projectteam ondersteunen bij het bepalen van herstelmaatregelen op basis van de juiste toepassing van processen.','Leerpunten delen en procesgebreken overdragen aan regulier Procesmanagement.'],result:'Inzicht in hoe het toepassen van processen uit de procesarchitectuur kan bijdragen aan het oplossen van projectissues. Ook wordt zichtbaar waar processen onvoldoende bijdragen aan een oplossing. Die inzichten kunnen aanleiding zijn om processen via het reguliere Procesmanagement bij te stellen of te verrijken.',who:'De Proces- en Kwaliteitsmanager helpt het projectteam om het issue te analyseren en de samenhang tussen de betrokken processen te begrijpen. De projectmanager en IPM-rolhouders bepalen de maatregelen en organiseren samen met het projectteam de uitvoering.',relation:'De uitgewerkte werkpakketbeschrijvingen uit lijn 3 worden benut bij de analyse. Verbeteringen in ondersteuning of sturing kunnen terugvloeien naar lijnen 1 en 2.'},
 {id:5,short:'Borgen',title:'Gefaseerde kwaliteitsborging',why:'Een training of een vastgesteld werkpakket bewijst nog niet dat het werk goed wordt uitgevoerd.',activities:['Vanaf de start ontwikkelgerichte feedback en reviews benutten.','Bij voldoende voortgang van de procesadoptie aanvullende risicogestuurde kwaliteits- en nalevingstoetsen ondersteunen.','Bevindingen gebruiken voor herstel, begeleiding en bijsturing.'],result:'De reguliere toepassing van Kwaliteitsborging op projectniveau en Kwaliteitsmanagement op programmaniveau, zodra het procesvolwassenheidsniveau van de organisatie daarvoor voldoende is.',who:'Managers Projectbeheersing voeren reguliere toetsen uit; projectmanagers sturen op opvolging. Kwaliteitsmanagement biedt kaders en analyseert op programmaniveau.',relation:'Toetsbevindingen voeden de uitvoering, ondersteuning en overkoepelende monitoring.'}
];
const architecture = {
 'Programmaprocessen': {
 'Besturende processen':['Programmamanagement','Procesmanagement','Besluitvorming'],
 'Ondersteunende processen':['HRM','Kennismanagement','Strategische Communicatie','Strategisch Informatiemanagement','Bestuurlijke overleggen en brede bijeenkomsten'],
 'Programmabeheersing':['Geld','Risico’s','Capaciteit','Kwaliteitsmanagement','Informatie','Tijd']},
 'Projectprocessen': {
 'Projectmanagement':['Projectopgave Concretiseren (SE)','Organisatie (SE)','Sturing','Projectbeslissingen','Projectondersteuning','Verantwoording','Middelen'],
 'Technisch management':['Sturing & Coördinatie TM','Basisinformatie','Definiëren Systeem (SE)','Analyseren Systeem (SE)','Definiëren Systeemeisen (SE)','Klanteisenproces Beheerders (SE)','Veiligheidsmanagement','Ontwerpen (SE)','Verificatie (SE)','Validatie (SE)','Innovaties','Duurzaamheid','Conditionering Ontwerp','Uitwerkingen Conditionering','Uitvoeren','Raakvlakmanagement','Opleveren en Overdragen'],
 'Omgevingsmanagement':['Sturing & Coördinatie OM','Stakeholdermanagement (SE)','Participatie','Communicatie','Klanteisenproces Omgeving (SE)','Planprocedures','Vergunningen','Wijziging Werkingsgebieden','Conditionering Planproducten en Vergunningen','Grondverwerving','Schadebeheersing en Nadeelcompensatie'],
 'Contractmanagement':['Sturing & Coördinatie CM','Inkoopmanagement','Contractbeheersing','Wijzigingenmanagement'],
 'Projectbeheersing':['Sturing & Coördinatie MPB','Scopemanagement (SE)','WBS & Werkpakketbeschrijvingen (SE)','Informatiemanagement (SE)','Financieel Management','Capaciteitsmanagement','Kwaliteitsborging','Voortgangsinformatie','Planningsmanagement','Risicomanagement (SE)','Configuratiemanagement (SE)']}
};
const relations=[
 {from:1,to:3,type:'Sturing',title:'Sturing en werkpakketten versterken elkaar',text:'Projectmanagers sturen op de uitvoering van werkpakketten (lijn 1). In die werkpakketten legt het projectteam vast wie wat doet en oplevert (lijn 3).',effect:'Gebruik de procesafspraken bij werkverdeling, voortgang en (bij)sturing.',ids:['sturing','werkpakketten']},
 {from:2,to:3,type:'Startvoorwaarde',title:'EVI maakt het uitwerken van werkpakketten mogelijk',text:'Om in projecten werkpakketten uit te werken (lijn 3), moet EVI uit lijn 2 volledig werken, inclusief de AI-skill Werkpakketbeschrijvingen. Ten minste de projectmanagers en Managers Projectbeheersing hebben een bruikbaar AI-account nodig.',effect:'Bij vertraging van lijn 2 schuift de geplande start van lijn 3 door. Eerder handmatig beginnen vraagt een aparte keuze.',ids:['accounts','licenties','ai-beheer']},
 {from:3,to:4,type:'Leren',title:'Werkpakketten helpen om projectissues te begrijpen',text:'Bij een projectissue (lijn 4) vergelijkt het team wat er is gebeurd met de DRAP’s en de werkpakketbeschrijvingen uit lijn 3.',effect:'Teams kunnen vanaf de start van het procesadoptieproject hulp vragen. Actieve begeleiding bij issues begint zodra de begeleiding in lijn 3 loopt en er voldoende capaciteit is.',ids:['issues','capaciteit']},
 {from:3,to:5,type:'Leren',title:'De kwaliteitsborging groeit mee met de praktijk',text:'Zodra een projectteam de processen toepast (lijn 3), helpen reviews en feedback om het werk te verbeteren (lijn 5). Als het team de werkwijze consequent toepast, volgen waar nodig aanvullende risicogestuurde toetsen.',effect:'Het moment verschilt per project. Bestaande toetsverplichtingen gelden vanaf de start.',ids:['kwaliteit']},
 {from:5,to:2,type:'Leren',title:'Toetsen laten zien waar extra hulp nodig is',text:'Blijkt uit een review of toets (lijn 5) dat een processtap onduidelijk is? Dan kan lijn 2 de werkinstructie verduidelijken of die stap met medewerkers oefenen.',effect:'Vraagt de procesafspraak zelf om aanpassing, dan loopt dat via regulier Procesmanagement.',ids:['kwaliteit','monitoring']}
];
const roles=['Programmamanager','Projectmanager','Manager Projectbeheersing','IPM-rolhouder','Programmateammedewerker','Proces- en Kwaliteitsmanager'];
const consequences=[
  {
    "id": "sturing",
    "line": 1,
    "title": "Procesgericht sturen vraagt tijd en inzet van managers",
    "kind": "Werkwijze",
    "status": "Gesprekspunt",
    "why": "Projectmanagers gebruiken werkpakketbeschrijvingen bij werkverdeling, voortgang en bijsturing. Op programmaniveau gebeurt dat via de managementplannen die voortkomen uit de DRAP’s van de programmaprocessen. Dit vraagt tijd van managers en ruimte voor hun teams. Het Project Procesadoptie begeleidt hen in de eerste fase. Daarna hoort dit bij de reguliere aansturing.",
    "change": "Projectmanagers gebruiken werkpakketbeschrijvingen bij werkverdeling, voortgang en bijsturing. Op programmaniveau gebeurt dat via de managementplannen die voortkomen uit de DRAP’s van de programmaprocessen. Dit vraagt tijd van managers en ruimte voor hun teams. Het Project Procesadoptie begeleidt hen in de eerste fase. Daarna hoort dit bij de reguliere aansturing.",
    "who": roles,
    "depends": "",
    "question": "Wat heeft het management nodig om de procesafspraken expliciet te gebruiken, en welk werk krijgt minder prioriteit om daar tijd voor vrij te maken?"
  },
  {
    "id": "ondersteuning",
    "line": 2,
    "title": "Pionieren met AI vraagt tijd en geld",
    "kind": "Werkwijze",
    "status": "Gesprekspunt",
    "why": "Met EVI willen we het gebruik van AI binnen WL versnellen. Voor de geplande start van het uitwerken van werkpakketbeschrijvingen moet EVI werken, inclusief de AI-skill Werkpakketbeschrijvingen. Ten minste projectmanagers en Managers Projectbeheersing hebben een bruikbaar AI-account nodig. Zoals beschreven in het plan van aanpak vraagt dit een investering in tijd en geld. Als EVI niet op tijd werkt, kan de procesadoptie flink vertragen.",
    "change": "Met EVI willen we het gebruik van AI binnen WL versnellen. Voor de geplande start van het uitwerken van werkpakketbeschrijvingen moet EVI werken, inclusief de AI-skill Werkpakketbeschrijvingen. Ten minste projectmanagers en Managers Projectbeheersing hebben een bruikbaar AI-account nodig. Zoals beschreven in het plan van aanpak vraagt dit een investering in tijd en geld. Als EVI niet op tijd werkt, kan de procesadoptie flink vertragen.",
    "who": roles,
    "depends": "",
    "question": "Zijn we bereid binnen WL te pionieren met AI, daar tijd en geld in te investeren en het risico op vertraging te aanvaarden?"
  },
  {
    "id": "toepassen",
    "line": 3,
    "title": "Projectteams investeren vooraf tijd om de DRAP’s te doorgronden",
    "kind": "Werkwijze",
    "status": "Gesprekspunt",
    "why": "Bij een nieuwe projectfase stellen teams de werkpakketbeschrijvingen op vanuit de actuele DRAP’s. In een lopende fase beoordelen ze het resterende werk risicogestuurd en passen ze bestaande beschrijvingen aan waar dat zinvol is. Dit vraagt meer dan vanuit vakervaring opschrijven wat er moet gebeuren. EVI kan procesmatig en inhoudelijk helpen, maar teamleden moeten zelf de procesarchitectuur en relevante DRAP’s op hoofdlijnen begrijpen om te beoordelen of de uitwerking voor hun project klopt. De tijdwinst bij het uitwerken en toepassen vraagt dus eerst een investering in begrip.",
    "change": "Bij een nieuwe projectfase stellen teams de werkpakketbeschrijvingen op vanuit de actuele DRAP’s. In een lopende fase beoordelen ze het resterende werk risicogestuurd en passen ze bestaande beschrijvingen aan waar dat zinvol is. Dit vraagt meer dan vanuit vakervaring opschrijven wat er moet gebeuren. EVI kan procesmatig en inhoudelijk helpen, maar teamleden moeten zelf de procesarchitectuur en relevante DRAP’s op hoofdlijnen begrijpen om te beoordelen of de uitwerking voor hun project klopt. De tijdwinst bij het uitwerken en toepassen vraagt dus eerst een investering in begrip.",
    "who": roles,
    "depends": "",
    "question": "Zijn we bereid die investering vooraf van projectteams te vragen en er ruimte voor te maken in hun planning?"
  },
  {
    "id": "leren",
    "line": 4,
    "title": "Bij een projectissue maken teams tijd voor analyse en opvolging",
    "kind": "Werkwijze",
    "status": "Gesprekspunt",
    "why": "Onder druk kost het tijd om met de Proces- en Kwaliteitsmanager na te gaan waar het werk vastliep en hoe dat zich verhoudt tot de DRAP’s en werkpakketbeschrijvingen. De projectmanager en betrokken IPM-rolhouders kiezen de herstelmaatregelen. Het projectteam voert ze uit en kijkt of ze hebben gewerkt. Als de procesafspraak zelf tekortschiet, gaat het verbeterpunt naar regulier Procesmanagement.",
    "change": "Onder druk kost het tijd om met de Proces- en Kwaliteitsmanager na te gaan waar het werk vastliep en hoe dat zich verhoudt tot de DRAP’s en werkpakketbeschrijvingen. De projectmanager en betrokken IPM-rolhouders kiezen de herstelmaatregelen. Het projectteam voert ze uit en kijkt of ze hebben gewerkt. Als de procesafspraak zelf tekortschiet, gaat het verbeterpunt naar regulier Procesmanagement.",
    "who": roles,
    "depends": "",
    "question": "Bij welke projectissues maken we tijd vrij voor deze analyse en wie zorgt dat de herstelmaatregelen worden opgevolgd?"
  },
  {
    "id": "borgen",
    "line": 5,
    "title": "Actieve kwaliteitsborging vraagt extra tijd van Managers Projectbeheersing",
    "kind": "Werkwijze",
    "status": "Gesprekspunt",
    "why": "Managers Projectbeheersing geven aan dat hun werkdruk al hoog is. Kwaliteitsborging expliciet toepassen betekent voor hen extra werk. EVI kan hen ook helpen bij de uitvoering van hun eigen projectbeheersingsprocessen. De verwachting is dat ze de tijd die ze daarmee winnen, kunnen inzetten voor kwaliteitsborging. Hoeveel tijd daadwerkelijk vrijkomt, moet nog blijken.",
    "change": "Managers Projectbeheersing geven aan dat hun werkdruk al hoog is. Kwaliteitsborging expliciet toepassen betekent voor hen extra werk. EVI kan hen ook helpen bij de uitvoering van hun eigen projectbeheersingsprocessen. De verwachting is dat ze de tijd die ze daarmee winnen, kunnen inzetten voor kwaliteitsborging. Hoeveel tijd daadwerkelijk vrijkomt, moet nog blijken.",
    "who": roles,
    "depends": "",
    "question": "Durven we de verwachte tijdwinst door EVI alvast toe te rekenen aan kwaliteitsborging, en hoe maken we ruimte als die winst kleiner blijkt?"
  },
  {
    "id": "training",
    "line": 1,
    "title": "Reserveer werktijd voor training en toepassing",
    "kind": "Opleiding",
    "status": "Gesprekspunt",
    "why": "Medewerkers en managers hebben tijd nodig voor procestraining en AI-geletterdheid. In die trainingen leren zij de procesarchitectuur en de DRAP’s te doorgronden en AI te gebruiken. Daarna hebben ze in hun reguliere werk tijd nodig om te leren toepassen wat ze in de training hebben geleerd. Voor beide moet vooraf ruimte worden gepland.",
    "change": "Medewerkers en managers hebben tijd nodig voor procestraining en AI-geletterdheid. In die trainingen leren zij de procesarchitectuur en de DRAP’s te doorgronden en AI te gebruiken. Daarna hebben ze in hun reguliere werk tijd nodig om te leren toepassen wat ze in de training hebben geleerd. Voor beide moet vooraf ruimte worden gepland.",
    "who": roles,
    "depends": "",
    "question": "Welke medewerkers krijgen wanneer tijd voor training en toepassing, en waar maken hun managers die tijd vrij?",
    "lines": [
      1,
      2,
      3,
      4,
      5
    ]
  }
];
const topicStages={
 wp:{title:'Werkpakketbeschrijvingen',intro:'Van gezamenlijke procesafspraken naar een concrete uitwerking voor een project.',stages:[['Wat is een werkpakket?','Een werkpakket is een afgebakend deel van het projectwerk. De werkpakketbeschrijving maakt de inhoud van de DRAP’s concreet voor het project en de projectfase. Zij beschrijft onder meer het doel, de activiteiten, benodigde input, op te leveren producten, de werkpakketeigenaar en de kwaliteitscontrole.'],['Waar komt de inhoud vandaan?','De uniforme WBS ordent de werkpakketten die aansluiten op de projectprocessen. Met de productenboom en de processcope-afbakening bepaalt het projectteam welke werkpakketten voor de projectfase nodig zijn. Waar nodig splitst het team werkpakketten op in deelwerkpakketten. De projectspecifieke WBS, de productenboom en de relevante DRAP’s vormen vervolgens de basis voor de werkpakketbeschrijvingen.'],['Hoe maak je werkpakketbeschrijvingen?','Het projectteam vertaalt de inhoud van de relevante DRAP’s samen met de projectspecifieke context naar het standaardformat voor een werkpakketbeschrijving. Daarin legt het onder meer producten, activiteiten, verantwoordelijkheden, raakvlakken, risico’s en kwaliteitscriteria vast. De producten sluiten aan op de productenboom. Het uitwerken is veel werk. Echter, die inspanning is zeer zinvol: ze helpt het team om duidelijk te krijgen wat nodig is. EVI kan daarbij ondersteunen; het projectteam blijft verantwoordelijk voor inhoud en kwaliteit. De beschrijvingen worden toegelicht en vastgesteld. Significante afwijkingen van de DRAP’s worden onderbouwd en ter vaststelling voorgelegd via Besluitvorming.'],['Waarom zijn werkpakketbeschrijvingen belangrijk?','De vastgestelde werkpakketbeschrijvingen verbinden de inhoud van de DRAP’s met de uitvoering in de projectfase. Ze helpen het projectteam om werkzaamheden, producten, verantwoordelijkheden en raakvlakken te overzien. De werkpakketten vormen ook een basis voor onder meer ramingen, planningen en risicoregisters. Via deze instrumenten en het Plan van Aanpak kan de projectmanager de uitvoering volgen en bijsturen. Zo wordt direct op de werkpakketten en indirect op de toepassing van de DRAP’s gestuurd.'],['Welke uitvoeringslijnen zijn relevant?',['Lijn 1 · Management en procesgericht sturen: projectmanagers sturen op de toepassing en uitvoering van werkpakketten.','Lijn 2 · (AI)werkondersteuning: hulpmiddelen en kennisdeling, zoals EVI en MAVIM, ondersteunen het uitwerken van werkpakketbeschrijvingen.','Lijn 3 · Toepassen in de praktijk: maakt duidelijk wat de toepassing vraagt van projecten in een nieuwe of lopende fase.','Lijn 4 · Projectissues: gebruikt projectissues om zichtbaar te maken waar toepassing van werkpakketten en procesafspraken kan helpen.','Lijn 5 · Kwaliteitsborging: ondersteunt passende kwaliteits- en nalevingstoetsen om de toepassing te beoordelen.']]],ids:['toepassen','sturing','training','borgen','ondersteuning']}
};

const rolePerspectives = [
  {
    "title": "Programmamanager",
    "tasks": [
      "Is opdrachtgever en stuurt op opdracht, prioriteiten en voortgang van het Project Procesadoptie.",
      "Stuurt via de managementlijn op toepassing van projectmanagementprocessen en is verantwoordelijk voor de programmaprocessen.",
      "Bepaalt met procesverantwoordelijken prioriteiten voor ontbrekende programmaproducten en beoordeelt voorstellen voor structureel EVI-beheer."
    ]
  },
  {
    "title": "Projectmanager",
    "tasks": [
      "Past de eigen projectmanagementprocessen toe en stuurt IPM-rolhouders aan op de toepassing van projectprocessen.",
      "Bepaalt samen met IPM-rolhouders prioriteiten voor toepassing en stuurt op gebruik van werkpakketbeschrijvingen.",
      "Maakt deelname aan gebruikerssessies mogelijk en bepaalt met betrokkenen maatregelen bij projectissues."
    ]
  },
  {
    "title": "IPM-rolhouder",
    "tasks": [
      "Past processen binnen het eigen vakgebied toe en stuurt betrokken medewerkers en opdrachtnemers aan.",
      "Zorgt voor het opstellen, beoordelen en waar nodig aanpassen van werkpakketbeschrijvingen.",
      "Brengt issues in, werkt mee aan de analyse en voert afgesproken maatregelen binnen het eigen vakgebied uit."
    ]
  },
  {
    "title": "Manager Projectbeheersing",
    "tasks": [
      "Voert binnen het project de reguliere kwaliteits- en nalevingstoetsen uit.",
      "Levert toetsresultaten aan voor de beoordeling van procesadoptie via Kwaliteitsmanagement."
    ]
  },
  {
    "title": "Procesverantwoordelijke programmaprocessen",
    "tasks": [
      "Past de programmaprocessen binnen het eigen werkgebied toe en realiseert de bijbehorende resultaten en producten.",
      "Brengt bestaande en ontbrekende producten in beeld en maakt met de programmamanager afspraken over prioriteiten en oplevering."
    ]
  },
  {
    "title": "Proces- en Kwaliteitsmanager",
    "tasks": [
      "Verzorgt de dagelijkse projectleiding, planning, coördinatie en voortgangsbewaking van het Project Procesadoptie.",
      "Ontwikkelt en organiseert werkondersteuning, begeleiding, gebruikerssessies en de ontwikkeling van EVI en AI-skills met gebruikers.",
      "Begeleidt de toepassing van processen, reviewt waar nodig werkpakketbeschrijvingen en ondersteunt analyses van projectissues.",
      "Organiseert monitoring en evaluatie, bereidt overdracht voor en brengt procesgebreken onder bij regulier Procesmanagement."
    ]
  },
  {
    "title": "Programmasecretaris",
    "tasks": [
      "Ondersteunt vanuit Kennismanagement het organiseren, vastleggen, toegankelijk maken en delen van kennis, gebruiksinstructies en praktijkvoorbeelden.",
      "Sluit aan bij bestaande kennisdelingsactiviteiten en vakgroepen."
    ]
  },
  {
    "title": "Senior Communicatieadviseur",
    "tasks": [
      "Ondersteunt vanuit Strategische Communicatie de communicatie over beschikbare werkondersteuning.",
      "Stemt boodschappen, kanalen en communicatieproducten af op de projectbrede communicatie."
    ]
  },
  {
    "title": "Adviseur Informatievoorziening",
    "tasks": [
      "Ondersteunt de afstemming van EVI en andere AI-toepassingen op de kaders voor informatievoorziening.",
      "Helpt organisatorische, technische en juridische randvoorwaarden en de beheerorganisatie met bevoegde onderdelen van WL af te stemmen."
    ]
  },
  {
    "title": "Vakgroeplid",
    "tasks": [
      "Draagt vakkennis, praktijkervaringen en voorbeelden aan en helpt bij de beantwoording van praktijkvragen.",
      "Levert waar nodig bijdragen aan gebruikerssessies, instructies en de ontwikkeling en beproeving van AI-skills."
    ]
  },
  {
    "title": "Lid Werkgroep Kennis & Structuur",
    "tasks": [
      "Verbindt onderwerpen die meerdere vakgebieden raken.",
      "Helpt kennisdeling, procesinformatie, communicatie en digitale werkondersteuning op elkaar af te stemmen."
    ]
  },
  {
    "title": "Medewerker in project of programma",
    "tasks": [
      "Past de processen binnen de eigen werkzaamheden toe en gebruikt beschikbare ondersteuning waar die helpt.",
      "Levert waar nodig inhoudelijke kennis en praktijkvoorbeelden voor AI-skills en beoordeelt de verkregen informatie en resultaten inhoudelijk."
    ]
  },
  {
    "title": "Interne of externe opleider AI-geletterdheid",
    "tasks": [
      "Verzorgt, afhankelijk van de keuze voor IDM of een externe opdrachtnemer, de training AI-geletterdheid.",
      "Is verantwoordelijk voor de inhoudelijke en didactische uitvoering binnen de afgestemde doelstellingen en voorwaarden."
    ]
  },
  {
    "title": "Procesmanagement",
    "tasks": [
      "Beoordeelt gesignaleerde tekortkomingen in DRAP’s en procesrelaties.",
      "Pakt eventuele procesverbeteringen op via de reguliere procesgovernance."
    ]
  }
];
