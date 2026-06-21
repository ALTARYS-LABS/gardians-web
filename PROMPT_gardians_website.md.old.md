# GARDIAN'S ASSISTANCE — Static Website Build

## Mission
Build a complete static multi-page website (pure HTML/CSS/JS, no framework) for **GARDIAN'S ASSISTANCE**, a private security company based in Abidjan, Côte d'Ivoire. The site will be hosted on GitHub Pages at: https://github.com/ALTARYS-LABS/gardians-web

---

## Brand Identity

**Colors (extracted from company documents):**
- Primary Yellow: `#F5C400`
- Deep Black: `#0D0D0D`
- White: `#FFFFFF`
- Dark Gray (text/secondary): `#1A1A1A`
- Light Gray (backgrounds): `#F5F5F5`

**Typography:**
- Headings: `Montserrat` (Bold/SemiBold) — Google Fonts
- Body: `Inter` (Regular/Medium) — Google Fonts
- Style: Modern, minimal, high-contrast. No gradients. No rounded corners excess. Clean whitespace.

**Logo:**
- Two source images are provided in the project folder: `assets/source/source_page1.png` and `assets/source/source_page2.png`
- Extract the GARDIAN'S logo (the "G" shield mark + "GARDIAN'S" wordmark visible on the second image) using Python + Pillow or rembg. Output: `assets/img/logo.png` (transparent background, minimum 300px wide)
- If extraction fails cleanly, generate a precise SVG placeholder: a black square containing a stylized bold "G" in yellow, with "GARDIAN'S" text below in white, saved as `assets/img/logo.svg`

---

## Site Architecture

```
/
├── index.html              # Home (Hero + Services summary + CTA)
├── a-propos.html           # About / Company history
├── services.html           # Full services detail
├── galerie.html            # Photo/video gallery
├── partenaires.html        # Partners & Certifications
├── temoignages.html        # Client testimonials
├── blog.html               # News / Blog (static, placeholder articles)
├── carrieres.html          # Job offers
├── contact.html            # Contact form + map + all contact info
├── 404.html                # Custom 404 page
├── robots.txt              # SEO: crawl directives + sitemap pointer
├── sitemap.xml             # SEO: all page URLs for Google indexing
├── CNAME                   # GitHub Pages custom domain: www.gardians.ci
├── blog/
│   ├── article-1.html
│   ├── article-2.html
│   └── article-3.html
├── assets/
│   ├── css/
│   │   ├── main.css        # Global styles, variables, typography
│   │   └── components.css  # Navbar, footer, cards, buttons
│   ├── js/
│   │   └── main.js         # Mobile nav toggle, form validation, lightbox, smooth scroll
│   ├── img/
│   │   ├── logo.png        # Extracted logo (or logo.svg fallback)
│   │   ├── logo.svg        # SVG fallback
│   │   ├── og-image.svg    # SEO: Open Graph image 1200×630px (CSS-generated SVG)
│   │   └── [placeholders]  # Named placeholder images (use CSS colored divs)
│   └── source/             # Raw source images provided by client
│       ├── source_page1.png
│       └── source_page2.png
├── extract_logo.py         # Logo extraction script (run first)
└── README.md
```

---

## Company Data (use exactly — do not infer or fabricate)

