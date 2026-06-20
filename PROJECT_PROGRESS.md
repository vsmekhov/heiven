# Heiven Cercle Pro - note de reprise

Derniere mise a jour : 2026-06-20

## Objectif du projet

Construire localement une landing page premium pour Heiven Cercle Pro, ciblee medecins, chirurgiens et praticiens premium. Le projet reste local dans `/Users/thomas/work/heiven-cercle-pro` jusqu'au transfert vers le futur GitHub Heiven/Vercel.

Ne pas utiliser ni recopier les identifiants d'un eventuel document d'acces. Aucun secret n'est necessaire pour cette V1.

## Stack et structure

- Stack : Astro + TypeScript + CSS simple.
- Textes modifiables : `content/landing.ts`.
- Composants : `src/components/`.
- Page principale : `src/pages/index.astro`.
- Styles globaux : `src/styles/global.css`.
- Assets publics : `public/assets/`.
- Build statique : `npm run build`, sortie dans `dist/`.
- Dev local : `npm run dev`.

Le dossier n'est actuellement pas un repo Git initialise.

## Etat actuel

- La landing est fonctionnelle et build correctement.
- Derniere validation connue : `npm run build` OK.
- Le parcours est pense mobile-first, avec plus d'espace au debut pour guider la lecture.
- Le hero sert de premiere section d'entree, avec header rassurant, fond photo en mosaique, titre premium et CTA isole.
- Le hero ne contient plus de sous-texte sous le titre. Les trois points de reassurance sont conserves sous le pictogramme.
- Le pictogramme sous le titre est `TrendingUp`, choisi pour representer la croissance tout en restant sobre dans une DA medicale.
- Le CTA principal reste `Candidater au Cercle Pro`.
- Le CTA secondaire `Voir la methode` doit rester la derniere action de la premiere section.
- Les cartes chiffres `3`, `1`, `0` ont ete retirees de la section noire et placees au debut de la section blanche `#probleme`.
- Ces cartes sont une par ligne sur mobile, fond sombre, sans fond de section supplementaire.
- Les grandes icones medicales des cartes sont en or, legerement transparentes, positionnees a droite et doivent se superposer subtilement avec le texte.

## Direction artistique validee

- Priorite mobile-first.
- Look premium, medical, sobre et confidentiel.
- Cible explicite : medecins, chirurgiens, praticiens premium, cabinets et cliniques privees.
- Ne pas donner une impression marketing opportuniste.
- Favoriser espace, respiration, confiance, lisibilite.
- Iconographie lucide, medicale quand possible : `Stethoscope`, `Hospital`, `PillBottle`, `HeartPulse`, etc.
- Palette actuelle : vert clinique sombre, blanc casse, or discret.

## Contenu actuel important

Hero :

- Eyebrow : `Cercle prive pour medecin-chirurgien et praticien premium`.
- Titre : `Votre reputation, votre merite, votre presence a la hauteur.`
- Sous-titre : vide volontairement.
- Reassurances :
  - `Pense pour les medecins et cabinets prives`
  - `Presence sobre, pedagogique et premium`
  - `Demandes mieux qualifiees, sans contenu opportuniste`

Cartes chiffres dans `hero.stats` :

- `3` : axes pour une patientele qualifiee, avec elements Images, Cliniques, Preuves, Recommandations, icone `Stethoscope`.
- `1` : cadre editorial medical coherent, icone `Hospital`.
- `0` : contenu opportuniste, icone `PillBottle`.

## Fichiers a surveiller

- `content/landing.ts` : source principale pour textes, CTA, FAQ, stats, experts.
- `src/components/Hero.astro` : header, hero, CTA principal/secondaire, pictogramme sous le titre.
- `src/components/ProblemSection.astro` : rendu des cartes `3`, `1`, `0` dans la section blanche.
- `src/components/Icon.astro` : registre des icones Lucide disponibles.
- `src/styles/global.css` : responsive, espacement, superposition des icones dans les cartes.

## Points a ne pas casser

- Tous les textes principaux doivent rester centralises dans `content/landing.ts` quand c'est logique.
- Les images doivent garder des `alt` utiles quand elles sont informatives.
- Ne pas remettre les cartes `3`, `1`, `0` dans la section noire.
- Ne pas remettre de gros sous-texte sous le hero title.
- Ne pas ajouter de secrets, tokens, mots de passe ou acces externes.
- Garder les CTA Tally en placeholder tant que l'URL finale n'est pas fournie.

## Prochaines actions probables

- Reprendre l'ajustement visuel en mobile uniquement si demande utilisateur.
- Verifier les espacements hero/cartes sur mobile avec un serveur local.
- Ajuster la superposition texte/icone dans les cartes si le rendu n'est pas assez premium.
- Remplacer l'URL Tally placeholder quand le formulaire final est disponible.
