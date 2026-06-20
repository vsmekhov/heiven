# Heiven Cercle Pro

Landing page locale pour Heiven Cercle Pro.

Le projet est volontairement simple : une landing statique Astro, avec tous les textes dans un seul fichier et les images dans un dossier public. Il est prêt à être transféré vers un futur GitHub Heiven puis connecté à Vercel.

## Modifier la page

- Textes, FAQ, CTA, chiffres et sections : `content/landing.ts`
- Images, logo et portraits : `public/assets/`
- Structure des sections : `src/components/`
- Styles globaux : `src/styles/global.css`

## Lancer en local

```bash
npm install
npm run dev
```

## Préparer la mise en ligne

```bash
npm run build
```

Le dossier généré est `dist/`.

## Points à remplacer plus tard

- URL Tally dans `content/landing.ts`
- Tarif et calendrier si besoin
- Intégrations Stripe, CRM ou tracking après validation visuelle

## Sécurité

Aucun identifiant, mot de passe ou accès externe n'est nécessaire pour cette V1 locale. Ne pas ajouter de secrets dans le repo.
