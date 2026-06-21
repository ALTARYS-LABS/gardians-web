# CLAUDE.md — GARDIAN'S ASSISTANCE Website
## Fichier de gouvernance projet · v2.0 (maquettes Claude Design intégrées)

---

## 0. MISSION STATEMENT

Construire le site vitrine statique de GARDIAN'S ASSISTANCE — entreprise de sécurité privée agréée en Côte d'Ivoire — pixel-fidèle aux maquettes Claude Design approuvées.

**Stack imposée :**
- HTML5 sémantique
- CSS3 (custom properties, Grid, Flexbox, multi-columns)
- Vanilla JS (ES6+, pas de framework)
- Aucun framework CSS (pas Bootstrap, Tailwind, etc.)
- Déploiement GitHub Pages → chemins relatifs uniquement

---

## 1. RÈGLES ABSOLUES (à respecter sur CHAQUE fichier produit)

### 1.1 Données entreprise
- Utiliser **uniquement** les données de la section "Company Data" du PROMPT
- Ne JAMAIS inférer, inventer ou compléter des données non fournies
- Toute donnée non confirmée → commentaire `<!-- TODO: À confirmer avec le client -->`

### 1.2 Contenu IA
- Tout contenu généré par IA (témoignages, descriptions de photos, noms de clients) → marqué `<!-- AI-generated, to be reviewed by client -->`
- Concerne : tous les témoignages (9 + 1 featured), titres des photos galerie, descriptions de services (validées mais à confirmer)

### 1.3 Chemins
- ZÉRO chemin absolu → toujours `./css/`, `./images/`, `./js/`, `../images/`
- URLs sociales Facebook et LinkedIn → `href="#" <!-- TODO: URL à fournir -->`

### 1.4 CSS
- TOUS les tokens de design via `--custom-properties` dans `:root` (variables.css)
- `border-radius` max `4px` partout (var(--radius))
- ZÉRO gradient (`linear-gradient`, `radial-gradient`) sauf overlay galerie (rgba → transparent)
- Zéro dépendance externe CSS (tout en local)

### 1.5 Accessibilité
- `alt` descriptif sur toutes les images
- `aria-hidden="true"` sur tous les éléments décoratifs
- `role` et `aria-*` corrects sur composants interactifs (nav, tabs galerie, formulaire)
- Focus visible jaune sur tous les éléments focusables

---

## 2. STRUCTURE DE FICHIERS (cible)

```
gardians-web/
├── index.html
├── a-propos.html
├── services.html
├── galerie.html
├── temoignages.html
├── contact.html
├── partenaires.html      ← placeholder (contenu à fournir)
├── blog.html             ← placeholder (contenu à fournir)
├── carrieres.html        ← placeholder (contenu à fournir)
├── 404.html
├── sitemap.xml
├── robots.txt
├── css/
│   ├── reset.css
│   ├── variables.css     ← :root tokens UNIQUEMENT
│   ├── base.css          ← typographie, éléments globaux, utilitaires
│   ├── components.css    ← nav, footer, btn, cards, forms, badges, séparateurs
│   └── pages/
│       ├── home.css
│       ├── about.css
│       ├── services.css
│       ├── gallery.css
│       ├── testimonials.css
│       └── contact.css
├── js/
│   ├── nav.js
│   ├── gallery-filter.js
│   └── contact-form.js
└── images/
    ├── logo/
    │   ├── gardians-logo.svg
    │   └── gardians-logo-white.svg
    ├── icons/
    │   └── [icônes SVG individuels : shield, camera, pin, lock, headphone, person, etc.]
    ├── gallery/
    │   └── [images galerie — fournies par client]
    └── og-image.jpg      ← 1200×630px pour Open Graph
```

---

## 3. COMPOSANTS PARTAGÉS (référence exacte maquettes)

### 3.1 Navigation (`<nav class="nav" id="main-nav">`)

**Éléments visibles :**
- Logo gauche (SVG)
- Liens : Accueil | À propos | Services | Galerie | Partenaires | Témoignages | Blog | Carrières | Contact
- CTA bouton jaune : "Nous contacter" → `contact.html`
- Lien actif : couleur jaune + border-bottom 2px jaune
- Hamburger mobile (< 768px) : 3 barres blanches, aria-expanded

