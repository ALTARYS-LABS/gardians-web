# PROMPT — GARDIAN'S ASSISTANCE Website Build
## Claude Code Prompt · Static Site · v2.0 (maquettes Claude Design intégrées)

---

## 0. MISSION

Construire le site vitrine statique complet de GARDIAN'S ASSISTANCE — entreprise de sécurité privée agréée en Côte d'Ivoire — en HTML5 + CSS3 + Vanilla JS pur, sans aucun framework, déployable sur GitHub Pages.

Le site doit être fidèle pixel-for-pixel aux maquettes Claude Design fournies.

---

## 1. CONSTRAINTS ABSOLUES

```
- Pure static : HTML5 + CSS3 + Vanilla JS uniquement
- ZÉRO framework CSS (pas Bootstrap, Tailwind, Bulma, Foundation)
- ZÉRO framework JS (pas React, Vue, Alpine, jQuery)
- Tous les chemins : RELATIFS (compatibilité GitHub Pages)
- CSS custom properties (:root) pour TOUS les tokens de design
- Balises SEO uniques par page (title, description, og:*)
- Contenu fabriqué par IA : marqué <!-- AI-generated, to be reviewed by client -->
- Données entreprise : UNIQUEMENT les données confirmées ci-dessous
- Images manquantes : placeholder sombre avec label centré en blanc
```

---

## 2. BRAND IDENTITY

### 2.1 Palette (CSS custom properties obligatoires)

```css
:root {
  --color-black:      #0D0D0D;  /* fond principal dark */
  --color-dark:       #1A1A1A;  /* sections dark secondaires */
  --color-yellow:     #F5C400;  /* accent, CTA, icônes, underlines */
  --color-white:      #FFFFFF;  /* texte sur dark */
  --color-gray-light: #F5F5F5;  /* fond sections claires secondaires */
  --color-gray-mid:   #E0E0E0;  /* borders, séparateurs */
  --color-text-body:  #1A1A1A;  /* texte corps sur fond blanc */
  --color-text-muted: #666666;  /* labels secondaires, captions */
}
```

### 2.2 Typographie

```css
:root {
  --font-heading: 'Montserrat', sans-serif;  /* Bold 700, SemiBold 600 */
  --font-body:    'Inter', sans-serif;       /* Regular 400, Medium 500 */
}
```

Google Fonts à importer : `Montserrat:wght@600;700` + `Inter:wght@400;500`

### 2.3 Design tokens supplémentaires

```css
:root {
  --radius:           4px;        /* border-radius max absolu */
  --transition:       0.2s ease;
  --underline-yellow: 3px solid var(--color-yellow);  /* décoratif sous H2 */
  --spacing-section:  80px;       /* padding vertical sections */
  --container-max:    1200px;     /* largeur max contenu */
  --container-pad:    24px;       /* padding horizontal container */
}
```

### 2.4 Style général

- Haut contraste : dark/jaune/blanc uniquement
- Aucun dégradé (gradient)
- `border-radius` max 4px sur tous les éléments
- Underline décoratif jaune sous les H2 de section : `width: 40px; height: 3px; background: var(--color-yellow); margin-top: 12px`
- Icônes : SVG inline ou `<img>` SVG — style outline, couleur `currentColor` ou jaune
- Placeholder images : `background: var(--color-dark); display: flex; align-items: center; justify-content: center; color: var(--color-text-muted); font-size: 0.75rem; letter-spacing: 0.1em; text-transform: uppercase`

---

## 3. COMPANY DATA (données confirmées — NE PAS MODIFIER)

```
Raison sociale       : GARDIAN'S ASSISTANCE
Fondée               : 1998, par M. CANDAS Frédéric
Forme juridique      : Société à Responsabilité Limitée (SARL) — créée 2003
Gérant               : M. CANDAS Frédéric
Effectif             : 1 285 collaborateurs
Capital social       : 130 000 000 F CFA
Présence             : 15+ villes en Côte d'Ivoire
Agrément             : N° 134/MEMIS/CAB du 02/04/2014 (Ministère de l'Intérieur)
N° CNPS              : 90 100
RC                   : CI-ABJ-2013-M-128888
Compte contribuable  : 0304254 V
Adresse              : 18 BP 2473 — Abidjan 18, Treichville, Bd FH Boigny
GPS                  : 5°18'21"N · 4°1'1"W
Téléphone 1          : 27 21 756 205
Téléphone 2          : 27 24 340 340
WhatsApp             : https://wa.me/2252724340340
Email                : contact@gardians.ci
Facebook             : <!-- AI-generated placeholder, URL non confirmée -->
LinkedIn             : <!-- AI-generated placeholder, URL non confirmée -->
```

**Villes de présence (confirmées) :**
Abidjan (Siège), San Pedro (Agence), Yamoussoukro, Korhogo, Issia, Adzopé,
Abengourou, Tiassalé, Bonoua, Bongo, Tanda, Agnibilékrou, Bettié, Bouaflé, Grand Lahou

---

## 4. STRUCTURE DU PROJET

```
gardians-web/
├── index.html
├── a-propos.html
├── services.html
├── galerie.html
├── temoignages.html
├── contact.html
├── partenaires.html          ← page placeholder (contenu à fournir)
├── blog.html                 ← page placeholder (contenu à fournir)
├── carrieres.html            ← page placeholder (contenu à fournir)
├── css/
│   ├── reset.css
│   ├── variables.css         ← tokens :root uniquement
│   ├── base.css              ← typographie, éléments globaux
│   ├── components.css        ← nav, footer, boutons, cards, forms
│   └── pages/
│       ├── home.css
│       ├── about.css
│       ├── services.css
│       ├── gallery.css
│       ├── testimonials.css
│       └── contact.css
├── js/
│   ├── nav.js                ← hamburger mobile + sticky nav
│   ├── gallery-filter.js     ← filtre tabs galerie
│   └── contact-form.js       ← validation formulaire contact
├── images/
│   ├── logo/
│   │   ├── gardians-logo.svg
│   │   └── gardians-logo-white.svg
│   ├── icons/
│   │   └── [icônes SVG services]
│   ├── gallery/              ← images galerie (à fournir par client)
│   └── team/                 ← photos équipe (à fournir par client)
├── sitemap.xml
├── robots.txt
└── 404.html
```

---

## 5. COMPOSANTS PARTAGÉS

### 5.1 Navigation (composant `<nav>`)

**Structure :**
```html
<nav class="nav" id="main-nav">
  <div class="nav__container container">
    <a href="index.html" class="nav__brand">
      <img src="images/logo/gardians-logo.svg" alt="GARDIAN'S ASSISTANCE" class="nav__logo">
    </a>
    <button class="nav__toggle" id="nav-toggle" aria-label="Menu" aria-expanded="false">
      <span></span><span></span><span></span>
    </button>
    <ul class="nav__menu" id="nav-menu" role="list">
      <li><a href="index.html">Accueil</a></li>
      <li><a href="a-propos.html">À propos</a></li>
      <li><a href="services.html">Services</a></li>
      <li><a href="galerie.html">Galerie</a></li>
      <li><a href="partenaires.html">Partenaires</a></li>
      <li><a href="temoignages.html">Témoignages</a></li>
      <li><a href="blog.html">Blog</a></li>
      <li><a href="carrieres.html">Carrières</a></li>
      <li><a href="contact.html">Contact</a></li>
    </ul>
    <a href="contact.html" class="btn btn--primary nav__cta">Nous contacter</a>
  </div>
</nav>
```