**Company:**
- Raison sociale: GARDIAN'S ASSISTANCE
- Fondée: 1998 par M. CANDAS Frédéric
- Forme juridique: SARL (Société Anonyme à Responsabilité Limitée), créée en 2003 par absorption de la société Gardian's
- Effectif: 1 285 employés
- Capital: 130 000 000 F CFA
- Agrément: N° 134/MEMIS/CAB du 02/04/2014 (délivré par le Ministère de l'Intérieur)
- CNPS: N° 90 100
- Registre du commerce: CI-ABJ-2013-M-128888
- Compte contribuable: 0304254 V
- Certifications: SGS

**Contact:**
- Adresse: 18BP 2473 — ABIDJAN 18, Treichville, Bd FH BOIGNY
- GPS: 5°18'21"N — 4°1'1"W
- Téléphone: 27 21 756 205 / 27 24 340 340
- WhatsApp: 27 24 340 340 → link: `https://wa.me/2252724340340`
- Email: contact@gardians.ci
- Website: www.gardians.ci
- Facebook: <!-- TODO: confirm exact Facebook profile URL with client -->
- LinkedIn: <!-- TODO: confirm exact LinkedIn company URL with client -->

> ⚠️ **Social media URLs:** The exact profile URLs were not confirmed by the client. Use `https://www.facebook.com/gardians` and `https://www.linkedin.com/company/gardians` as placeholders, but add an HTML comment `<!-- TODO: confirm exact social URL with client -->` next to each link in every page.

**Services (8 core + 1 app):**
1. Gardiennage
2. Vidéo surveillance
3. Géolocalisation
4. Contrôle d'accès
5. Téléassistance
6. Matériel de sécurité
7. Protection rapprochée
8. Audit de sécurité
9. **Application ASAP** (9th service, depuis 2017) — application smartphone (iOS / Android / Windows Store) permettant aux abonnés de demander une assistance en tout lieu et à tout moment. Quatre fonctions : bouton d'urgence, bouton sécurité, bouton médical, bouton autres services. Inclut aussi l'activation/désactivation de l'alarme domicile.

**Geographic presence (Côte d'Ivoire):**
Abidjan (siège), San Pedro (agence), Korhogo, Issia, Adzopé, Yamoussoukro, Abengourou, Tiassalé, Bonoua, Bongo, Tanda, Agnibilékrou, Bettié, Bouaflé, Grand Lahou.

---

## Pages — Detailed Specifications

### All pages — Shared elements

**Navbar (sticky):**
- Left: logo
- Center: nav links — Accueil | À propos | Services | Galerie | Partenaires | Témoignages | Blog | Carrières | Contact
- Right: CTA button "Nous contacter" (yellow background `#F5C400`, black text)
- Mobile: hamburger icon → full-screen overlay menu
- Active page link underlined in yellow

**Footer:**
- 3 columns: (1) Logo + tagline + social icons (Facebook, LinkedIn, WhatsApp), (2) Navigation links, (3) Contact info
- Bottom bar: `© 2024 GARDIAN'S ASSISTANCE — Tous droits réservés`
- Background: `#0D0D0D`, text: `#FFFFFF`

---

### index.html — Accueil

**Hero section:**
- Full-width, dark background (`#0D0D0D`)
- Headline: `Votre sécurité, notre priorité.`
- Subline: `GARDIAN'S ASSISTANCE — Prestataire de sécurité privée agréé depuis 1998, présent dans toute la Côte d'Ivoire.`
- Two CTAs: "Découvrir nos services" (yellow button) + "Nous contacter" (outlined white button)
- No stock photos — pure CSS geometric dark background with subtle yellow accent line

**Services summary (6 cards grid):**
- Show 6 of the 9 services with inline SVG icon, name, one-line description
- CTA link: "Voir tous nos services →" → `services.html`

**Key figures strip:**
- 3 stats: `1 285 collaborateurs` | `Depuis 1998` | `15+ villes en Côte d'Ivoire`
- Background: `#F5C400`, text: `#0D0D0D`, bold

**ASAP App teaser:**
- Section highlighting the mobile app with its 4 functions shown as icon + label cards
- App Store / Google Play / Windows Store: text links with placeholder `href="#"` and comment `<!-- TODO: add real store URLs -->`

**Contact CTA banner:**
- Full-width dark band: "Besoin d'un devis ? Contactez-nous dès aujourd'hui." + yellow button → `contact.html`

---

### a-propos.html — À propos

- Company history: fondée 1998 par M. CANDAS Frédéric, SARL créée 2003, agrément MEMIS 2014
- Key figures: capital 130M FCFA, 1 285 employés, certification SGS
- Geographic presence: textual list of all 15 cities + CSS-styled map placeholder div (no Google Maps embed)
- Legal section: Registre du commerce CI-ABJ-2013-M-128888, CNPS 90 100, agrément 134/MEMIS/CAB du 02/04/2014

---

### services.html — Services

- Full detail for all 9 services in a 3-column grid
- Each service card: inline SVG icon, title, 2–3 sentence description
- Mark AI-generated descriptions: `<!-- AI-generated description, to be reviewed by client -->`
- ASAP app gets a dedicated highlighted section below the grid with the 4 function buttons shown as styled cards

---

### galerie.html — Galerie

- CSS grid photo gallery with placeholder colored divs (aspect-ratio 16/9, labeled "Photo [n]")
- Vanilla JS lightbox (no library): click opens overlay with close button and prev/next navigation
- Comment: `<!-- TODO: replace placeholder divs with real client photos -->`

---

### partenaires.html — Partenaires & Certifications

- SGS certification featured prominently in a highlighted banner
- Client logos section: CSS grid of logo placeholder boxes (gray border, 150×80px, labeled "Partenaire [n]")
- Comment: `<!-- TODO: client will provide partner and client logos -->`

---

### temoignages.html — Témoignages

- 3 placeholder testimonial cards
- Each: quote text, client name, company name, 5-star CSS rating
- Comment: `<!-- TODO: replace with real client testimonials -->`

---

### blog.html — Actualités

- 3 placeholder article cards: title, date, excerpt (2 sentences), "Lire la suite →" → `blog/article-[n].html`
- Each `blog/article-[n].html`: full placeholder article with heading, date, body paragraph
- Comment: `<!-- TODO: replace with real articles -->`

---

### carrieres.html — Carrières

- 2 placeholder job cards: title, location (Abidjan), contract type (CDI / CDD), short description, "Postuler" button
- "Postuler" button: `mailto:contact@gardians.ci?subject=Candidature%20-%20[Titre du poste]`
- Comment: `<!-- TODO: replace with real job listings -->`

---

### contact.html — Contact

**Contact form fields:**
- Nom complet* (text)
- Email* (email)
- Téléphone (tel)
- Objet* (select: Demande de devis | Renseignement | Partenariat | Autre)
- Message* (textarea, min 4 rows)
- Submit button: "Envoyer le message" (yellow)
- Form action: `<!-- TODO: set Formspree endpoint or backend -->`; fallback `mailto:contact@gardians.ci`
- Vanilla JS validation: required fields, email format regex, show inline error messages

**Contact info block (side column):**
- Adresse: 18BP 2473 — ABIDJAN 18, Treichville, Bd FH BOIGNY
- Téléphone: 27 21 756 205 / 27 24 340 340 (tel: links)
- WhatsApp: clickable → `https://wa.me/2252724340340`
- Email: clickable → `mailto:contact@gardians.ci`
- GPS: 5°18'21"N — 4°1'1"W

**Map placeholder:**
- Styled div showing GPS coordinates as text + "Voir sur Google Maps" link → `https://maps.google.com/?q=5.305833,-4.016944`
- Comment: `<!-- TODO: embed interactive map (Google Maps or Mapbox) -->`

---

## SEO — Complete Implementation

### `<head>` template (apply to every page with unique values)

Every page must have this full `<head>` block. Values in `[brackets]` are page-specific — see the SEO table below.

```html
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <!-- SEO: Primary -->
  <title>[PAGE_TITLE]</title>
  <meta name="description" content="[PAGE_DESCRIPTION]">
  <meta name="keywords" content="[PAGE_KEYWORDS]">
  <meta name="robots" content="index, follow">
  <link rel="canonical" href="https://www.gardians.ci/[PAGE_PATH]">

  <!-- SEO: Open Graph (Facebook, LinkedIn sharing) -->
  <meta property="og:type" content="website">
  <meta property="og:title" content="[PAGE_TITLE]">
  <meta property="og:description" content="[PAGE_DESCRIPTION]">
  <meta property="og:url" content="https://www.gardians.ci/[PAGE_PATH]">
  <meta property="og:image" content="https://www.gardians.ci/assets/img/og-image.svg">
  <meta property="og:site_name" content="Gardian's Assistance">
  <meta property="og:locale" content="fr_CI">

  <!-- SEO: Twitter Card -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="[PAGE_TITLE]">
  <meta name="twitter:description" content="[PAGE_DESCRIPTION]">
  <meta name="twitter:image" content="https://www.gardians.ci/assets/img/og-image.svg">

  <!-- Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@600;700&family=Inter:wght@400;500&display=swap" rel="stylesheet">

  <!-- Styles -->
  <link rel="stylesheet" href="[RELATIVE_PATH]assets/css/main.css">
  <link rel="stylesheet" href="[RELATIVE_PATH]assets/css/components.css">
</head>
```

### SEO values per page

| Page | `<title>` | `<meta name="description">` |
|---|---|---|
| `index.html` | Gardian's Assistance — Sécurité privée à Abidjan \| Gardiennage & Surveillance | Prestataire de sécurité privée agréé en Côte d'Ivoire depuis 1998. Gardiennage, vidéosurveillance, protection rapprochée à Abidjan et dans 15 villes. |
| `services.html` | Nos services de sécurité — Gardiennage, Vidéosurveillance, Protection \| Gardian's | Découvrez les 9 services de Gardian's Assistance : gardiennage, vidéo surveillance, géolocalisation, contrôle d'accès, téléassistance et application ASAP. |
| `a-propos.html` | À propos — Société de sécurité agréée depuis 1998 \| Gardian's Assistance | Gardian's Assistance, fondée en 1998 par M. CANDAS Frédéric. 1 285 collaborateurs, agrément MEMIS, certification SGS, présente dans toute la Côte d'Ivoire. |
| `contact.html` | Contactez-nous — Devis sécurité Abidjan \| Gardian's Assistance | Contactez Gardian's Assistance pour un devis personnalisé. Treichville, Abidjan. Tél : 27 21 756 205. Email : contact@gardians.ci |
| `galerie.html` | Galerie photos — Gardian's Assistance en action \| Sécurité Abidjan | Photos de nos équipes de gardiennage, agents de sécurité et interventions sur le terrain à Abidjan et en Côte d'Ivoire. |
| `partenaires.html` | Partenaires & Certifications — SGS \| Gardian's Assistance | Gardian's Assistance est certifié SGS et travaille avec des partenaires de confiance en Côte d'Ivoire. |
| `temoignages.html` | Témoignages clients — Gardian's Assistance \| Sécurité privée CIV | Ce que nos clients disent de Gardian's Assistance, prestataire de sécurité privée de référence en Côte d'Ivoire. |
| `blog.html` | Actualités sécurité — Blog Gardian's Assistance | Conseils, actualités et guides pratiques sur la sécurité privée, le gardiennage et la protection en Côte d'Ivoire. |
| `carrieres.html` | Carrières — Rejoignez Gardian's Assistance \| Emploi sécurité Abidjan | Gardian's Assistance recrute des agents de sécurité, gardiens et techniciens en Côte d'Ivoire. Postulez dès maintenant. |

### Blog articles — SEO-optimized placeholder titles

Use these exact titles and slugs for the 3 placeholder articles. They target real search queries:

| File | `<title>` | H1 | Focus keyword |
|---|---|---|---|
| `blog/article-1.html` | Comment choisir une société de gardiennage à Abidjan \| Gardian's | Comment choisir une société de gardiennage à Abidjan | gardiennage Abidjan |
| `blog/article-2.html` | Vidéosurveillance : ce que dit la loi en Côte d'Ivoire \| Gardian's | Vidéosurveillance en Côte d'Ivoire : cadre légal et bonnes pratiques | vidéosurveillance Côte d'Ivoire |
| `blog/article-3.html` | Agrément MEMIS : pourquoi faire appel à une société agréée \| Gardian's | Agrément MEMIS : l'essentiel à savoir avant de choisir votre prestataire | société sécurité agréée CIV |

Each article must have: `<h1>`, `<h2>` subheadings, 3 paragraphs of placeholder text (`<!-- AI-generated -->`), author line "Gardian's Assistance", publication date, and breadcrumb nav (`Accueil > Blog > [Article title]`).

### JSON-LD Schema.org (index.html only)

Inject this block inside `<head>` of `index.html`:

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Gardian's Assistance",
  "description": "Prestataire de sécurité privée agréé en Côte d'Ivoire depuis 1998. Gardiennage, vidéosurveillance, géolocalisation, contrôle d'accès, protection rapprochée.",
  "url": "https://www.gardians.ci",
  "telephone": "+2252721756205",
  "email": "contact@gardians.ci",
  "foundingDate": "1998",
  "numberOfEmployees": {
    "@type": "QuantitativeValue",
    "value": 1285
  },
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Boulevard FH BOIGNY",
    "addressLocality": "Treichville",
    "addressRegion": "Abidjan",
    "postalCode": "18 BP 2473",
    "addressCountry": "CI"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 5.305833,
    "longitude": -4.016944
  },
  "areaServed": {
    "@type": "Country",
    "name": "Côte d'Ivoire"
  },
  "hasCredential": "Agrément N° 134/MEMIS/CAB du 02/04/2014",
  "sameAs": [
    "https://www.facebook.com/gardians",
    "https://www.linkedin.com/company/gardians"
  ]
}
</script>
```

### `robots.txt`

```
User-agent: *
Allow: /

