# Atelier Zélium

Site vitrine d’**Atelier Zélium**, consacré à la menuiserie et à l’agencement sur mesure à Bordeaux, ainsi qu’à l’atelier partagé et au coworking. Le site présente les savoir-faire, une galerie illustrative, la méthode de travail, l’équipe et les informations de contact.

- [Dépôt GitHub](https://github.com/AndyRama/Atelier-Zelium)
- [Aperçu Vercel déclaré pour le projet](https://atelier-zelium-sand.vercel.app)

> **État du projet :** le formulaire est une interface sans envoi ni stockage serveur. Les coordonnées, les tarifs et plusieurs contenus restent à compléter ou à confirmer ; les pages légales sont des ébauches. L’URL d’aperçu est déclarée, sans vérification du déploiement, des demandes de devis ni d’un score Lighthouse dans le cadre de cette documentation.

## Fonctionnalités présentes

- Accueil avec présentation de l’atelier, navigation responsive et menu mobile.
- Sept familles de savoir-faire définies dans [lib/content.ts](lib/content.ts) : cuisines ; dressings et rangements ; bibliothèques et rayonnages ; escaliers ; mobilier et pièces uniques ; agencement professionnel ; prototypes et objets, dont le Fanophone cité dans les textes.
- Présentation de l’atelier partagé, des établis, du parc machines et de l’accompagnement, avec trois formules : à la demande, abonnement atelier, bureau et coworking. Les tarifs ne sont pas renseignés.
- Méthode en quatre étapes : écoute et relevé, conception, fabrication, pose et finitions.
- Galerie de six fiches illustratives avec filtres par famille ; la catégorie « Pièces uniques » n’a pas encore de fiche. L’accueil reprend les trois premières fiches.
- Présentation de Ben et du cabinet MAA – Margaux Agnès Architecte, décrit dans les contenus comme partageant les lieux. Le parcours de Ben, le lien du cabinet et ses réalisations restent à compléter : ces textes ne prouvent pas un partenariat contractuel.
- Avis et note enregistrés dans le code, carte Google Maps intégrée et lien d’itinéraire.
- Métadonnées de titre, description, Open Graph et Twitter ; icônes navigateur et Apple existantes.

Les synthèses d’avis, la note de 4,9 et les 16 avis affichés proviennent de [lib/site.ts](lib/site.ts) et [lib/content.ts](lib/content.ts), sans synchronisation Google. Leur exactitude et les autorisations de citation restent à confirmer ; le lien de la fiche Google vaut encore `#`.

## Stack et prérequis

Versions résolues dans [package-lock.json](package-lock.json) :

| Élément                 | Version / usage                            |
| ----------------------- | ------------------------------------------ |
| Next.js                 | 16.4.6, App Router                         |
| React et React DOM      | 19.3.1                                     |
| TypeScript              | 7.0.2, configuration stricte               |
| Tailwind CSS            | 3.4.19, palette et polices personnalisées  |
| PostCSS et Autoprefixer | Traitement des styles                      |
| Fontsource              | Fraunces et Inter variables, paquets 5.3.0 |

Utiliser npm et un environnement **Node.js `>=20.9.0`**, minimum déclaré par la version Next.js verrouillée ; privilégier une version LTS maintenue compatible. Le dépôt ne fixe pas de version Node dans un fichier `.nvmrc` et ne déclare pas de champ `packageManager`. Conserver le lockfile npm et utiliser `npm ci`.

Les polices sont importées depuis les paquets Fontsource dans [app/layout.tsx](app/layout.tsx), puis servies par l’application : aucun chargement Google Fonts n’est prévu dans le navigateur. Cela ne supprime pas les connexions tierces de la carte Google Maps.

## Installation et développement

```bash
git clone https://github.com/AndyRama/Atelier-Zelium.git
cd Atelier-Zelium
npm ci
npm run dev
```

Le serveur de développement utilise `http://localhost:3000` par défaut. Aucune base de données, clé d’e-mail ou configuration de stockage n’est nécessaire au fonctionnement actuel : les contenus sont des données statiques du dépôt.

### Configuration d’environnement

La seule variable lue par les sources applicatives est **`NEXT_PUBLIC_SITE_URL`**, dans [app/layout.tsx](app/layout.tsx). Elle définit la base des URLs de métadonnées ; sans configuration, le repli est `http://localhost:3000`. La définir pour l’environnement publié avec l’origine réellement retenue. Ce README ne fournit aucune valeur de secret.

Les coordonnées, horaires, liens Google et éléments de navigation sont dans [lib/site.ts](lib/site.ts), pas dans des variables d’environnement. Le dépôt ne contient pas de fichier d’exemple d’environnement ni d’intégration serveur d’envoi à configurer.

## Tests et build

Depuis la racine du dépôt :

```bash
# Vérification des formats et dimensions des icônes existantes
node --test tests/favicon.test.cjs

# Construction de production
npm run build

# Démarrage après un build réussi
npm run start
```

Les scripts npm déclarés dans [package.json](package.json) sont `dev`, `build`, `start` et `lint`. **Attention :** le script `lint` appelle `next lint`, commande supprimée dans Next.js 16 ; il n’est donc pas une vérification utilisable avec la version verrouillée. Il reste inchangé et devra faire l’objet d’une correction distincte. Il n’existe ni script npm `test` ni script de contrôle TypeScript séparé.

Le fichier [tests/favicon.test.cjs](tests/favicon.test.cjs) utilise le runner natif Node.js pour vérifier le PNG 192 px, l’icône Apple 180 px et les trois images PNG contenues dans le fichier ICO. Il ne constitue pas une recette du formulaire, des filtres ou du site déployé.

Cette reprise est documentaire : aucune installation, aucun test applicatif, build, serveur ou envoi n’a été exécuté. Les commandes ci-dessus décrivent le dépôt, pas une preuve de leur réussite sur un environnement de publication.

## Pages et navigation

| Route                           | Contenu                                                                                            |
| ------------------------------- | -------------------------------------------------------------------------------------------------- |
| `/`                             | Accueil et sections savoir-faire, atelier, réalisations, méthode, équipe, avis, cabinet et contact |
| `/realisations`                 | Galerie illustrative et filtres côté client                                                        |
| `/mentions-legales`             | Ébauche à rédiger avec l’atelier                                                                   |
| `/politique-de-confidentialite` | Ébauche à rédiger avec l’atelier                                                                   |

Les liens de navigation de [lib/site.ts](lib/site.ts) ciblent `/#savoir-faire`, `/#atelier`, `/#equipe`, `/#contact` et `/realisations`. Le contact n’a pas de page `/contact` dédiée. Les slugs des projets servent d’identifiants ; aucune route de détail `/realisations/[slug]` n’est implémentée et les cartes renvoient à la galerie.

Le layout déclare actuellement `index: true` et `follow: true`, sans exclusion propre aux ébauches légales. Aucun fichier de sitemap, de robots ou de route API n’est présent dans le dépôt. L’image Open Graph pointe sur `/images/atelier.jpg` et porte encore une consigne de remplacement par l’image d’origine.

## Organisation et personnalisation

```text
app/                  Pages, layout, styles globaux et icônes Next.js
components/           Navigation, galerie, formulaire et éléments partagés
components/home/      Sections de l’accueil
lib/site.ts           Identité, coordonnées, horaires, liens et navigation
lib/content.ts        Services, étapes, avis, formules et projets
public/images/        Images locales et illustrations
tests/                Vérifications structurelles des icônes
```

- **Adresse et contact :** [lib/site.ts](lib/site.ts). L’adresse affichée est 5 Rue de Bègles, 33800 Bordeaux, quartier Nansouty ; téléphone et e-mail sont encore `[À COMPLÉTER]`.
- **Horaires :** le code affiche lundi–vendredi 9 h–18 h, samedi sur rendez-vous et dimanche fermé ; [la section contact](components/home/Contact.tsx) indique explicitement qu’ils sont à confirmer avec l’atelier.
- **Offres et contenus partagés :** [lib/content.ts](lib/content.ts). Les prix restent `[Tarif à compléter]` dans [la section atelier](components/home/Atelier.tsx) ; ne pas confondre formules présentées et conditions commerciales finalisées.
- **Sections de l’accueil :** [components/home](components/home), composées dans [app/page.tsx](app/page.tsx). Les textes propres à Ben, au cabinet et à la zone d’intervention y sont également présents, hors des données partagées.
- **Galerie et filtres :** [app/realisations/page.tsx](app/realisations/page.tsx), [components/ProjectsGrid.tsx](components/ProjectsGrid.tsx) et [components/ProjectCard.tsx](components/ProjectCard.tsx).
- **Identité visuelle :** [tailwind.config.ts](tailwind.config.ts) pour les couleurs `cream`, `sand`, `ink`, `body`, `muted`, `gold`, `line` et les familles typographiques ; [app/globals.css](app/globals.css) pour les styles globaux ; [components/Logo.tsx](components/Logo.tsx) pour le nom typographique.
- **Métadonnées et domaine :** [app/layout.tsx](app/layout.tsx), plus les métadonnées des pages concernées.
- **Documents juridiques :** [mentions légales](app/mentions-legales/page.tsx) et [confidentialité](app/politique-de-confidentialite/page.tsx), toutes deux à rédiger.

### Images et icônes

Les photographies de [public/images](public/images) ont été décrites dans le README d’origine comme des recadrages de captures en basse définition, à remplacer par les originaux récupérés depuis Base44 en conservant les noms attendus par les composants. Cette indication de provenance n’établit aucun droit de réutilisation. Les pages présentent explicitement les visuels de réalisations comme des **illustrations**, en attendant les photos, lieux, essences et années des projets réels.

Le README d’origine signalait aussi un hero de remplacement, la capture initiale contenant du texte incrusté. Le composant actuel [Hero.tsx](components/home/Hero.tsx) charge `/images/hero.png`, et non `/images/hero.jpg` : vérifier le bon original, son cadrage et les droits avant substitution, sans déduire du nom du fichier qu’il s’agit d’un chantier client.

Le favicon existant représente le **Z en Fraunces** de l’identité Zélium. Les fichiers [app/favicon.ico](app/favicon.ico), [app/icon.png](app/icon.png) et [app/apple-icon.png](app/apple-icon.png) suivent les conventions natives Next.js : ICO avec tailles 16, 32 et 48 px, PNG 192 × 192 px et icône Apple 180 × 180 px. Ils sont déjà présents ; cette documentation ne les régénère pas et ne modifie pas leur intégration.

## Formulaire : fonctionnement réel

[components/ContactForm.tsx](components/ContactForm.tsx) appelle uniquement `preventDefault()` lors de la soumission. Il ne contacte aucune API, n’envoie aucun e-mail et ne crée aucune demande de devis. Aucune intégration Resend, Brevo ou SMTP, base de données ou zone de stockage privée n’est branchée.

- Les champs affichés sont le nom et prénom, l’e-mail, le téléphone, le type de projet, le budget indicatif, la description du projet, les photos ou plans et la case de consentement.
- Les attributs `required` existent, mais le formulaire utilise `noValidate` et n’a pas de validation JavaScript dédiée : ils ne constituent pas une validation effective de soumission.
- La sélection accepte plusieurs images ou PDF. L’interface annonce cinq fichiers maximum, mais aucun contrôle de nombre ou de taille n’est implémenté.
- Les fichiers sélectionnés restent dans le navigateur : aucun téléversement ni stockage serveur n’est effectué. Le texte affiché promettant un « espace privé » ne décrit donc pas une fonctionnalité existante et doit être corrigé ou concrétisé avant publication.
- Les tranches de budget sont explicitement à valider avec l’atelier ; elles ne constituent pas une grille tarifaire.
- Aucun retour de réussite ou d’erreur d’envoi n’est implémenté.

Le commentaire du composant envisage `react-hook-form`, Zod, un route handler `/api/contact`, un envoi Brevo/SMTP et un upload : c’est une piste de travail, pas une dépendance installée ni une API existante. Pour activer le formulaire, prévoir validation serveur des champs et pièces jointes, protection anti-abus, gestion d’erreurs et confirmation réelle, stockage privé avec contrôles d’accès si nécessaire, règles de conservation et information des personnes. Réconcilier ensuite les textes du formulaire et la politique de confidentialité avec le traitement réellement réalisé.

## Avant une publication définitive

- [ ] Confirmer l’adresse, compléter téléphone et e-mail, valider les horaires et renseigner le vrai lien Google dans [lib/site.ts](lib/site.ts).
- [ ] Faire valider les sept familles de savoir-faire, les étapes d’intervention, la zone annoncée, le parcours de Ben et les informations sur le cabinet MAA ; ajouter les liens et autorisations pertinents sans présumer d’un partenariat.
- [ ] Finaliser les formules d’atelier partagé et de coworking, les tarifs et conditions, ainsi que les tranches de budget du formulaire.
- [ ] Vérifier les avis, leur note, leur nombre et les autorisations de citation ; ne pas présenter les synthèses comme des citations originales vérifiées.
- [ ] Remplacer ou valider les illustrations et le hero avec des originaux adaptés ; obtenir les droits nécessaires et documenter les crédits. Compléter les fiches de projets réels sans transformer les illustrations en références client.
- [ ] Décider du maintien inactif ou de l’activation du formulaire ; supprimer les promesses non implémentées ou tester le traitement effectivement mis en place.
- [ ] Rédiger et faire valider les mentions légales et la confidentialité : identité de l’éditeur, hébergement et traitements réels, notamment ceux du formulaire s’il est activé.
- [ ] Examiner les connexions Google Maps et les exigences de consentement : l’iframe actuelle est sans clé et sans mécanisme de consentement préalable. Le README d’origine proposait une alternative Leaflet/OSM ou une bannière selon la politique retenue ; aucune n’est implémentée.
- [ ] Configurer `NEXT_PUBLIC_SITE_URL`, choisir l’image Open Graph définitive et décider de l’indexation des pages encore incomplètes.
- [ ] Corriger séparément la commande de lint obsolète ; contrôler les dépendances, les liens, l’accessibilité, le responsive, les icônes et le build sur l’environnement réellement destiné à la publication.

Une carte chargée peut établir une connexion à Google ; les liens d’itinéraire ouvrent aussi un service tiers. L’absence d’envoi du formulaire ne signifie donc pas absence de tout échange de données. Une fusion Git, un build ou une URL d’aperçu ne prouvent ni conformité juridique ni livraison de demandes de devis.

## Droits et contributions

Le dépôt ne contient pas de licence générale de réutilisation. Le champ npm `private: true` empêche une publication npm accidentelle ; il ne constitue pas une licence propriétaire et ne précise pas les droits sur le code ou les contenus.

Aucune autorisation de reprendre librement le code, la marque, les textes, les avis ou les images ne doit être déduite de la présence du dépôt. Les dépendances, polices et autres ressources tierces conservent leurs licences et conditions propres. Les photos illustratives et les droits non confirmés ne deviennent pas la propriété de l’atelier par leur présence dans le site ; une attribution ne remplace pas une autorisation.

Pour contribuer, isoler les changements sur une branche, vérifier les contrôles pertinents et ouvrir une pull request. Revue, fusion et déploiement restent des étapes distinctes.