**Comportement JS (nav.js) :**
```javascript
// Sticky + fond dark au scroll
window.addEventListener('scroll', () => {
  nav.classList.toggle('nav--scrolled', window.scrollY > 60);
});
// Toggle menu mobile
toggle.addEventListener('click', () => {
  const expanded = toggle.getAttribute('aria-expanded') === 'true';
  toggle.setAttribute('aria-expanded', String(!expanded));
  menu.classList.toggle('nav__menu--open');
});
```

### 3.2 Footer (`<footer class="footer">`)

**3 colonnes :**
1. Logo blanc + tagline "Votre sécurité, notre priorité." + icônes sociales (F | in | WA)
2. "NAVIGATION" (jaune uppercase) + liste liens (9 liens)
3. "CONTACT" (jaune uppercase) + adresse, 2 tels, email, WhatsApp

**Icônes sociales :** carrés 36×36px, fond `#1A1A1A`, SVG blanc, hover fond jaune `#F5C400`

**Note importante :** URLs Facebook et LinkedIn = `href="#"` avec commentaire TODO

### 3.3 Boutons

| Classe | Fond | Texte | Hover |
|---|---|---|---|
| `.btn--primary` | `#F5C400` | `#0D0D0D` | fond `#D4AA00` |
| `.btn--outline` | transparent | `#FFFFFF` | fond `#FFFFFF`, texte `#0D0D0D` |
| `.btn--full` | (+ width: 100%) | – | – |

### 3.4 Page Hero (pages internes)

```
Fond : #0D0D0D
Breadcrumb : "Accueil > [Page]" (jaune → blanc)
H1 : Montserrat Bold, ≥ 2.5rem, blanc
Underline : 40px × 3px, #F5C400
Padding : 60px top / 60px bottom
```

### 3.5 Section Underline décoratif

```html
<div class="section-underline" aria-hidden="true"></div>
```
```css
.section-underline { width: 40px; height: 3px; background: #F5C400; margin-top: 12px; }
/* Centré : margin-left: auto; margin-right: auto; */
```

### 3.6 Section Label (badge texte)

```html
<span class="section-label">NOTRE HISTOIRE</span>
```
```css
.section-label { color: #F5C400; font-family: 'Montserrat'; font-weight: 600;
                  font-size: 0.75rem; letter-spacing: 0.2em; text-transform: uppercase;
                  display: block; margin-bottom: 8px; }
```

### 3.7 CTA Banner

```
Fond : #1A1A1A
H2 : blanc, centré, Montserrat Bold
Sous-titre : #AAA, centré, Inter Regular
Bouton : .btn--primary, centré
```

**Variantes par page :**
| Page | H2 | Sous-titre | Bouton |
|---|---|---|---|
| Accueil | "Besoin d'un devis ?" | "Contactez-nous dès aujourd'hui." | "Demander un devis" |
| À propos | "Travaillons ensemble." | "Confiez votre sécurité à un partenaire agréé et expérimenté." | "Demander un devis" |
| Services | "Besoin d'un devis ?" | "Contactez-nous dès aujourd'hui." | "Demander un devis" |
| Témoignages | "Rejoignez nos clients satisfaits." | "Confiez votre sécurité à un partenaire de confiance." | "Demander un devis" |

### 3.8 Service Card (`.service-card`)

```
Structure : icône SVG jaune (top) + H3 + p + underline jaune (bottom-left)
Fond : blanc
Border : 1px solid #E0E0E0
Padding : 28px
Border-radius : 4px
Hover : box-shadow + translateY(-2px)
```

### 3.9 Placeholder Image

```css
.img-placeholder {
  background: var(--color-dark);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #555;
  font-family: var(--font-body);
  font-size: 0.75rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}
```

---

## 4. COMPOSANTS SPÉCIFIQUES PAR PAGE

### 4.1 index.html — Composants spécifiques