Sitemap: https://www.gardians.ci/sitemap.xml
```

### `sitemap.xml`

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://www.gardians.ci/</loc>
    <priority>1.0</priority>
    <changefreq>monthly</changefreq>
  </url>
  <url>
    <loc>https://www.gardians.ci/services.html</loc>
    <priority>0.9</priority>
    <changefreq>monthly</changefreq>
  </url>
  <url>
    <loc>https://www.gardians.ci/contact.html</loc>
    <priority>0.8</priority>
    <changefreq>monthly</changefreq>
  </url>
  <url>
    <loc>https://www.gardians.ci/a-propos.html</loc>
    <priority>0.7</priority>
    <changefreq>yearly</changefreq>
  </url>
  <url>
    <loc>https://www.gardians.ci/blog.html</loc>
    <priority>0.7</priority>
    <changefreq>weekly</changefreq>
  </url>
  <url>
    <loc>https://www.gardians.ci/blog/article-1.html</loc>
    <priority>0.6</priority>
    <changefreq>yearly</changefreq>
  </url>
  <url>
    <loc>https://www.gardians.ci/blog/article-2.html</loc>
    <priority>0.6</priority>
    <changefreq>yearly</changefreq>
  </url>
  <url>
    <loc>https://www.gardians.ci/blog/article-3.html</loc>
    <priority>0.6</priority>
    <changefreq>yearly</changefreq>
  </url>
  <url>
    <loc>https://www.gardians.ci/galerie.html</loc>
    <priority>0.5</priority>
    <changefreq>monthly</changefreq>
  </url>
  <url>
    <loc>https://www.gardians.ci/partenaires.html</loc>
    <priority>0.5</priority>
    <changefreq>yearly</changefreq>
  </url>
  <url>
    <loc>https://www.gardians.ci/temoignages.html</loc>
    <priority>0.5</priority>
    <changefreq>monthly</changefreq>
  </url>
  <url>
    <loc>https://www.gardians.ci/carrieres.html</loc>
    <priority>0.5</priority>
    <changefreq>monthly</changefreq>
  </url>
</urlset>
```