**Comportement :**
- Fond `transparent` par défaut
- Sticky + fond `var(--color-black)` + `box-shadow` léger au scroll (threshold: 60px)
- Lien actif : `color: var(--color-yellow); border-bottom: 2px solid var(--color-yellow)`
- Mobile (< 768px) : hamburger 3 lignes → overlay menu vertical full-width fond noir
- `aria-expanded` mis à jour dynamiquement
- `nav.js` gère toggle + scroll behaviour

### 5.2 Footer (composant `<footer>`)

**Structure 3 colonnes :**
```html
<footer class="footer">
  <div class="footer__main container">
    <!-- Col 1 : Brand -->
    <div class="footer__brand">
      <img src="images/logo/gardians-logo-white.svg" alt="GARDIAN'S ASSISTANCE">
      <p>Votre sécurité, notre priorité.</p>
      <div class="footer__socials">
        <a href="#" aria-label="Facebook" class="footer__social-link"><!-- SVG F --></a>
        <a href="#" aria-label="LinkedIn" class="footer__social-link"><!-- SVG in --></a>
        <a href="https://wa.me/2252724340340" aria-label="WhatsApp" class="footer__social-link"><!-- SVG WA --></a>
      </div>
      <!-- Note dev : URLs Facebook et LinkedIn non confirmées. Utiliser href="#" jusqu'à validation client -->
    </div>

    <!-- Col 2 : Navigation -->
    <div class="footer__nav">
      <h3 class="footer__heading">NAVIGATION</h3>
      <ul role="list">
        <li><a href="index.html">Accueil</a></li>
        <li><a href="a-propos.html">À propos</a></li>
        <li><a href="services.html">Services</a></li>
        <li><a href="galerie.html">Galerie</a></li>
        <li><a href="partenaires.html">Partenaires</a></li>
        <li><a href="temoignages.html">Témoignages</a></li>
        <li><a href="blog.html">Blog</a></li>
        <li><a href="carrieres.html">Carrières</a></li>
        <li><a href="contact.html">Contact</a></li>
      </ul>
    </div>

    <!-- Col 3 : Contact -->
    <div class="footer__contact">
      <h3 class="footer__heading">CONTACT</h3>
      <ul role="list">
        <li>
          <!-- SVG pin icon -->
          18 BP 2473 — Abidjan 18<br>Treichville, Bd FH Boigny
        </li>
        <li><!-- SVG phone --> 27 21 756 205<br>27 24 340 340</li>
        <li><!-- SVG mail --> contact@gardians.ci</li>
        <li><!-- SVG WA --> WhatsApp · 27 21 756 205</li>
      </ul>
    </div>
  </div>

  <div class="footer__bottom">
    <p>© 2024 GARDIAN'S ASSISTANCE — Tous droits réservés</p>
  </div>
</footer>
```

**Style footer :**
- Fond : `var(--color-black)`
- Headings colonnes : `var(--color-yellow)`, font-size 0.75rem, letter-spacing 0.15em, font-family Montserrat, uppercase
- Liens : blanc → jaune au hover
- Icônes sociales : carrés 36×36px, fond `#1A1A1A`, SVG blanc, hover fond jaune
- Border-top footer__bottom : 1px solid #2A2A2A

### 5.3 Buttons

```css
/* Variantes */
.btn { display: inline-block; font-family: var(--font-heading); font-weight: 600;
       font-size: 0.9rem; letter-spacing: 0.05em; padding: 12px 28px;
       border-radius: var(--radius); transition: var(--transition); cursor: pointer;
       text-decoration: none; border: 2px solid transparent; }

.btn--primary { background: var(--color-yellow); color: var(--color-black); }
.btn--primary:hover { background: #D4AA00; } /* yellow darkened */

.btn--outline { background: transparent; color: var(--color-white);
                border-color: var(--color-white); }
.btn--outline:hover { background: var(--color-white); color: var(--color-black); }

.btn--full { width: 100%; text-align: center; display: block; }
```

### 5.4 Page Hero (sections d'en-tête de pages internes)

```html
<section class="page-hero">
  <div class="container">
    <nav class="breadcrumb" aria-label="Fil d'Ariane">
      <a href="index.html">Accueil</a>
      <span aria-hidden="true"> > </span>
      <span aria-current="page">[Titre page]</span>
    </nav>
    <h1>[Titre]</h1>
    <div class="section-underline" aria-hidden="true"></div>
  </div>
</section>
```

**Style :**
- Fond : `var(--color-black)`
- Breadcrumb : `color: var(--color-yellow)`, font-size 0.85rem — le lien "Accueil" est cliquable, le span final est blanc
- H1 : Montserrat Bold, blanc, ≥ 2.5rem
- `.section-underline` : `width: 40px; height: 3px; background: var(--color-yellow); margin-top: 12px`
- Padding : 60px top, 60px bottom

### 5.5 CTA Banner (section récurrente)

```html
<section class="cta-banner">
  <div class="container cta-banner__content">
    <h2>[Titre CTA]</h2>
    <p>[Sous-titre]</p>
    <a href="contact.html" class="btn btn--primary">[Label bouton]</a>
  </div>
</section>
```