#### Stats Bar (`.stats-bar`)
- Fond `#F5C400` (jaune plein)
- 3 stats avec séparateurs verticaux `1px solid rgba(0,0,0,0.2)`
- Chiffres : Montserrat Bold ≥ 2.5rem, noir
- Labels : Inter Medium 0.85rem, noir

#### Hero Image Frame (`.hero__image-frame`)
- Coins en L jaune (`::before` / `::after` positionnés en absolu)
- Fond `#2A2A2A`, aspect-ratio 4/3
- PAS de border-radius

#### ASAP Feature Pills (`.asap-feature`)
- Grille 2×2
- Fond `rgba(255,255,255,0.05)`, border `rgba(255,255,255,0.1)`
- Icône SVG jaune + label blanc

### 4.2 a-propos.html — Composants spécifiques

#### History Stat Cards (`.history-stat`)
- 2 cards empilées, fond `#0D0D0D`
- Card 1 : chiffre `130M` en jaune géant
- Card 2 : chiffre `1 285` en blanc géant
- Sous les 2 cards : 2 badges `MEMIS` et `SGS` en grille 2 colonnes

#### MEMIS / SGS Badges (`.history-badge`)
- Fond `#F5F5F5`, border-top `3px solid #F5C400`
- Label jaune + description muted

#### Cities Grid (`.cities-grid`)
- 3 colonnes × 5 lignes = 15 villes
- Chaque ville : `border-left: 3px solid #F5C400`, fond blanc
- "Siège" et "Agence" en label muted inline

#### Legal Table (`.legal-table`)
- Table HTML sémantique, border-collapse
- Colonne label : uppercase, muted, 220px
- Alternance de couleur légère sur les `<tr>` (optionnel)

### 4.3 services.html — Composants spécifiques

#### Services Grid Full (`.services-grid--full`)
- 3 colonnes × 3 rangées = 9 service cards
- Cards identiques à home mais descriptions complètes

#### ASAP Feature Cards (`.asap-feature-card`)
- Version étendue : icône + H4 + description (vs. pills sur home)
- Fond `#0D0D0D`, border-left jaune au hover
- Grille 2×2

### 4.4 galerie.html — Composants spécifiques

#### Gallery Filter Tabs (`.gallery-filter`)
- `role="tab"`, `aria-selected`
- Actif : fond `#0D0D0D`, texte blanc, border sombre
- Inactif : fond transparent, border `#E0E0E0`
- Hover : fond `#0D0D0D`, texte blanc

#### Gallery Masonry Grid (`.gallery-grid`)
- Technique : CSS `columns: 3; column-gap: 16px`
- `break-inside: avoid` sur chaque `.gallery-item`
- Overlay gradient (bottom-to-top) sur hover
- Badge catégorie jaune en haut gauche de chaque item
- Titre blanc en bas gauche
- Responsive : 3 col → 2 col → 1 col

#### Gallery Filter JS (`gallery-filter.js`)
```javascript
// Logique de filtrage
document.querySelectorAll('.gallery-filter').forEach(btn => {
  btn.addEventListener('click', () => {
    const filter = btn.dataset.filter;
    // Update active state
    document.querySelectorAll('.gallery-filter').forEach(b => {
      b.classList.remove('gallery-filter--active');
      b.setAttribute('aria-selected', 'false');
    });
    btn.classList.add('gallery-filter--active');
    btn.setAttribute('aria-selected', 'true');
    // Filter items
    document.querySelectorAll('.gallery-item').forEach(item => {
      const show = filter === 'all' || item.dataset.category === filter;
      item.style.display = show ? 'block' : 'none';
    });
  });
});
```

### 4.5 temoignages.html — Composants spécifiques

#### Featured Testimonial (`.testimonial-featured`)
- Fond `#0D0D0D`, pleine largeur
- Guillemet SVG jaune géant (top-left)
- `<blockquote>` Montserrat SemiBold ≥ 1.3rem, blanc
- Attribution : barre verticale jaune (4px) + nom bold + rôle jaune