### `CNAME` (GitHub Pages custom domain)

```
www.gardians.ci
```

### `assets/img/og-image.svg` (Open Graph image)

Generate a 1200×630px SVG:
- Background: `#0D0D0D`
- Left half: logo (reference `logo.png` or render the "G" mark in SVG)
- Right half: company name "GARDIAN'S ASSISTANCE" in white Montserrat bold, tagline "Votre sécurité, notre priorité." in `#F5C400`
- Bottom strip: `#F5C400` band with "www.gardians.ci" in black

---

## Technical Constraints

- **Pure static:** HTML5 + CSS3 + Vanilla JS only. Zero build tools. Zero npm. Zero frameworks.
- **No external CSS frameworks** — no Bootstrap, no Tailwind. Custom CSS only.
- **Google Fonts** loaded via `<link>` in `<head>` for every page (Montserrat + Inter).
- **Performance:** No external images unless provided by client. Use CSS shapes and colored `<div>` placeholders only.
- **Accessibility:** Semantic HTML5 tags (`<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`), `alt` on all `<img>`, `aria-label` on icon-only buttons, sufficient color contrast.
- **GitHub Pages ready:** all paths relative, no server-side dependencies.
- **Mobile-first responsive:** breakpoints at 768px (tablet) and 1024px (desktop).
- **CSS custom properties** in `:root` for all brand colors, font sizes, and spacing scale.
- **No inline styles** — all styling in CSS files.

