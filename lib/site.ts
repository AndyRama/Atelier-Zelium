// Infos de l'atelier. Les "[À COMPLÉTER]" sont ceux du site d'origine : à remplir ici, une seule fois.
export const site = {
  name: "Atelier Zélium",
  tagline: "Menuiserie & agencement sur mesure",
  address: ["19 rue Sainte-Cécile", "33000 Bordeaux"],
  district: "Bordeaux",
  phone: "06 ...",
  email: "[À COMPLÉTER]",
  rating: "4,9",
  reviewCount: 16,
  googleUrl: "https://www.google.com/maps/place/Atelier+Zelium/data=!4m7!3m6!1s0xd5527eb3c73f9f9:0x14891e368ce4953c!8m2!3d44.8311808!4d-0.5857399!16s%2Fg%2F1tdmrcq3!19sChIJ-flzPOsnVQ0RPJXkjDYeiRQ",
  mapsQuery: "19 rue Sainte-Cécile 33000 Bordeaux",
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
  { label: "Nos locaux", href: "/realisations" },
  { label: "L'équipe", href: "/#equipe" },
  { label: "Contact", href: "/#contact" },
] as const;