#### Testimonial Cards (`.testimonial-card`)
- Grille 3 × 3 = 9 cards
- Guillemet `"` jaune géant (3rem) en haut
- Corps texte Inter Regular
- Séparateur `<hr>` style fin gris
- Nom Montserrat SemiBold + rôle Inter jaune

### 4.6 contact.html — Composants spécifiques

#### Contact Form (`.contact-form`)
- Grille 2 colonnes pour `[Nom | Email]` et `[Téléphone | Objet (select)]`
- Textarea pleine largeur
- Bouton pleine largeur jaune
- `.form-status` : zone `aria-live="polite"` pour retour soumission
- Validation JS : required fields + format email

#### Contact Info Card (`.contact-info-card`)
- Fond `#1A1A1A` (dark, pas noir absolu)
- 5 items avec icône SVG jaune + label jaune small + valeur blanche
- Carte interactive → placeholder fond `#0D0D0D` + pin SVG jaune + texte GPS

---

## 5. SEO REFERENCE

### Pages et leurs meta uniques

| Page | `<title>` | `<meta description>` |
|---|---|---|
| index.html | GARDIAN'S ASSISTANCE — Sécurité privée agréée en Côte d'Ivoire | Prestataire de sécurité privée agréé depuis 1998. Gardiennage, vidéosurveillance, géolocalisation, contrôle d'accès. 1 285 agents dans 15+ villes. |
| a-propos.html | À propos — GARDIAN'S ASSISTANCE \| Histoire, agrément et présence nationale | Fondée en 1998 par M. CANDAS Frédéric, GARDIAN'S ASSISTANCE est agréée par le Ministère de l'Intérieur. SARL de 130M F CFA de capital, 1 285 agents dans 15+ villes. |
| services.html | Nos Services — GARDIAN'S ASSISTANCE \| Gardiennage, Vidéosurveillance, Géolocalisation | Gardiennage, vidéosurveillance, géolocalisation, contrôle d'accès, téléassistance, protection rapprochée, rondes, sécurité événementielle, conseil & audit. Application ASAP. |
| galerie.html | Galerie — GARDIAN'S ASSISTANCE \| Équipes, Équipements, Formations, Événements | Découvrez nos équipes sur le terrain, nos équipements de sécurité, nos formations et événements. Photos authentiques de GARDIAN'S ASSISTANCE en Côte d'Ivoire. |
| temoignages.html | Témoignages — GARDIAN'S ASSISTANCE \| Avis de nos clients | Découvrez ce que disent nos clients : banques, industries, sites miniers, pharmaceutiques, événements en Côte d'Ivoire. GARDIAN'S ASSISTANCE, partenaire de confiance depuis 1998. |
| contact.html | Contact — GARDIAN'S ASSISTANCE \| Demande de devis, Treichville Abidjan | Contactez GARDIAN'S ASSISTANCE pour un devis. Treichville, Abidjan. Tél : 27 21 756 205. Email : contact@gardians.ci. |

### Schema.org (index.html uniquement)
- Type : `LocalBusiness`
- Inclure : nom, url, logo, adresse, GPS, téléphones, email, fondation 1998, effectif 1285
- Voir PROMPT section 7.2 pour JSON-LD complet

### Fichiers SEO
- `sitemap.xml` : 6 pages principales, priority 0.6–1.0
- `robots.txt` : `Allow: /`, `Disallow: /404.html`, Sitemap URL

---

## 6. RESPONSIVE BREAKPOINTS

```
< 480px  : Mobile étroit (Samsung A-series standard CIV)
480–767px : Mobile large / petite tablette
768–1023px : Tablette
1024–1279px : Petit desktop
≥ 1280px : Desktop standard
```

**Grilles principales :**

| Composant | < 600px | 600–1023px | ≥ 1024px |
|---|---|---|---|
| Services grid | 1 col | 2 col | 3 col |
| Cities grid | 1 col | 2 col | 3 col |
| Testimonials grid | 1 col | 2 col | 3 col |
| ASAP features | 1 col | 2 col | 2 col |
| Contact layout | 1 col | 1 col | 2 col (55/45) |
| History layout | 1 col | 1 col | 2 col (65/35) |
| Gallery grid (columns) | 1 | 2 | 3 |
| Footer | 1 col | 2 col | 3 col |

