(() => {
  'use strict';

  const localeSelect = document.getElementById('locale');
  const pathLocale = location.pathname.split('/').filter(Boolean)[0];
  const supported = ['en','de','fr','es','it'];
  const currentLocale = supported.includes(pathLocale) ? pathLocale : 'en';

  const t = {
    en: {},
    de: {
      navFeatures:'Funktionen', navScreens:'Ansichten', navDownload:'Download', navFaq:'FAQ', navCta:'SkyFox holen',
      heroEyebrow:'Kostenlos · Open Source · Android', heroTitle:'Schau hoch.<br><span>Wisse, was da fliegt.</span>', heroLede:'Ein schneller Flugtracker für Plane Spotter. Sieh Flugzeuge in deiner Nähe, suche nach den Details, die zählen, speichere interessante Maschinen und lass dich benachrichtigen.', download:'Für Android herunterladen', source:'Quellcode ansehen', trustFree:'100 % kostenlos', trustNoAccount:'Kein Account', trustPrivate:'Datenschutzfreundlich',
      quick1Title:'Karte zuerst',quick1Text:'Sieh sofort, was über dir fliegt.',quick2Title:'Präzise Suche',quick2Text:'Callsign, HEX, Registrierung, Typ, Squawk.',quick3Title:'Privat bleiben',quick3Text:'Kein Account. Einfach losspotten.',
      featuresEyebrow:'Für den Moment, in dem du hochschaust',featuresH2:'Die nützlichen Dinge.<br><span>Nichts im Weg.</span>',feat1Label:'LIVE-KARTE',feat1H3:'Sieh, was über dir fliegt.',feat1P:'Flugzeuge in deiner Nähe auf einer fokussierten interaktiven Karte mit Filtern, Ebenen, Standortsteuerung und schnellen Details.',feat2Label:'SUCHE',feat2H3:'Finde genau die Maschine wieder.',feat2P:'Suche nach Callsign, Registrierung, HEX, Flugzeugtyp oder Squawk.',feat3Label:'WATCHLISTS + ALARME',feat3H3:'Speichern. SkyFox hält Ausschau.',feat3P:'Beobachte Flugzeuge, Registrierungen, Callsigns oder Squawks und erhalte Hinweise, sobald etwas Interessantes auftaucht.',feat4Label:'FLUGZEUGDETAILS',feat4H3:'Wisse genau, was du vor dir hast.',feat4P:'Betreiber, Route, Höhe, Geschwindigkeit, Kurs, Vertikalrate, Registerdaten und Notfall-Squawks an einem Ort.',feat5Label:'FEEDER-STATUS',feat5H3:'Du speist airplanes.live?',feat5P:'Behalte deinen Feeder im Blick und werde benachrichtigt, wenn er offline geht.',
      screensEyebrow:'Echte App-Ansichten',galleryTitle:'Weniger Drumherum.<br><span>Mehr Flugzeuge.</span>',galleryIntro:'Die Website nutzt dieselbe Fox-Palette und dasselbe Material-3-Expressive-Denken wie die App: tonale Flächen, starke Formen, klare Hierarchie und fast keine dekorativen Rahmen.',screen1Title:'Entdecken',screen1Text:'Sieh, was über dir fliegt.',screen2Title:'Finden',screen2Text:'Suche mit den Details, die du kennst.',screen3Title:'Verstehen',screen3Text:'Die wichtigen Daten auf einen Blick.',screen4Title:'Speichern',screen4Text:'Interessante Maschinen im Blick behalten.',
      spotterEyebrow:'Für Plane Spotter gebaut',spotterH2:'Von „Was war das?“<br><span>zu „Da ist es.“</span>',spotterP:'SkyFox orientiert sich an den Fragen, die Spotter wirklich haben – nicht an Dashboards, die du erst konfigurieren musst.',scenario1Q:'Etwas Ungewöhnliches über dir?',scenario1A:'Karte öffnen und sofort identifizieren.',scenario2Q:'Du wartest auf ein bestimmtes Flugzeug?',scenario2A:'Beobachten und benachrichtigen lassen.',scenario3Q:'Nur einen Teil des Callsigns gesehen?',scenario3A:'Mit den bekannten Informationen suchen und eingrenzen.',
      downloadEyebrow:'Kostenlos & Open Source',downloadH2:'Der Himmel<br><span>in deiner Tasche.</span>',downloadIntro:'Kein Play-Store-Account, kein Abo und keine Anmeldung. Lade die APK direkt von GitHub herunter.',latestRelease:'AKTUELLES RELEASE',androidRequirement:'Android 8.0+',downloadBtn:'APK herunterladen',changelog:'Release Notes ↗',nightly:'Nightly Builds ↗',buildYourself:'Selbst bauen ↗',value1Title:'Wirklich kostenlos',value1Text:'Keine Abos, Werbung oder In-App-Käufe.',value2Title:'Open Source',value2Text:'Der Code ist öffentlich. Prüfen, bauen, verbessern.',value3Title:'Kein Account',value3Text:'Flugtracking sollte nicht mit einem Registrierungsformular beginnen.',
      faqH2:'Gut zu wissen.',faq1Q:'Was ist SkyFox?',faq1A:'SkyFox ist eine kostenlose Open-Source-Android-App für Live-Flugtracking mit ADS-B-Daten von airplanes.live.',faq2Q:'Brauche ich einen Account?',faq2A:'Nein. Du kannst SkyFox installieren und direkt nutzen, ohne ein Konto anzulegen.',faq3Q:'Woher kommen die Flugzeugdaten?',faq3A:'Die Daten stammen von airplanes.live, einem Community-basierten ADS-B-Netzwerk. SkyFox ist unabhängig und nicht mit airplanes.live verbunden oder von ihnen unterstützt.',faq4Q:'Warum braucht SkyFox den Standort?',faq4A:'Der Standort wird genutzt, um Flugzeuge in deiner Nähe zu zeigen und die Karte zu zentrieren. Du kannst die Berechtigung ablehnen und die Karte manuell bewegen.',faq5Q:'Gibt es SkyFox für iOS?',faq5A:'Nein. SkyFox ist aktuell nur für Android verfügbar.',
      projectEyebrow:'Unabhängiges Projekt',projectTitle:'Offen darüber, was SkyFox ist.',footerTagline:'Keep your eyes on the sky.',footerReleases:'Releases',footerPrivacy:'Datenschutz',footerIssues:'Issues'
    },
    fr: { navFeatures:'Fonctions',navScreens:'Écrans',navDownload:'Télécharger',navFaq:'FAQ',navCta:'Obtenir SkyFox',heroEyebrow:'Gratuit · open source · Android',heroTitle:'Levez les yeux.<br><span>Sachez ce qui vole.</span>',heroLede:'Un suivi de vols rapide pensé pour les passionnés. Voyez les avions proches, cherchez les informations utiles, sauvegardez vos favoris et recevez des alertes.',download:'Télécharger pour Android',source:'Voir le code source',trustFree:'100 % gratuit',trustNoAccount:'Sans compte',trustPrivate:'Respectueux de la vie privée',featuresEyebrow:'Pensé pour le moment où vous levez les yeux',featuresH2:'L’utile.<br><span>Rien de superflu.</span>',screensEyebrow:'Vrais écrans de l’app',galleryTitle:'Moins de cérémonie.<br><span>Plus d’avions.</span>',downloadEyebrow:'Gratuit & open source',downloadH2:'Le ciel<br><span>dans votre poche.</span>',downloadBtn:'Télécharger l’APK',faqH2:'Bon à savoir.',footerPrivacy:'Confidentialité' },
    es: { navFeatures:'Funciones',navScreens:'Pantallas',navDownload:'Descargar',navFaq:'FAQ',navCta:'Obtener SkyFox',heroEyebrow:'Gratis · código abierto · Android',heroTitle:'Mira arriba.<br><span>Descubre qué está volando.</span>',heroLede:'Un rastreador de vuelos rápido creado para spotters. Mira aviones cercanos, busca los datos importantes, guarda tus favoritos y recibe alertas.',download:'Descargar para Android',source:'Ver código fuente',trustFree:'100 % gratis',trustNoAccount:'Sin cuenta',trustPrivate:'Privado',featuresEyebrow:'Hecho para cuando miras al cielo',featuresH2:'Lo útil.<br><span>Nada estorba.</span>',screensEyebrow:'Pantallas reales',galleryTitle:'Menos ceremonia.<br><span>Más aviones.</span>',downloadEyebrow:'Gratis y código abierto',downloadH2:'El cielo<br><span>en tu bolsillo.</span>',downloadBtn:'Descargar APK',faqH2:'Conviene saberlo.',footerPrivacy:'Privacidad' },
    it: { navFeatures:'Funzioni',navScreens:'Schermate',navDownload:'Download',navFaq:'FAQ',navCta:'Ottieni SkyFox',heroEyebrow:'Gratis · open source · Android',heroTitle:'Guarda in alto.<br><span>Scopri cosa sta volando.</span>',heroLede:'Un flight tracker veloce pensato per gli spotter. Vedi gli aerei vicini, cerca i dettagli che contano, salva quelli interessanti e ricevi avvisi.',download:'Scarica per Android',source:'Vedi sorgente',trustFree:'100% gratuito',trustNoAccount:'Nessun account',trustPrivate:'Privacy-friendly',featuresEyebrow:'Pensato per quando alzi lo sguardo',featuresH2:'Le cose utili.<br><span>Niente in mezzo.</span>',screensEyebrow:'Schermate reali',galleryTitle:'Meno cerimonia.<br><span>Più aerei.</span>',downloadEyebrow:'Gratis e open source',downloadH2:'Il cielo<br><span>in tasca.</span>',downloadBtn:'Scarica APK',faqH2:'Buono a sapersi.',footerPrivacy:'Privacy' }
  };

  document.documentElement.lang = currentLocale;
  if (localeSelect) localeSelect.value = currentLocale;

  const dict = t[currentLocale] || {};
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (dict[key]) el.innerHTML = dict[key];
  });

  localeSelect?.addEventListener('change', e => {
    const next = e.target.value;
    location.href = next === 'en' ? '/' : `/${next}/`;
  });

  // Expressive but restrained entrance motion. No motion if user asks for reduced motion.
  const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!reduced && 'IntersectionObserver' in window) {
    const io = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -40px' });
    document.querySelectorAll('.reveal').forEach(el => io.observe(el));
  } else {
    document.querySelectorAll('.reveal').forEach(el => el.classList.add('in-view'));
  }

  // Fetch release metadata without making download depend on the API.
  fetch('https://api.github.com/repos/taynotfound/skyfox/releases/latest', { headers: { Accept: 'application/vnd.github+json' } })
    .then(r => r.ok ? r.json() : Promise.reject())
    .then(release => {
      const tag = document.getElementById('release-tag');
      const notes = document.getElementById('release-notes');
      if (tag && release.tag_name) tag.textContent = release.tag_name;
      if (notes && release.html_url) notes.href = release.html_url;
      const apk = Array.isArray(release.assets) ? release.assets.find(a => /\.apk$/i.test(a.name)) : null;
      const dl = document.getElementById('release-dl');
      if (dl && apk?.browser_download_url) dl.href = apk.browser_download_url;
    })
    .catch(() => {});
})();