---

## Logo Extraction Script

Create `extract_logo.py` and **run it first** before generating any HTML:

```python
"""
extract_logo.py
Extracts the GARDIAN'S logo from source_page2.png.
Requirements: pip install Pillow rembg
"""
from PIL import Image
import os

try:
    from rembg import remove

    img = Image.open("assets/source/source_page2.png")
    # Approximate crop of top-left logo area (adjust if needed)
    w, h = img.size
    logo_crop = img.crop((0, 0, int(w * 0.25), int(h * 0.20)))
    logo_no_bg = remove(logo_crop)
    os.makedirs("assets/img", exist_ok=True)
    logo_no_bg.save("assets/img/logo.png")
    print("✅ Logo extracted and saved to assets/img/logo.png")

except ImportError:
    print("⚠️  rembg not available. Saving raw crop as assets/img/logo_raw.png")
    img = Image.open("assets/source/source_page2.png")
    w, h = img.size
    logo_crop = img.crop((0, 0, int(w * 0.25), int(h * 0.20)))
    os.makedirs("assets/img", exist_ok=True)
    logo_crop.save("assets/img/logo_raw.png")
    print("→ Manually clean the background and save as assets/img/logo.png")
    print("→ Alternatively, use assets/img/logo.svg (SVG fallback will be generated)")

except Exception as e:
    print(f"❌ Extraction failed: {e}")
    print("→ SVG fallback will be used.")
```