**Style :**
- Fond : `var(--color-dark)` (#1A1A1A)
- H2 : blanc, Montserrat Bold, centré
- Sous-titre : muted (#AAA), centré
- Bouton : centré, jaune

### 5.6 Section Underline décoratif

Appliqué sous tous les H2 de section :
```html
<div class="section-underline" aria-hidden="true"></div>
```
```css
.section-underline {
  width: 40px; height: 3px;
  background: var(--color-yellow);
  margin-top: 12px;
  /* margin: auto si centré, sinon pas de margin auto */
}
```

---

## 6. SPÉCIFICATIONS PAR PAGE

### 6.1 index.html — Accueil

**`<title>`** : `GARDIAN'S ASSISTANCE — Sécurité privée agréée en Côte d'Ivoire`
**`<meta description>`** : `Prestataire de sécurité privée agréé depuis 1998. Gardiennage, vidéosurveillance, géolocalisation, contrôle d'accès. 1 285 agents dans 15+ villes.`

#### Section : Hero (`.hero`)

- Fond : `var(--color-black)`, min-height: 100vh
- Layout : 2 colonnes, 60% / 40%, `align-items: center`

**Gauche :**
```html
<span class="hero__badge">SÉCURITÉ PRIVÉE AGRÉÉE · CÔTE D'IVOIRE</span>
<h1 class="hero__title">Votre sécurité,<br>notre priorité.</h1>
<p class="hero__sub">Prestataire agréé depuis 1998. 1 285 collaborateurs déployés dans 15+ villes en Côte d'Ivoire.</p>
<div class="hero__ctas">
  <a href="services.html" class="btn btn--primary">Découvrir nos services</a>
  <a href="contact.html" class="btn btn--outline">Nous contacter</a>
</div>
```

- `.hero__badge` : `color: var(--color-yellow)`, uppercase, font-size 0.75rem, letter-spacing 0.2em, Montserrat SemiBold, margin-bottom 16px
- `.hero__title` : Montserrat Bold, ≥ 3rem, blanc, line-height 1.1
- `.hero__sub` : Inter Regular, blanc opacity 0.8, max-width 440px, margin-top 16px
- `.hero__ctas` : `display: flex; gap: 16px; margin-top: 32px`

**Droite :**
```html
<div class="hero__image-frame">
  <div class="hero__image-placeholder">PHOTO ÉQUIPE / TERRAIN</div>
</div>
```
- `.hero__image-frame` : border corners style — 4 coins en L jaune via CSS `::before`/`::after` ou bordures partielles. Pas de border-radius.
- Placeholder : fond `#2A2A2A`, aspect-ratio 4/3

#### Section : Stats bar (`.stats-bar`)

- Fond : `var(--color-yellow)`
- Layout : `display: flex; justify-content: center; align-items: center`
- Padding : 40px 0

```html
<div class="stats-bar">
  <div class="container stats-bar__inner">
    <div class="stat-item">
      <span class="stat-item__number">1 285</span>
      <span class="stat-item__label">Collaborateurs</span>
    </div>
    <div class="stat-item__separator" aria-hidden="true"></div>
    <div class="stat-item">
      <span class="stat-item__number">Depuis 1998</span>
      <span class="stat-item__label">Années d'expérience</span>
    </div>
    <div class="stat-item__separator" aria-hidden="true"></div>
    <div class="stat-item">
      <span class="stat-item__number">15+</span>
      <span class="stat-item__label">Villes en Côte d'Ivoire</span>
    </div>
  </div>
</div>
```

- `.stat-item__number` : Montserrat Bold, font-size ≥ 2.5rem, `color: var(--color-black)`
- `.stat-item__label` : Inter Medium, font-size 0.85rem, `color: var(--color-black)`, display block
- `.stat-item__separator` : `width: 1px; height: 60px; background: rgba(0,0,0,0.2)`

#### Section : Nos Services home preview (`.section-services`)

- Fond : `var(--color-white)`
- Padding : `var(--spacing-section)` top + bottom
- Titre centré : H2 "Nos Services" + `.section-underline` centré

**Grille 3 colonnes × 2 rangées = 6 cards :**

```html
<div class="services-grid">
  <!-- 6 service cards -->
  <article class="service-card">
    <div class="service-card__icon"><!-- SVG shield --></div>
    <h3>Gardiennage</h3>
    <p>Agents de sécurité qualifiés pour vos sites et événements.</p>
    <div class="service-card__underline" aria-hidden="true"></div>
  </article>
  <!-- … 5 autres cards -->
</div>
```

Services dans l'ordre : Gardiennage | Vidéo surveillance | Géolocalisation | Contrôle d'accès | Téléassistance | Protection rapprochée

- `.service-card` : fond blanc, border `1px solid var(--color-gray-mid)`, padding 28px, radius 4px, display flex flex-direction column
- `.service-card__icon` : `width: 40px; height: 40px; color: var(--color-yellow)`, margin-bottom 16px
- H3 : Montserrat SemiBold, font-size 1.05rem, color `var(--color-black)`
- p : Inter Regular, font-size 0.9rem, color `var(--color-text-muted)`, flex: 1
- `.service-card__underline` : `width: 32px; height: 3px; background: var(--color-yellow); margin-top: 16px`
- Hover : `box-shadow: 0 4px 16px rgba(0,0,0,0.1); transform: translateY(-2px); transition: var(--transition)`

CTA bas de section :
```html
<div class="text-center" style="margin-top: 48px;">
  <a href="services.html" class="link-arrow">Voir tous nos services →</a>
</div>
```
`.link-arrow` : Inter Medium, `color: var(--color-black)`, underline, hover `color: var(--color-yellow)`

#### Section : Application ASAP home (`.section-asap`)

- Fond : `var(--color-dark)` (#1A1A1A)
- Layout : 2 colonnes 50/50

**Gauche :**
```html
<span class="section-badge">APPLICATION MOBILE</span>
<h2>L'application ASAP</h2>
<div class="section-underline"></div>
<p>Depuis 2017, bénéficiez d'une assistance en tout lieu et à tout moment, depuis votre smartphone.</p>
<div class="asap-features">
  <div class="asap-feature"><span class="asap-feature__icon"><!-- SVG --></span> Bouton d'urgence</div>
  <div class="asap-feature"><span class="asap-feature__icon"><!-- SVG --></span> Bouton sécurité</div>
  <div class="asap-feature"><span class="asap-feature__icon"><!-- SVG --></span> Bouton médical</div>
  <div class="asap-feature"><span class="asap-feature__icon"><!-- SVG --></span> Autres services</div>
</div>
<p class="asap-stores">
  Disponible sur
  <a href="#">App Store</a> ·
  <a href="#">Google Play</a> ·
  <a href="#">Windows Store</a>
</p>
```

- `.section-badge` : `color: var(--color-yellow)`, uppercase, 0.7rem, letter-spacing 0.2em
- H2 + `.section-underline` : blanc
- `.asap-features` : `display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-top: 24px`
- `.asap-feature` : fond `rgba(255,255,255,0.05)`, border `1px solid rgba(255,255,255,0.1)`, padding 12px 16px, border-radius 4px, `color: var(--color-white)`, font Inter Medium, flex + gap 8px
- `.asap-stores` : `color: rgba(255,255,255,0.6)`, margin-top 20px, font-size 0.85rem
- `.asap-stores a` : `color: var(--color-yellow)`, underline none, hover underline

**Droite :**
```html
<div class="asap-image-wrapper">
  <div class="asap-image-placeholder">APP ASAP</div>
</div>
```
- Placeholder : border `2px solid var(--color-yellow)`, fond `#111`, aspect-ratio 3/4

#### Section : CTA Banner home

- H2 : "Besoin d'un devis ?"
- Sous-titre : "Contactez-nous dès aujourd'hui."
- Bouton : `[Demander un devis]` → `href="contact.html"`

---

### 6.2 a-propos.html — À propos

**`<title>`** : `À propos — GARDIAN'S ASSISTANCE | Histoire, agrément et présence nationale`
**`<meta description>`** : `Fondée en 1998 par M. CANDAS Frédéric, GARDIAN'S ASSISTANCE est agréée par le Ministère de l'Intérieur. SARL de 130M F CFA de capital, 1 285 agents dans 15+ villes.`

#### Section : Page Hero

- H1 : "À propos"
- Fond sombre standard

#### Section : Notre Histoire (`.section-history`)

- Fond : `var(--color-white)`
- Layout : 2 colonnes, `grid-template-columns: 65fr 35fr`, gap 60px

**Gauche :**
```html
<span class="section-label">NOTRE HISTOIRE</span>
<h2>Au service de votre sécurité depuis 1998.</h2>
<div class="section-underline"></div>
<p>GARDIAN'S A été fondée en 1998 par M. CANDAS Frédéric. Forte d'une expertise reconnue, l'entreprise s'est imposée comme un acteur de référence de la sécurité privée en Côte d'Ivoire.</p>
<p>GARDIAN'S ASSISTANCE, Société à Responsabilité Limitée (SARL), a été créée en 2003 par absorption de la société Gardian's. Elle est gérée par Monsieur CANDAS Frédéric.</p>
<p>L'entreprise fait partie des <strong>311 sociétés de sécurité privée agréées</strong> (sur 350 recensées en RCI) par le Ministère de l'Intérieur, sous le N° d'agrément 134/MEMIS/CAB du 02 avril 2014 l'autorisant à exercer.</p>
```

- `.section-label` : `color: var(--color-yellow)`, uppercase, 0.75rem, letter-spacing 0.2em, Montserrat SemiBold, margin-bottom 8px, display block

**Droite — stat cards empilées :**
```html
<div class="history-stats">
  <div class="history-stat history-stat--dark">
    <span class="history-stat__number">130M</span>
    <span class="history-stat__label">Capital social (F CFA)</span>
  </div>
  <div class="history-stat history-stat--dark">
    <span class="history-stat__number history-stat__number--white">1 285</span>
    <span class="history-stat__label">Effectif déployé</span>
  </div>
  <div class="history-badges">
    <div class="history-badge">
      <span class="history-badge__title">MEMIS</span>
      <span class="history-badge__sub">Agrément Ministère de l'Intérieur</span>
    </div>
    <div class="history-badge">
      <span class="history-badge__title">SGS</span>
      <span class="history-badge__sub">Standards de qualité certifiés</span>
    </div>
  </div>
</div>
```

- `.history-stat` : fond `var(--color-black)`, padding 24px 28px, margin-bottom 12px
- `.history-stat__number` : Montserrat Bold, font-size 2.5rem, `color: var(--color-yellow)` (130M) ou `color: var(--color-white)` (1 285)
- `.history-stat__label` : Inter Medium, font-size 0.8rem, `color: rgba(255,255,255,0.7)`, display block, margin-top 4px
- `.history-badges` : `display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-top: 12px`
- `.history-badge` : fond `var(--color-gray-light)`, padding 16px, border-top `3px solid var(--color-yellow)`
- `.history-badge__title` : Montserrat Bold, font-size 0.85rem, `color: var(--color-yellow)`, display block
- `.history-badge__sub` : Inter Regular, font-size 0.75rem, `color: var(--color-text-muted)`

#### Section : Présence Nationale (`.section-presence`)

- Fond : `var(--color-gray-light)` (#F5F5F5)
- Centré

```html
<span class="section-label text-center">PRÉSENCE NATIONALE</span>
<h2 class="text-center">15+ villes en Côte d'Ivoire</h2>
<div class="section-underline mx-auto"></div>
<div class="cities-grid">
  <div class="cities-col">
    <div class="city-item"><span class="city-name">Abidjan</span><span class="city-tag">Siège</span></div>
    <div class="city-item"><span class="city-name">Korhogo</span></div>
    <div class="city-item"><span class="city-name">Abengourou</span></div>
    <div class="city-item"><span class="city-name">Bongo</span></div>
    <div class="city-item"><span class="city-name">Bettié</span></div>
  </div>
  <div class="cities-col">
    <div class="city-item"><span class="city-name">San Pedro</span><span class="city-tag">Agence</span></div>
    <div class="city-item"><span class="city-name">Issia</span></div>
    <div class="city-item"><span class="city-name">Tiassalé</span></div>
    <div class="city-item"><span class="city-name">Tanda</span></div>
    <div class="city-item"><span class="city-name">Bouaflé</span></div>
  </div>
  <div class="cities-col">
    <div class="city-item"><span class="city-name">Yamoussoukro</span></div>
    <div class="city-item"><span class="city-name">Adzopé</span></div>
    <div class="city-item"><span class="city-name">Bonoua</span></div>
    <div class="city-item"><span class="city-name">Agnibilékrou</span></div>
    <div class="city-item"><span class="city-name">Grand Lahou</span></div>
  </div>
</div>
```

- `.cities-grid` : `display: grid; grid-template-columns: repeat(3, 1fr); gap: 0; margin-top: 40px`
- `.city-item` : `border-left: 3px solid var(--color-yellow); padding: 10px 16px; margin-bottom: 4px; display: flex; align-items: center; gap: 8px; background: var(--color-white)`
- `.city-name` : Inter Medium, font-size 0.95rem
- `.city-tag` : Inter Regular, font-size 0.75rem, `color: var(--color-text-muted)`

#### Section : Informations Légales (`.section-legal`)

- Fond : `var(--color-white)`
- Label : "CADRE LÉGAL"
- H2 : "Informations légales"

```html
<table class="legal-table" role="table">
  <tbody>
    <tr><td class="legal-table__label">Raison sociale</td><td>GARDIAN'S ASSISTANCE</td></tr>
    <tr><td class="legal-table__label">Forme juridique</td><td>Société à Responsabilité Limitée (SARL)</td></tr>
    <tr><td class="legal-table__label">Gérance</td><td>M. CANDAS Frédéric</td></tr>
    <tr><td class="legal-table__label">Capital social</td><td>130 000 000 F CFA</td></tr>
    <tr><td class="legal-table__label">Registre du commerce</td><td>CI-ABJ-2013-M-128888</td></tr>
    <tr><td class="legal-table__label">Compte contribuable</td><td>0304254 V</td></tr>
    <tr><td class="legal-table__label">N° affiliation CNPS</td><td>90 100</td></tr>
    <tr><td class="legal-table__label">Numéro d'agrément</td><td>134/MEMIS/CAB du 02/04/2014</td></tr>
  </tbody>
</table>
```

- `.legal-table` : width 100%, border-collapse collapse, max-width 800px
- `tr` : `border-bottom: 1px solid var(--color-gray-mid)`
- `td` : padding 14px 16px, Inter Regular, font-size 0.9rem, vertical-align top
- `.legal-table__label` : Inter SemiBold, font-size 0.8rem, `color: var(--color-text-muted)`, width 220px, text-transform uppercase, letter-spacing 0.05em

#### CTA Banner À propos

- H2 : "Travaillons ensemble."
- Sous-titre : "Confiez votre sécurité à un partenaire agréé et expérimenté."
- Bouton : `[Demander un devis]`

---

### 6.3 services.html — Nos Services

**`<title>`** : `Nos Services — GARDIAN'S ASSISTANCE | Gardiennage, Vidéosurveillance, Géolocalisation`
**`<meta description>`** : `Gardiennage, vidéosurveillance, géolocalisation, contrôle d'accès, téléassistance, protection rapprochée, rondes, sécurité événementielle, conseil & audit. Application ASAP.`

#### Section : Page Hero

- H1 : "Nos Services"

#### Section : Grille des services (`.section-all-services`)

- Fond : `var(--color-white)`
- Pas de titre de section (le hero fait office de titre)
- Grille 3 colonnes × 3 rangées = 9 cards

**Les 9 services avec descriptions complètes :**

```html
<div class="services-grid services-grid--full">

  <article class="service-card">
    <div class="service-card__icon"><!-- SVG shield outline --></div>
    <h3>Gardiennage</h3>
    <p>Agents de sécurité formés et agréés pour la surveillance de vos sites industriels, commerciaux et résidentiels, de jour comme de nuit.</p>
    <div class="service-card__underline" aria-hidden="true"></div>
  </article>

  <article class="service-card">
    <div class="service-card__icon"><!-- SVG camera outline --></div>
    <h3>Vidéo surveillance</h3>
    <p>Conception, installation et supervision de systèmes CCTV avec enregistrement et visionnage à distance en temps réel.</p>
    <div class="service-card__underline" aria-hidden="true"></div>
  </article>

  <article class="service-card">
    <div class="service-card__icon"><!-- SVG pin outline --></div>
    <h3>Géolocalisation</h3>
    <p>Suivi GPS en temps réel de vos véhicules, marchandises et actifs, avec alertes et historique complet des trajets.</p>
    <div class="service-card__underline" aria-hidden="true"></div>
  </article>

  <article class="service-card">
    <div class="service-card__icon"><!-- SVG lock outline --></div>
    <h3>Contrôle d'accès</h3>
    <p>Gestion sécurisée des entrées et sorties par badge, biométrie ou code, avec traçabilité complète des flux.</p>
    <div class="service-card__underline" aria-hidden="true"></div>
  </article>

  <article class="service-card">
    <div class="service-card__icon"><!-- SVG headphone outline --></div>
    <h3>Téléassistance</h3>
    <p>Centre de télésurveillance opérationnel 24h/24 et 7j/7 pour le traitement des alarmes et la levée de doute.</p>
    <div class="service-card__underline" aria-hidden="true"></div>
  </article>

  <article class="service-card">
    <div class="service-card__icon"><!-- SVG person outline --></div>
    <h3>Protection rapprochée</h3>
    <p>Gardes du corps expérimentés pour la protection des personnalités, dirigeants et visiteurs de marque.</p>
    <div class="service-card__underline" aria-hidden="true"></div>
  </article>

  <article class="service-card">
    <div class="service-card__icon"><!-- SVG refresh/route outline --></div>
    <h3>Rondes & intervention</h3>
    <p>Patrouilles mobiles programmées et équipes d'intervention rapide déployées sur alarme partout en ville.</p>
    <div class="service-card__underline" aria-hidden="true"></div>
  </article>

  <article class="service-card">
    <div class="service-card__icon"><!-- SVG calendar/event outline --></div>
    <h3>Sécurité événementielle</h3>
    <p>Dispositifs de sécurité sur mesure pour vos conférences, concerts et manifestations privées ou publiques.</p>
    <div class="service-card__underline" aria-hidden="true"></div>
  </article>

  <article class="service-card">
    <div class="service-card__icon"><!-- SVG checklist outline --></div>
    <h3>Conseil & audit</h3>
    <p>Évaluation des risques, audit de vulnérabilité et recommandations adaptées à votre environnement et votre budget.</p>
    <div class="service-card__underline" aria-hidden="true"></div>
  </article>

</div>
```

#### Section : Application ASAP (version étendue, `.section-asap--services`)

- Fond : `var(--color-dark)`
- Layout : 2 colonnes, 50/50

**Gauche :** identique à la version home mais avec texte étendu :
"Depuis 2017, l'application ASAP met la sécurité de GARDIAN'S au creux de votre main : une assistance en tout lieu et à tout moment, depuis votre smartphone."

**4 feature cards (fond sombre, version étendue avec description) :**

```html
<div class="asap-features-full">
  <div class="asap-feature-card">
    <div class="asap-feature-card__icon"><!-- SVG alert-triangle --></div>
    <h4>Bouton d'urgence</h4>
    <p>Alertez nos équipes en un seul geste en cas de danger immédiat.</p>
  </div>
  <div class="asap-feature-card">
    <div class="asap-feature-card__icon"><!-- SVG shield --></div>
    <h4>Bouton sécurité</h4>
    <p>Demandez une intervention de nos agents où que vous soyez.</p>
  </div>
  <div class="asap-feature-card">
    <div class="asap-feature-card__icon"><!-- SVG activity/heart --></div>
    <h4>Bouton médical</h4>
    <p>Sollicitez une assistance médicale d'urgence rapidement.</p>
  </div>
  <div class="asap-feature-card">
    <div class="asap-feature-card__icon"><!-- SVG grid --></div>
    <h4>Autres services</h4>
    <p>Accédez à l'ensemble des prestations GARDIAN'S à la demande.</p>
  </div>
</div>
```

- `.asap-features-full` : `display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-top: 0`
- `.asap-feature-card` : fond `var(--color-black)`, padding 20px, border-radius 4px, `border-left: 3px solid transparent; transition: border-color 0.2s`
- `.asap-feature-card:hover` : `border-left-color: var(--color-yellow)`
- `.asap-feature-card__icon` : `color: var(--color-yellow)`, width/height 28px, margin-bottom 12px
- `h4` : Montserrat SemiBold, blanc, font-size 0.95rem
- `p` : Inter Regular, `color: rgba(255,255,255,0.7)`, font-size 0.85rem, margin-top 6px

**Droite :** placeholder image app identique à home

#### CTA Banner Services

- H2 : "Besoin d'un devis ?"
- Sous-titre : "Contactez-nous dès aujourd'hui."
- Bouton : `[Demander un devis]`

---

### 6.4 galerie.html — Galerie

**`<title>`** : `Galerie — GARDIAN'S ASSISTANCE | Équipes, Équipements, Formations, Événements`
**`<meta description>`** : `Découvrez nos équipes sur le terrain, nos équipements de sécurité, nos formations et événements. Photos authentiques de GARDIAN'S ASSISTANCE en Côte d'Ivoire.`

#### Section : Page Hero

- H1 : "Galerie"

#### Section : Galerie filtrée (`.section-gallery`)

- Fond : `var(--color-white)`

**Filter tabs :**
```html
<div class="gallery-filters" role="tablist">
  <button class="gallery-filter gallery-filter--active" data-filter="all" role="tab" aria-selected="true">Tout</button>
  <button class="gallery-filter" data-filter="terrain" role="tab" aria-selected="false">Terrain</button>
  <button class="gallery-filter" data-filter="equipements" role="tab" aria-selected="false">Équipements</button>
  <button class="gallery-filter" data-filter="formations" role="tab" aria-selected="false">Formations</button>
  <button class="gallery-filter" data-filter="evenements" role="tab" aria-selected="false">Événements</button>
</div>
```

- `.gallery-filters` : `display: flex; gap: 8px; justify-content: center; margin-bottom: 40px`
- `.gallery-filter` : `padding: 8px 20px; border: 1px solid var(--color-gray-mid); background: transparent; font-family: var(--font-body); font-size: 0.9rem; cursor: pointer; border-radius: var(--radius); color: var(--color-text-body); transition: var(--transition)`
- `.gallery-filter--active, .gallery-filter:hover` : `background: var(--color-black); color: var(--color-white); border-color: var(--color-black)`

**Grille masonry JS (colonnes CSS) :**
```html
<div class="gallery-grid" id="gallery-grid">
  <!-- item exemple -->
  <div class="gallery-item" data-category="terrain">
    <div class="gallery-item__img-wrapper">
      <img src="images/gallery/placeholder.jpg" alt="Équipe en intervention" loading="lazy">
      <!-- placeholder si image absente -->
    </div>
    <div class="gallery-item__overlay">
      <span class="gallery-item__category">TERRAIN</span>
      <span class="gallery-item__title">Équipe en intervention</span>
    </div>
  </div>
  <!-- ... autres items -->
</div>
```

- `.gallery-grid` : `columns: 3; column-gap: 16px` (CSS multi-columns pour masonry)
- `.gallery-item` : `break-inside: avoid; margin-bottom: 16px; position: relative; overflow: hidden; border-radius: var(--radius); background: var(--color-dark)`
- `.gallery-item__img-wrapper img` : `width: 100%; display: block; aspect-ratio` variable selon item
- `.gallery-item__overlay` : `position: absolute; inset: 0; background: linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 50%); display: flex; flex-direction: column; justify-content: space-between; padding: 12px`
- `.gallery-item__category` : `color: var(--color-yellow)`, font-size 0.65rem, uppercase, letter-spacing 0.15em, Montserrat SemiBold
- `.gallery-item__title` : `color: var(--color-white)`, font-size 0.85rem, Inter Medium, align-self flex-end
- Hover `.gallery-item` : légère montée de l'overlay (opacity) via CSS

**Items galerie (<!-- AI-generated, to be reviewed by client --> pour noms/titres) :**

| data-category | Titre | Hauteur indicative |
|---|---|---|
| terrain | (sans titre) | grande |
| terrain | Poste de contrôle | normale |
| equipements | Centre de télésurveillance | normale |
| terrain | Équipe en intervention | normale |
| equipements | Caméras de vidéosurveillance | normale |
| formations | (sans titre) | normale |
| terrain | Véhicule de patrouille | normale |
| evenements | Cérémonie de remise de diplômes | normale |
| formations | Formation des agents | normale |
| terrain | Siège GARDIAN'S — Treichville | grande |
| terrain | (placeholder) | normale |
| evenements | Démonstration ASAP | normale |
| equipements | Matériel de contrôle d'accès | normale |
| (terrain) | Protection rapprochée | normale |

**gallery-filter.js :**
- Écoute click sur `.gallery-filter`
- Met à jour `aria-selected` et classe `--active`
- Masque / affiche les `.gallery-item` dont `data-category` correspond (display none / block)
- `data-filter="all"` : affiche tout
- Animation : `opacity 0.3s ease; transition: opacity`

**Responsive galerie :**
- ≥ 1024px : `columns: 3`
- 768–1023px : `columns: 2`
- < 768px : `columns: 1`

---

### 6.5 temoignages.html — Témoignages

**`<title>`** : `Témoignages — GARDIAN'S ASSISTANCE | Avis de nos clients`
**`<meta description>`** : `Découvrez ce que disent nos clients : banques, industries, sites miniers, pharmaceutiques, événements en Côte d'Ivoire. GARDIAN'S ASSISTANCE, partenaire de confiance depuis 1998.`

#### Section : Page Hero

- H1 : "Témoignages"

#### Section : Témoignage featured (`.testimonial-featured`)

- Fond : `var(--color-black)`, pleine largeur
- Layout centré, max-width 860px

```html
<!-- AI-generated, to be reviewed by client -->
<section class="testimonial-featured">
  <div class="container">
    <div class="testimonial-featured__quote-icon" aria-hidden="true">
      <svg width="48" height="36" viewBox="0 0 48 36"><!-- double quote SVG --></svg>
    </div>
    <blockquote class="testimonial-featured__text">
      Depuis le début de notre collaboration, GARDIAN'S ASSISTANCE n'a jamais laissé passer la moindre faille. Des agents rigoureux, une supervision réactive 24h/24 : un partenaire sur lequel nous comptons au quotidien.
    </blockquote>
    <footer class="testimonial-featured__attribution">
      <div class="testimonial-featured__bar" aria-hidden="true"></div>
      <p class="testimonial-featured__name">Koffi N'Guessan</p>
      <p class="testimonial-featured__role">Directeur des Opérations · CIPREL</p>
    </footer>
  </div>
</section>
```

- `.testimonial-featured__quote-icon svg` : `color: var(--color-yellow)`; fill current
- `.testimonial-featured__text` : Montserrat SemiBold, font-size ≥ 1.3rem, blanc, line-height 1.6, margin 24px 0, text-align left
- `.testimonial-featured__bar` : `width: 4px; height: 40px; background: var(--color-yellow); float: left; margin-right: 16px`
- `.testimonial-featured__name` : Montserrat Bold, blanc, font-size 1rem
- `.testimonial-featured__role` : Inter Regular, `color: var(--color-yellow)`, font-size 0.85rem

#### Section : Grille témoignages (`.section-testimonials-grid`)

- Fond : `var(--color-white)`
- `display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px`

```html
<!-- AI-generated, to be reviewed by client -->
<article class="testimonial-card">
  <div class="testimonial-card__quote" aria-hidden="true">"</div>
  <p class="testimonial-card__text">Protection de nos agences et de nos distributeurs sur tout le territoire : un service fiable, des équipes formées et une vraie culture du risque.</p>
  <hr class="testimonial-card__divider">
  <footer>
    <p class="testimonial-card__name">Aicha Traoré</p>
    <p class="testimonial-card__role">Responsable Sûreté · NSIA Banque</p>
  </footer>
</article>
```

- `.testimonial-card` : `border: 1px solid var(--color-gray-mid); padding: 28px; border-radius: var(--radius); display: flex; flex-direction: column`
- `.testimonial-card__quote` : `color: var(--color-yellow)`, font-size 3rem, Montserrat Bold, line-height 0.8, margin-bottom 16px
- `.testimonial-card__text` : Inter Regular, font-size 0.9rem, `color: var(--color-text-body)`, flex 1, line-height 1.6
- `.testimonial-card__divider` : `border: none; border-top: 1px solid var(--color-gray-mid); margin: 20px 0`
- `.testimonial-card__name` : Montserrat SemiBold, font-size 0.9rem, `color: var(--color-black)`
- `.testimonial-card__role` : Inter Regular, font-size 0.8rem, `color: var(--color-yellow)`

**9 témoignages (<!-- AI-generated, to be reviewed by client -->) :**

| # | Nom | Rôle · Entreprise | Extrait |
|---|---|---|---|
| 1 | Aicha Traoré | Responsable Sûreté · NSIA Banque | Protection de nos agences et de nos distributeurs sur tout le territoire : un service fiable, des équipes formées et une vraie culture du risque. |
| 2 | Marc Aké | Directeur Logistique · Touton | La surveillance de nos entrepôts de cacao et le suivi géolocalisé de nos convois nous ont permis de réduire considérablement les pertes. |
| 3 | Jean-Paul Mensah | Coordinateur Sécurité · CICR | Discrétion, professionnalisme et sens des responsabilités : la protection de nos locaux et de nos missions est entre de bonnes mains. |
| 4 | Ibrahim Diallo | Chef de Chantier · Bouygues | Sur nos chantiers, le gardiennage GARDIAN'S est irréprochable. Présence constante, rondes régulières et zéro intrusion depuis le début de notre collaboration. |
| 5 | Fatou Camara | Directrice Générale · Eurolait | La géolocalisation de notre flotte et la protection de notre usine ont transformé notre gestion de la sécurité. Un accompagnement de qualité. |
| 6 | Yao Kouamé | Responsable HSE · SOTACI | Le contrôle d'accès installé sur notre usine est performant et parfaitement adapté à nos contraintes industrielles. Service technique très à l'écoute. |
| 7 | Hervé Bamba | Directeur de Site · Mine Ivoire | Sécuriser un site minier isolé est un vrai défi. GARDIAN'S l'a relevé avec des équipes aguerries et une organisation sans faille. |
| 8 | Aminata Koné | Pharmacien Responsable · Tridem Pharma | La surveillance de nos dépôts pharmaceutiques exige une vigilance absolue. Les équipes GARDIAN'S sont à la hauteur de cette exigence. |
| 9 | Sophie Lefèvre | Responsable Escale Abidjan · Air France | L'application ASAP a séduit nos équipes en escale : une assistance immédiate, où qu'elles soient. Un vrai plus pour notre sérénité. |

#### CTA Banner Témoignages

- H2 : "Rejoignez nos clients satisfaits."
- Sous-titre : "Confiez votre sécurité à un partenaire de confiance."
- Bouton : `[Demander un devis]`

---

### 6.6 contact.html — Contactez-nous

**`<title>`** : `Contact — GARDIAN'S ASSISTANCE | Demande de devis, Treichville Abidjan`
**`<meta description>`** : `Contactez GARDIAN'S ASSISTANCE pour un devis de gardiennage, vidéosurveillance ou protection. Treichville, Abidjan. Tél : 27 21 756 205. Email : contact@gardians.ci.`

#### Section : Page Hero

- H1 : "Contactez-nous"

#### Section : Contact principale (`.section-contact`)

- Fond : `var(--color-white)`
- Layout : `grid-template-columns: 55fr 45fr; gap: 60px`

**Gauche — Formulaire :**

```html
<div class="contact-form-wrapper">
  <h2>Envoyez-nous un message</h2>
  <p class="contact-form__subtitle">Remplissez le formulaire ci-dessous, notre équipe vous répondra dans les plus brefs délais.</p>

  <form class="contact-form" id="contact-form" novalidate>
    <div class="form-row">
      <div class="form-group">
        <label for="nom">Nom complet</label>
        <input type="text" id="nom" name="nom" placeholder="Votre nom" required autocomplete="name">
      </div>
      <div class="form-group">
        <label for="email">Email</label>
        <input type="email" id="email" name="email" placeholder="vous@exemple.ci" required autocomplete="email">
      </div>
    </div>

    <div class="form-row">
      <div class="form-group">
        <label for="telephone">Téléphone</label>
        <input type="tel" id="telephone" name="telephone" placeholder="+225 …" autocomplete="tel">
      </div>
      <div class="form-group">
        <label for="objet">Objet</label>
        <select id="objet" name="objet">
          <option value="devis">Demande de devis</option>
          <option value="information">Demande d'information</option>
          <option value="reclamation">Réclamation</option>
          <option value="autre">Autre</option>
        </select>
      </div>
    </div>

    <div class="form-group form-group--full">
      <label for="message">Message</label>
      <textarea id="message" name="message" rows="6" placeholder="Décrivez votre besoin…" required></textarea>
    </div>

    <button type="submit" class="btn btn--primary btn--full">Envoyer le message</button>
    <div class="form-status" id="form-status" role="alert" aria-live="polite"></div>
  </form>
</div>
```

**Styles formulaire :**
```css
.form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 16px; }
.form-group { display: flex; flex-direction: column; gap: 6px; margin-bottom: 16px; }
.form-group label { font-family: var(--font-body); font-size: 0.85rem; font-weight: 500; color: var(--color-text-body); }
.form-group input,
.form-group select,
.form-group textarea {
  border: 1px solid var(--color-gray-mid);
  border-radius: var(--radius);
  padding: 10px 14px;
  font-family: var(--font-body);
  font-size: 0.9rem;
  color: var(--color-text-body);
  background: var(--color-white);
  transition: border-color var(--transition);
  width: 100%;
}
.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus { outline: none; border-color: var(--color-yellow); }
.form-group input.error,
.form-group textarea.error { border-color: #D32F2F; }
```

**Droite — Coordonnées (card sombre) :**

```html
<div class="contact-info-card">
  <h2>Coordonnées</h2>

  <ul class="contact-info-list" role="list">
    <li class="contact-info-item">
      <span class="contact-info-item__icon contact-info-item__icon--address"><!-- SVG pin --></span>
      <div>
        <span class="contact-info-item__label">Adresse</span>
        <span class="contact-info-item__value">18 BP 2473 — Abidjan 18<br>Treichville, Bd FH Boigny</span>
      </div>
    </li>
    <li class="contact-info-item">
      <span class="contact-info-item__icon"><!-- SVG phone --></span>
      <div>
        <span class="contact-info-item__label">Téléphone</span>
        <a href="tel:+2252721756205" class="contact-info-item__value">27 21 756 205</a>
        <a href="tel:+2252724340340" class="contact-info-item__value">27 24 340 340</a>
      </div>
    </li>
    <li class="contact-info-item">
      <span class="contact-info-item__icon"><!-- SVG WA --></span>
      <div>
        <span class="contact-info-item__label">WhatsApp</span>
        <a href="https://wa.me/2252724340340" class="contact-info-item__value">+225 27 21 756 205</a>
      </div>
    </li>
    <li class="contact-info-item">
      <span class="contact-info-item__icon"><!-- SVG mail --></span>
      <div>
        <span class="contact-info-item__label">Email</span>
        <a href="mailto:contact@gardians.ci" class="contact-info-item__value">contact@gardians.ci</a>
      </div>
    </li>
    <li class="contact-info-item">
      <span class="contact-info-item__icon"><!-- SVG clock/location --></span>
      <div>
        <span class="contact-info-item__label">Coordonnées GPS</span>
        <span class="contact-info-item__value">5°18'21"N · 4°1'1"W</span>
      </div>
    </li>
  </ul>

  <div class="contact-map-placeholder" role="img" aria-label="Carte — Treichville, Bd FH Boigny, Abidjan">
    <svg width="32" height="32" viewBox="0 0 24 24"><!-- SVG pin jaune --></svg>
    <p>Carte interactive — GPS 5°18'21"N 4°1'1"W</p>
  </div>
</div>
```

**Styles contact info card :**
```css
.contact-info-card { background: var(--color-dark); padding: 40px; border-radius: var(--radius); }
.contact-info-card h2 { color: var(--color-white); font-family: var(--font-heading); font-size: 1.5rem; margin-bottom: 32px; }
.contact-info-list { list-style: none; padding: 0; display: flex; flex-direction: column; gap: 24px; }
.contact-info-item { display: flex; gap: 16px; align-items: flex-start; }
.contact-info-item__icon { color: var(--color-yellow); width: 20px; flex-shrink: 0; margin-top: 2px; }
.contact-info-item__label { display: block; font-size: 0.7rem; text-transform: uppercase; letter-spacing: 0.1em; color: var(--color-yellow); font-weight: 600; margin-bottom: 4px; }
.contact-info-item__value { display: block; color: var(--color-white); font-size: 0.9rem; }
a.contact-info-item__value:hover { color: var(--color-yellow); }
.contact-map-placeholder { margin-top: 28px; background: var(--color-black); min-height: 180px;
                            display: flex; flex-direction: column; align-items: center; justify-content: center;
                            gap: 8px; border-radius: var(--radius); }
.contact-map-placeholder svg { color: var(--color-yellow); }
.contact-map-placeholder p { color: var(--color-text-muted); font-size: 0.75rem; }
```

**contact-form.js :**
- Validation avant soumission : champs `required` non vides, email format valide
- Affichage messages d'erreur inline sous chaque champ invalide
- Sur submit valide : désactive bouton + affiche message "Votre message a été envoyé." dans `.form-status`
- ⚠️ Le formulaire est statique — pas de backend. Intégration Formspree/Netlify Forms à prévoir.

---

## 7. SEO

### 7.1 Balises communes à toutes les pages

```html
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="robots" content="index, follow">
<meta name="author" content="GARDIAN'S ASSISTANCE">
<link rel="canonical" href="https://gardians.ci/[page].html">

<!-- Open Graph -->
<meta property="og:type" content="website">
<meta property="og:site_name" content="GARDIAN'S ASSISTANCE">
<meta property="og:image" content="https://gardians.ci/images/og-image.jpg">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:locale" content="fr_CI">

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:image" content="https://gardians.ci/images/og-image.jpg">
```

### 7.2 Schema.org (index.html uniquement, dans `<script type="application/ld+json">`)

```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "GARDIAN'S ASSISTANCE",
  "description": "Prestataire de sécurité privée agréé en Côte d'Ivoire depuis 1998.",
  "url": "https://gardians.ci",
  "logo": "https://gardians.ci/images/logo/gardians-logo.svg",
  "foundingDate": "1998",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Bd FH Boigny",
    "addressLocality": "Treichville, Abidjan",
    "addressRegion": "Abidjan",
    "postalCode": "18 BP 2473",
    "addressCountry": "CI"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 5.305833,
    "longitude": -4.016944
  },
  "telephone": ["+2252721756205", "+2252724340340"],
  "email": "contact@gardians.ci",
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
    "opens": "00:00",
    "closes": "23:59"
  },
  "numberOfEmployees": 1285,
  "areaServed": "Côte d'Ivoire"
}
```

### 7.3 sitemap.xml

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url><loc>https://gardians.ci/</loc><priority>1.0</priority></url>
  <url><loc>https://gardians.ci/a-propos.html</loc><priority>0.8</priority></url>
  <url><loc>https://gardians.ci/services.html</loc><priority>0.9</priority></url>
  <url><loc>https://gardians.ci/galerie.html</loc><priority>0.6</priority></url>
  <url><loc>https://gardians.ci/temoignages.html</loc><priority>0.7</priority></url>
  <url><loc>https://gardians.ci/contact.html</loc><priority>0.8</priority></url>
</urlset>
```

### 7.4 robots.txt

```
User-agent: *
Allow: /
Disallow: /404.html
Sitemap: https://gardians.ci/sitemap.xml
```

---

## 8. LOGO EXTRACTION

Le logo GARDIAN'S ASSISTANCE visible dans les captures comprend :
- Icône : lettre G stylisée dans un carré sombre avec accent jaune
- Texte : "GARDIAN'S" (Montserrat Bold, uppercase) + "ASSISTANCE" (Inter Regular ou Montserrat SemiBold, uppercase, taille réduite)
- Variante blanche pour footer et nav dark
- Variante sombre pour fond clair (si nécessaire)
- Format : SVG vectoriel obligatoire
- ⚠️ Si le client ne fournit pas les assets SVG, créer un SVG de placeholder fidèle à la charte

---

## 9. RESPONSIVE BREAKPOINTS

```css
/* Mobile first */
/* xs : < 480px (téléphones) */
/* sm : 480–767px (grandes phones) */
/* md : 768–1023px (tablettes) */
/* lg : 1024–1279px (petits desktops) */
/* xl : ≥ 1280px (desktops) */

:root {
  --bp-sm: 480px;
  --bp-md: 768px;
  --bp-lg: 1024px;
  --bp-xl: 1280px;
}
```

**Règles critiques responsive :**
- Nav : hamburger sous 768px, menu drawer full-width
- Hero : colonne unique sous 768px, image en dessous du texte
- Stats bar : flex-direction column sous 600px, sans séparateurs
- Services grid : 1 col < 600px | 2 cols 600–1023px | 3 cols ≥ 1024px
- ASAP section : colonne unique sous 768px, image en bas
- Cities grid : 1 col < 600px | 2 cols 600–1023px | 3 cols ≥ 1024px
- Contact layout : colonne unique sous 768px (form en haut, coordonnées en bas)
- Testimonials grid : 1 col < 600px | 2 cols 600–1023px | 3 cols ≥ 1024px
- Gallery grid : 1 col < 768px | 2 cols 768–1023px | 3 cols ≥ 1024px
- Footer : colonne unique sous 768px

---

## 10. ACCESSIBILITÉ

- `lang="fr"` sur `<html>`
- Tous les `<img>` ont un `alt` descriptif
- `aria-label` sur nav mobile toggle
- `role="list"` sur listes navigation
- `role="tablist"` + `aria-selected` sur gallery filters
- `aria-live="polite"` sur `.form-status`
- `role="img" aria-label` sur map placeholder
- `aria-hidden="true"` sur éléments décoratifs (separators, quote icons)
- Focus visible : `outline: 2px solid var(--color-yellow); outline-offset: 2px` (ne pas utiliser `outline: none` sans alternative)
- Contraste : texte blanc sur noir = AAA ✓, texte noir sur jaune = AA ✓

---

## 11. PERFORMANCE

- Lazy load sur toutes les `<img>` sauf hero (`loading="eager"` pour hero)
- Google Fonts via `<link rel="preconnect">` + `display=swap`
- Minifier CSS/JS en production
- Images : WebP avec fallback JPEG, max 200KB per image, max 1200px width
- `<meta name="theme-color" content="#0D0D0D">`
- Favicon : `<link rel="icon">` SVG + `<link rel="apple-touch-icon">`

---

## 12. DELIVERABLES CHECKLIST

```
□ index.html          — conforme maquette (hero + stats + 6 services + ASAP + CTA)
□ a-propos.html       — conforme maquette (histoire + stats + villes + légal)
□ services.html       — conforme maquette (9 services + ASAP étendu)
□ galerie.html        — conforme maquette (tabs filter + masonry 14 items)
□ temoignages.html    — conforme maquette (featured + grille 9 tém.)
□ contact.html        — conforme maquette (form 2×2 + coordonnées card)
□ css/reset.css
□ css/variables.css
□ css/base.css
□ css/components.css
□ css/pages/*.css (6 fichiers)
□ js/nav.js
□ js/gallery-filter.js
□ js/contact-form.js
□ images/logo/gardians-logo.svg
□ images/logo/gardians-logo-white.svg
□ sitemap.xml
□ robots.txt
□ 404.html
□ Tous les contenus AI-generated marqués <!-- AI-generated, to be reviewed by client -->
□ Données entreprise : données confirmées uniquement
□ Chemins relatifs uniquement (0 chemin absolu)
□ CSS custom properties (:root) pour tous les tokens
□ Responsive validé : 360px, 768px, 1200px, 1440px
□ Lighthouse score cible : Performance ≥ 85, Accessibility ≥ 90, SEO ≥ 90
```
