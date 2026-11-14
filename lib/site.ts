// Infos de l'atelier. Les "[À COMPLÉTER]" sont ceux du site d'origine : à remplir ici, une seule fois.
export const site = {
  name: "Atelier Zélium",
  tagline: "Menuiserie & agencement sur mesure",
  address: ["5 Rue de Bègles", "33800 Bordeaux"],
  district: "Quartier Nansouty — Bordeaux",
  phone: "[À COMPLÉTER]",
  email: "[À COMPLÉTER]",
  rating: "4,9",
  reviewCount: 16,
  googleUrl: "#", // TODO : lien de la fiche Google
  mapsQuery: "5 Rue de Bègles 33800 Bordeaux",
  hours: [
    { day: "Lundi – Vendredi", value: "9h – 18h" },
    { day: "Samedi", value: "Sur rendez-vous" },
    { day: "Dimanche", value: "Fermé" },
  ],
} as const;

export const mapsEmbedUrl = `https://www.google.com/maps?q=${encodeURIComponent(site.mapsQuery)}&output=embed`;
export const mapsDirectionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(site.mapsQuery)}`;

export const navLinks = [
  { label: "Savoir-faire", href: "/#savoir-faire" },
  { label: "Atelier & coworking", href: "/#atelier" },
  { label: "Réalisations", href: "/realisations" },
  { label: "L'équipe", href: "/#equipe" },
  { label: "Contact", href: "/#contact" },
] as const;
