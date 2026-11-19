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
    title: "Cuisine en chêne massif",
    text: "Façades en chêne aux lignes simples, plan de travail en pierre claire, rangements jusqu'au plafond.",
    image: "/images/cuisine.jpg",
    alt: "Façades de cuisine en chêne massif avec plan de travail en pierre claire",
  },
  {
    slug: "bibliotheque-mur-entier",
    category: "Bibliothèques",
    title: "Bibliothèque sur tout un mur",
    text: "Du sol au plafond, en noyer, avec des hauteurs d'étagères calculées pour les livres et les objets.",
    image: "/images/bibliotheque.jpg",
    alt: "Bibliothèque en noyer sur toute la hauteur d'un mur",
  },
  {
    slug: "escalier-chene-acier",
    category: "Escaliers",
    title: "Escalier en chêne et acier",
    text: "Marches en chêne massif sur un limon d'acier noirci : structure discrète, bois généreux.",
    image: "/images/escalier.jpg",
    alt: "Escalier en chêne massif sur limon d'acier noirci",
  },
  {
    slug: "dressing-noyer",
    category: "Dressings",
    title: "Dressing toute hauteur en noyer",
    text: "Des tablettes, des penderies et de la lumière intégrée, montés au millimètre sous un plafond ancien.",
    image: "/images/dressing.jpg",
    alt: "Dressing en noyer avec penderies et éclairage intégré",
  },
  {
    slug: "table-chene-massif",
    category: "Mobilier",
    title: "Table en chêne massif",
    text: "Un plateau d'un seul tenant, des assemblages à queues d'aronde, une finition qui laisse vivre le bois.",
    image: "/images/table.jpg",
    alt: "Détail d'un assemblage à queues d'aronde sur une table en chêne",
  },
  {
    slug: "agencement-boutique",
    category: "Agencement pro",
    title: "Agencement d'une boutique",
    text: "Présentoirs, banque d'accueil et jeux de lumière : un agencement complet, livré et posé.",
    image: "/images/boutique.jpg",
    alt: "Boutique agencée en bois avec présentoirs et rails de lumière",
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
