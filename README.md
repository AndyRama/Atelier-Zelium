# Atelier Zélium — clone Next.js

Clone de https://zelium-wood-craft.base44.app : Next.js (App Router), TypeScript, Tailwind v3. Polices auto-hébergées (Fraunces + Inter via fontsource), aucune requête vers Google Fonts.

```bash
npm install
npm run dev     # http://localhost:3000
npm run build
```

## Où modifier quoi
- `lib/site.ts` : adresse, téléphone, email, horaires, lien Google, nav (les `[À COMPLÉTER]` d'origine sont ici)
- `lib/content.ts` : services, étapes, avis, formules, réalisations
- `components/home/*` : sections de l'accueil · `app/realisations` : page + filtres
- `tailwind.config.ts` : palette (cream, sand, ink, gold) et polices

## À faire
- **Formulaire** (`components/ContactForm.tsx`) : mise en page seule, il n'envoie rien. Prévu : react-hook-form + zod, route handler, Brevo/SMTP, upload des fichiers.
- **Images** : les photos de `public/images` sont rognées depuis tes captures (basse définition). Remplace-les par les originaux téléchargés depuis Base44, mêmes noms de fichiers. Le hero est une image de remplacement (la capture a le texte incrusté).
- **Carte** : iframe Google Maps sans clé. À remplacer (Leaflet/OSM, ou bannière de consentement) selon ta politique cookies.
- Pages légales : stubs à rédiger. Image OG (`app/layout.tsx`) et `NEXT_PUBLIC_SITE_URL` en prod.
