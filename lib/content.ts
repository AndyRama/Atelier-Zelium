export type Category =
  | "Cuisines"
  | "Bibliothèques"
  | "Escaliers"
  | "Dressings"
  | "Mobilier"
  | "Agencement pro"
  | "Pièces uniques";

export const categories: Category[] = [
  "Cuisines",
  "Bibliothèques",
  "Escaliers",
  "Dressings",
  "Mobilier",
  "Agencement pro",
  "Pièces uniques",
];

export const projects: {
  slug: string;
  category: Category;
  title: string;
  text: string;
  image: string;
  alt: string;
}[] = [
  {
    slug: "cuisine-chene-massif",
    category: "Cuisines",
    title: "Au cœur de l’atelier",
    text: "Plans de travail, outils et rangements se côtoient sous la mezzanine, dans un grand volume dédié à la fabrication.",
    image: "/images/google-maps/atelier-zelium-03.jpg",
    alt: "Établis et rangements sous une mezzanine de l’atelier",
  },
  {
    slug: "bibliotheque-mur-entier",
    category: "Bibliothèques",
    title: "Des espaces sur deux niveaux",
    text: "Cloisons vitrées, charpente apparente et aménagements en bois organisent les espaces sous la toiture.",
    image: "/images/google-maps/atelier-zelium-06.jpg",
    alt: "Bureaux vitrés et aménagements en bois sous la charpente",
  },
  {
    slug: "escalier-chene-acier",
    category: "Escaliers",
    title: "Un espace pour créer et photographier",
    text: "Un éclairage sur pied et des supports de travail prennent place dans une pièce aux murs et aux matières bruts.",
    image: "/images/google-maps/atelier-zelium-07.jpg",
    alt: "Espace de création avec éclairage de studio et supports de travail",
  },
  {
    slug: "dressing-noyer",
    category: "Dressings",
    title: "La halle de fabrication",
    text: "Une vue d’ensemble montre les établis et les espaces de circulation sous la grande charpente du lieu.",
    image: "/images/google-maps/atelier-zelium-08.jpg",
    alt: "Vue en hauteur de la halle et des postes de travail",
  },
  {
    slug: "table-chene-massif",
    category: "Mobilier",
    title: "La façade de l’atelier",
    text: "Une vue de l’extérieur du lieu, avec sa façade, ses ouvertures et son accès depuis la rue.",
    image: "/images/google-maps/atelier-zelium-10.jpg",
    alt: "Façade extérieure de l’atelier Zélium",
  },
  {
    slug: "agencement-boutique",
    category: "Agencement pro",
    title: "Un lieu ouvert sur la lumière",
    text: "Les ouvertures hautes et la structure en bois participent à la lumière et à l’atmosphère du lieu partagé.",
    image: "/images/google-maps/atelier-zelium-11.jpg",
    alt: "Ouvertures hautes et parois en bois à l’intérieur du lieu",
  },
];

export const services = [
  { title: "Cuisines", text: "Plans de travail, façades, rangements : une cuisine dessinée pour la façon dont vous cuisinez vraiment, pas pour la photo." },
  { title: "Dressings & rangements", text: "Des intérieurs ajustés au centimètre, portes pleines ou cannées, éclairage intégré, tiroirs qui coulissent encore dans vingt ans." },
  { title: "Bibliothèques & rayonnages", text: "Du mur entier aux étagères discrètes, en chêne, noyer ou frêne. Calculées pour les livres que vous avez vraiment." },
  { title: "Escaliers", text: "Droit, tournant, suspendu : l'escalier comme pièce de structure et de menuiserie, dessiné avec l'architecte du lieu." },
  { title: "Mobilier & pièces uniques", text: "Tables, bureaux, meubles sur mesure, pièces à l'unité. Le bois choisi planche par planche, assemblé pour durer." },
  { title: "Agencement professionnel", text: "Boutiques, bureaux, restaurants : agencement complet, du premier plan à la dernière plinthe." },
  { title: "Prototypes & objets", text: "Le Fanophone, des prototypes, des objets à façon : là où la menuiserie rencontre une idée encore mal dessinée." },
];

export const steps = [
  { title: "Écoute & relevé", text: "On vient voir, on mesure, on comprend l'usage. Un café, des questions, un carnet. C'est là que tout se décide." },
  { title: "Conception", text: "Plans, croquis, choix des essences et des finitions. Vous validez avant qu'on coupe la première planche." },
  { title: "Fabrication", text: "Tout se passe à l'atelier, rue Sainte-Cécile : débit, assemblage, ponçage, finition. Vous pouvez passer voir." },
  { title: "Pose & finitions", text: "On installe, on ajuste, on nettoie. Et on repasse dans les mois qui suivent si quelque chose bouge." },
];

export const reviews = [
  { title: "Un lieu atypique et vivant", text: "Du bois partout, de la lumière, des copeaux, un atelier organisé comme il faut — et de belles rencontres." },
  { title: "Un accueil qui donne envie de revenir", text: "Ben prend le temps d'expliquer, de montrer, de faire avec vous. On se sent tout de suite à sa place." },
  { title: "Du travail de professionnels", text: "Une entreprise de construction a utilisé l'atelier à la demande ; le Fanophone y a été créé. Le lieu s'adapte." },
];

export const plans = [
  { title: "À la demande", unit: "Demi-journée ou journée", text: "Vous venez avec votre projet et votre bois. Établi, machines et conseils si vous en voulez." },
  { title: "Abonnement atelier", unit: "Par mois", text: "Pour les professionnels qui ont besoin d'un vrai atelier sans louer un local." },
  { title: "Bureau & coworking", unit: "Poste / mois", text: "Un poste dans un lieu vivant, au milieu des copeaux, avec des architectes de MAA à côté." },
];