If `logo.png` is not available after running the script, generate `assets/img/logo.svg`:
- Black rectangle background
- Bold "G" in `#F5C400` centered
- "GARDIAN'S" in white below, Montserrat font
- ViewBox: `0 0 200 80`

---

## Deliverables Checklist

**Logo & assets**
- [ ] `extract_logo.py` created and executed
- [ ] `assets/img/logo.png` or `assets/img/logo.svg` present
- [ ] `assets/img/og-image.svg` generated (1200×630px)

**Pages**
- [ ] All 9 main HTML pages created and fully cross-linked
- [ ] 3 blog article pages created under `blog/` with SEO-optimized titles and H1/H2 structure
- [ ] `404.html` created (links back to `index.html`)

**SEO files**
- [ ] `robots.txt` at repo root
- [ ] `sitemap.xml` at repo root with all 12 URLs
- [ ] `CNAME` file at repo root containing `www.gardians.ci`
- [ ] Every page has unique `<title>` and `<meta name="description">` from the SEO table
- [ ] Every page has full Open Graph `<meta property="og:*">` block
- [ ] `<link rel="canonical">` on every page
- [ ] JSON-LD Schema.org block in `index.html` `<head>`

**CSS / JS**
- [ ] `assets/css/main.css` complete with `:root` CSS variables
- [ ] `assets/css/components.css` complete (navbar, footer, cards, buttons, form)
- [ ] `assets/js/main.js` complete (mobile nav, form validation, lightbox)

**Quality**
- [ ] `README.md` includes: project structure, GitHub Pages deploy instructions, Google Search Console setup steps, full TODO list for client
- [ ] All placeholder sections marked with `<!-- TODO -->` comments
- [ ] All AI-generated text marked with `<!-- AI-generated, to be reviewed by client -->`
- [ ] No broken internal links
- [ ] Responsive verified at 375px / 768px / 1280px viewport widths
