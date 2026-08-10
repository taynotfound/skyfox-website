const locales = {
  en: {
    heroTitle: "Keep your eyes on the sky.",
    heroLede: "SkyFox is a fast, privacy-friendly flight tracker for people who want the aircraft, not the account system around it.",
    download: "Download the latest APK ↗",
    downloadShort: "Download APK ↗",
    seeInAction: "See it in action ↓",
    galleryTitle: "Less ceremony. More aircraft.",
    galleryIntro: "Real SkyFox screens from the app, not mockups.",
    labels: ["Live map", "Search", "Watchlist", "Plane details"],
  },
  de: {
    heroTitle: "Behalte den Himmel im Blick.",
    heroLede: "SkyFox ist ein schneller, datenschutzfreundlicher Flugtracker für Menschen, die Flugzeuge sehen wollen, nicht ein Kontosystem.",
    download: "Neuestes APK laden ↗",
    downloadShort: "APK laden ↗",
    seeInAction: "In Aktion ansehen ↓",
    galleryTitle: "Weniger Umwege. Mehr Flugzeuge.",
    galleryIntro: "Echte SkyFox-Bildschirme aus der App, keine Mockups.",
    labels: ["Live-Karte", "Suche", "Beobachtungsliste", "Flugdetails"],
  },
  fr: {
    heroTitle: "Garde les yeux vers le ciel.",
    heroLede: "SkyFox est un suivi de vols rapide et respectueux de la vie privée, sans compte obligatoire.",
    download: "Télécharger le dernier APK ↗",
    downloadShort: "Télécharger l’APK ↗",
    seeInAction: "Voir l’application ↓",
    galleryTitle: "Moins de détour. Plus d’avions.",
    galleryIntro: "De vrais écrans SkyFox, pas des maquettes.",
    labels: ["Carte en direct", "Recherche", "Suivi", "Détails du vol"],
  },
  es: {
    heroTitle: "Mira al cielo.",
    heroLede: "SkyFox es un rastreador de vuelos rápido y respetuoso con la privacidad, sin cuentas obligatorias.",
    download: "Descargar el APK más reciente ↗",
    downloadShort: "Descargar APK ↗",
    seeInAction: "Verlo en acción ↓",
    galleryTitle: "Menos ruido. Más aviones.",
    galleryIntro: "Pantallas reales de SkyFox, no maquetas.",
    labels: ["Mapa en directo", "Búsqueda", "Seguimiento", "Detalles del avión"],
  },
  it: {
    heroTitle: "Tieni gli occhi sul cielo.",
    heroLede: "SkyFox è un tracker di voli veloce e rispettoso della privacy, senza account obbligatori.",
    download: "Scarica l’ultimo APK ↗",
    downloadShort: "Scarica APK ↗",
    seeInAction: "Guardalo in azione ↓",
    galleryTitle: "Meno rumore. Più aerei.",
    galleryIntro: "Schermate reali di SkyFox, non mockup.",
    labels: ["Mappa live", "Ricerca", "Monitoraggio", "Dettagli del volo"],
  },
};

const gallery = document.querySelector("#gallery");
const localeSelect = document.querySelector("#locale");
const galleryButtons = [...document.querySelectorAll("[data-gallery-locale]")];
const screens = ["map", "search", "watch", "plane-details"];

function renderGallery(locale) {
  const copy = locales[locale] || locales.en;
  gallery.innerHTML = screens.map((screen, index) => `
    <figure>
      <img src="assets/screenshots/${locale}/${screen}.png" alt="SkyFox ${copy.labels[index]}" loading="lazy">
      <figcaption><span>0${index + 1}</span> ${copy.labels[index]}</figcaption>
    </figure>
  `).join("");
  galleryButtons.forEach((button) => button.classList.toggle("active", button.dataset.galleryLocale === locale));
}

function applyLocale(locale) {
  const copy = locales[locale] || locales.en;
  document.documentElement.lang = locale;
  document.title = `SkyFox, ${copy.galleryTitle.toLowerCase()}`;
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const value = copy[element.dataset.i18n];
    if (value) element.textContent = value;
  });
  localeSelect.value = locale;
  renderGallery(locale);
  localStorage.setItem("skyfox-locale", locale);
}

const requestedLocale = new URLSearchParams(location.search).get("lang");
const initialLocale = locales[requestedLocale] ? requestedLocale : (localStorage.getItem("skyfox-locale") || "en");
applyLocale(initialLocale);
localeSelect.addEventListener("change", (event) => applyLocale(event.target.value));
galleryButtons.forEach((button) => button.addEventListener("click", () => {
  applyLocale(button.dataset.galleryLocale);
  localeSelect.value = button.dataset.galleryLocale;
}));

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (event) => {
    const target = document.querySelector(link.getAttribute("href"));
    if (!target) return;
    event.preventDefault();
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});