---

## 7. JS MODULES

### nav.js
- Sticky navigation au scroll (threshold 60px)
- Toggle mobile menu (hamburger)
- Mise à jour `aria-expanded`
- Fermeture menu au clic sur lien

### gallery-filter.js
- Filtrage par `data-category` sur `.gallery-item`
- Mise à jour `aria-selected` et classe active
- Support `data-filter="all"`
- Animation opacity (0.3s ease)

### contact-form.js
- Validation : champs required, format email
- Messages d'erreur inline sous les champs
- État chargement (bouton désactivé pendant soumission)
- Message de succès dans `.form-status`
- ⚠️ Formulaire statique — à connecter à Formspree ou Netlify Forms en production

---

## 8. CONTENU IA À VALIDER (checklist client)

Tous ces éléments sont marqués `<!-- AI-generated, to be reviewed by client -->` dans le HTML :

### Témoignages (10 total)
- [ ] Koffi N'Guessan / CIPREL (featured)
- [ ] Aicha Traoré / NSIA Banque
- [ ] Marc Aké / Touton
- [ ] Jean-Paul Mensah / CICR
- [ ] Ibrahim Diallo / Bouygues
- [ ] Fatou Camara / Eurolait
- [ ] Yao Kouamé / SOTACI
- [ ] Hervé Bamba / Mine Ivoire
- [ ] Aminata Koné / Tridem Pharma
- [ ] Sophie Lefèvre / Air France

### Galerie (14 items)
- [ ] Titres de toutes les photos
- [ ] Catégorisation des photos (terrain / équipements / formations / événements)

### Données à confirmer
- [ ] URL Facebook officielle
- [ ] URL LinkedIn officielle
- [ ] URLs App Store / Google Play / Windows Store pour l'application ASAP
- [ ] Photos terrain, équipements, formation, événements (fichiers à fournir)
- [ ] Photo de l'équipe (section hero accueil)
- [ ] Screenshot ou visuel de l'application ASAP

---

## 9. CONTRÔLE QUALITÉ AVANT LIVRAISON

```
□ W3C HTML validator : 0 erreur, 0 avertissement
□ W3C CSS validator : 0 erreur
□ Lighthouse desktop : Performance ≥ 85, Accessibility ≥ 90, SEO ≥ 90, Best Practices ≥ 85
□ Test mobile : 360px (Samsung Galaxy A) — layout correct
□ Test tablette : 768px — layout correct
□ Test desktop : 1440px — layout correct
□ Tous les liens internes : fonctionnels (pas de 404)
□ Formulaire contact : validation JS OK sur tous les cas d'erreur
□ Filtre galerie : tous les filtres fonctionnels (Tout, Terrain, Équipements, Formations, Événements)
□ Nav mobile : hamburger open/close fonctionnel
□ Nav sticky : comportement au scroll correct
□ Lien actif nav : correct sur chaque page
□ Données entreprise : conformes à la section Company Data
□ Contenu AI : tous les éléments marqués avec le commentaire HTML
□ Chemins relatifs : aucun chemin absolu
□ Open Graph : balises présentes et correctes sur toutes les pages
□ Schema.org : JSON-LD valide sur index.html (Google Rich Results Test)
□ sitemap.xml : accessible, URLs correctes
□ robots.txt : accessible, Sitemap référencé
```

---

## 10. NOTES DE DÉPLOIEMENT (GitHub Pages)

- Repo : `https://github.com/ALTARYS-LABS/gardians-web`
- URL de production cible : `https://gardians.ci` (domaine custom à configurer dans Pages)
- Branche de déploiement : `main`
- Fichier d'entrée GitHub Pages : `index.html` (racine)
- Domaine custom : configurer CNAME dans Settings > Pages
- HTTPS : activé automatiquement par GitHub Pages
- Pas de `_config.yml` nécessaire (site statique pur, pas Jekyll)
- Si sous-dossier : adapter les chemins relatifs avec `./` systématiquement
