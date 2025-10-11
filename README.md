# Cristian Crivello - SEO & Web3 Specialist Portfolio

Sito web portfolio professionale in React per servizi di consulenza SEO, WordPress, Google Analytics, Google Search Console e SEO Web3.

## 📋 Indice

- [Panoramica](#panoramica)
- [Tecnologie Utilizzate](#tecnologie-utilizzate)
- [Struttura del Progetto](#struttura-del-progetto)
- [Design System](#design-system)
- [Funzionalità](#funzionalità)
- [Installazione](#installazione)
- [Sviluppo](#sviluppo)
- [Build e Deploy](#build-e-deploy)
- [Personalizzazione](#personalizzazione)
- [SEO Optimization](#seo-optimization)

---

## 🎯 Panoramica

Questo progetto è un sito web portfolio multi-pagina costruito con React e Vite, ottimizzato per attrarre clienti attraverso SEO e content marketing. Il sito presenta:

- **Homepage** con hero section, griglia servizi e form contatti
- **5 pagine servizi dedicate** ottimizzate per keyword specifiche
- **Sistema multilingue** (Italiano/Inglese)
- **Design responsive** mobile-first
- **Navigazione intuitiva** con menu dropdown
- **Meta tags SEO dinamici** per ogni pagina

---

## 🛠 Tecnologie Utilizzate

### Core
- **React 18+** - Library UI
- **Vite** - Build tool e dev server
- **React Router DOM** - Routing multi-pagina

### Styling
- **CSS3 puro** con CSS Variables
- **CSS Modules** per componenti isolati
- **Flexbox & CSS Grid** per layout

### Linguaggi
- **JavaScript (ES6+)**
- **JSX**
- **HTML5**

---

## 📁 Struttura del Progetto

```
cristiancrivello-react/
├── public/                          # Asset statici
├── src/
│   ├── components/                  # Componenti React riutilizzabili
│   │   ├── Navigation.jsx           # Barra navigazione con dropdown menu
│   │   ├── Navigation.css
│   │   ├── Hero.jsx                 # Sezione hero homepage
│   │   ├── Hero.css
│   │   ├── Services.jsx             # Griglia card servizi
│   │   ├── Services.css
│   │   ├── ContactForm.jsx          # Form di contatto
│   │   └── ContactForm.css
│   │
│   ├── contexts/                    # React Context per state management
│   │   └── LanguageContext.jsx     # Gestione lingua IT/EN
│   │
│   ├── pages/                       # Pagine routing
│   │   ├── HomePage.jsx             # Homepage (/)
│   │   ├── SEOPage.jsx              # Pagina SEO (/seo)
│   │   ├── WordPressPage.jsx        # Pagina WordPress (/wordpress)
│   │   ├── GoogleAnalyticsPage.jsx  # Pagina Analytics (/google-analytics)
│   │   ├── GoogleSearchConsolePage.jsx # Pagina GSC (/google-search-console)
│   │   ├── Web3SEOPage.jsx          # Pagina Web3 (/seo-web3)
│   │   └── ServicePage.css          # Stili condivisi pagine servizi
│   │
│   ├── App.jsx                      # Componente root + routing
│   ├── App.css                      # Stili globali app
│   ├── index.css                    # CSS reset + variabili
│   └── main.jsx                     # Entry point
│
├── index.html                       # HTML template
├── package.json                     # Dependencies
├── vite.config.js                   # Configurazione Vite
└── README.md                        # Questo file
```

---

## 🎨 Design System

### Colori

Il sito utilizza un sistema di colori centralizzato tramite **CSS Variables** definite in `src/index.css`:

```css
:root {
  --color-primary: #673de6;      /* Viola primario (brand) */
  --color-text: #333;             /* Testo principale */
  --color-background: #ffffff;    /* Background principale */
}
```

**Palette Completa:**

| Colore | Hex | Uso |
|--------|-----|-----|
| Viola Primario | `#673de6` | Logo, CTA, link hover, accenti |
| Grigio Scuro | `#333` | Testo principale |
| Grigio Medio | `#555`, `#666` | Testo secondario |
| Bianco | `#ffffff` | Background, card |
| Grigio Chiaro | `#f8f9fa`, `#e9ecef` | Background secondari |

**Gradient utilizzati:**

```css
/* Hero Homepage */
background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);

/* Hero Pagine Servizi */
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);

/* Card Servizi (variabili per ogni servizio) */
--card-gradient: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
```

### Tipografia

**Font Family:**
```css
font-family: 'Georgia', 'Times New Roman', serif;
```

Il font Georgia è stato scelto per:
- ✅ Eleganza e professionalità
- ✅ Ottima leggibilità anche su mobile
- ✅ Font di sistema (nessun caricamento esterno)

**Scale Tipografica:**

| Elemento | Size Desktop | Size Mobile | Weight |
|----------|-------------|-------------|--------|
| H1 (Hero Title) | 3rem (48px) | 2rem (32px) | 600 |
| H2 (Hero Subtitle) | 1.5rem (24px) | 1.25rem (20px) | 300 |
| H2 (Section Title) | 2.5rem (40px) | 2rem (32px) | 600 |
| Body Large | 1.25rem (20px) | 1.1rem (17.6px) | 400 |
| Body Normal | 1rem (16px) | 0.95rem (15.2px) | 400 |
| Body Small | 0.875rem (14px) | 0.85rem (13.6px) | 400 |

**Line Height:**
- Titoli: `1.2`
- Testo corpo: `1.6` - `1.8`

### Spaziatura

Sistema di spaziatura basato su multipli di **0.25rem (4px)**:

```css
/* Gap tra elementi */
gap: 0.5rem;   /* 8px */
gap: 1rem;     /* 16px */
gap: 1.5rem;   /* 24px */
gap: 2rem;     /* 32px */

/* Padding */
padding: 1rem;     /* 16px */
padding: 2rem;     /* 32px */
padding: 4rem;     /* 64px */
```

### Border Radius

```css
border-radius: 8px;     /* Card piccole, input */
border-radius: 12px;    /* Card medie, dropdown */
border-radius: 16px;    /* Card grandi */
border-radius: 50px;    /* Bottoni pill */
border-radius: 50%;     /* Cerchi (foto profilo) */
```

### Shadows

```css
/* Leggera - Card normali */
box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);

/* Media - Card hover */
box-shadow: 0 4px 15px rgba(0, 0, 0, 0.15);

/* Forte - Dropdown menu */
box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);

/* CTA Button */
box-shadow: 0 4px 15px rgba(103, 61, 230, 0.3);
```

### Transizioni

```css
/* Standard */
transition: all 0.3s ease;

/* Veloce (hover) */
transition: all 0.2s ease;

/* Animazioni */
transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
```

---

## ✨ Funzionalità

### 1. Sistema Multilingue

**File:** `src/contexts/LanguageContext.jsx`

- Supporto Italiano e Inglese
- Cambio lingua dinamico senza reload
- Traduzioni centralizzate in un unico file
- Switcher lingua nella navigazione

**Uso:**
```jsx
import { useLanguage } from '../contexts/LanguageContext';

function Component() {
  const { language, toggleLanguage, t } = useLanguage();

  return <h1>{t.hero.title}</h1>;
}
```

### 2. Navigazione con Dropdown Menu

**File:** `src/components/Navigation.jsx`

- Menu fisso sticky top
- Dropdown "Servizi" con 5 link
- Smooth scroll su homepage
- Routing tra pagine
- Responsive mobile

**Voci Menu:**
- Home
- Servizi (dropdown)
  - 🔍 SEO
  - ⚙️ WordPress
  - 📊 Google Analytics
  - 🔎 Google Search Console
  - 🚀 Web3 SEO
- Contatti
- LinkedIn
- IT/EN switcher

### 3. Hero Section

**File:** `src/components/Hero.jsx`

- Placeholder immagine profilo (SVG)
- Titolo + sottotitolo + descrizione
- CTA button con sottotesto
- Link social (LinkedIn, Fiverr, Portfolio)
- Background gradient

**Da personalizzare:**
- Sostituire SVG placeholder con foto reale
- Aggiornare link portfolio PDF

### 4. Sezione Servizi

**File:** `src/components/Services.jsx`

- Griglia responsive 5 card
- Card con gradient border on hover
- Emoji icons
- Link a pagine dedicate
- Animazioni hover

### 5. Form Contatti

**File:** `src/components/ContactForm.jsx`

**Campi:**
- Nome (text)
- Email (email)
- Messaggio (textarea)

**Features:**
- Validazione HTML5
- Stato loading durante invio
- Messaggi successo/errore
- Reset form dopo invio

**⚠️ TODO:** Integrare backend (EmailJS, Formspree, API custom)

### 6. Pagine Servizi SEO-Ottimizzate

Ogni pagina include:

**Struttura:**
- Hero con gradient background
- Intro section
- 6 servizi offerti (grid)
- 6 benefici (lista)
- 5 step processo di lavoro
- CTA finale
- Form contatti

**SEO:**
- Meta title dinamico
- Meta description dinamica
- H1, H2, H3 gerarchici
- 1000+ parole di contenuto
- Keywords strategiche

**Pagine:**

| Pagina | Route | Keywords Target |
|--------|-------|-----------------|
| SEO | `/seo` | consulente seo, ottimizzazione motori ricerca |
| WordPress | `/wordpress` | consulente wordpress, sviluppo wordpress |
| Analytics | `/google-analytics` | consulente google analytics, analisi dati web |
| Search Console | `/google-search-console` | consulente search console, monitoraggio seo |
| Web3 SEO | `/seo-web3` | seo web3, seo blockchain, seo nft, seo crypto |

---

## 🚀 Installazione

### Prerequisiti

- Node.js 18+
- npm o yarn

### Setup Progetto

```bash
# Clone o naviga nella directory
cd cristiancrivello-react

# Installa dipendenze
npm install

# Avvia dev server
npm run dev
```

Il sito sarà disponibile su: **http://localhost:5173/**

---

## 💻 Sviluppo

### Comandi Disponibili

```bash
# Dev server con hot reload
npm run dev

# Build per produzione
npm run build

# Preview build produzione
npm run preview

# Lint codice
npm run lint
```

### Aggiungere una Nuova Pagina

1. **Crea il file pagina** in `src/pages/`:

```jsx
// src/pages/NuovaPagina.jsx
import { useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import ContactForm from '../components/ContactForm';
import './ServicePage.css';

function NuovaPagina() {
  const { language } = useLanguage();

  useEffect(() => {
    document.title = 'Titolo Pagina - Cristian Crivello';
  }, [language]);

  return (
    <div className="service-page">
      {/* Contenuto */}
      <ContactForm />
    </div>
  );
}

export default NuovaPagina;
```

2. **Aggiungi route** in `src/App.jsx`:

```jsx
import NuovaPagina from './pages/NuovaPagina';

// In <Routes>
<Route path="/nuova-pagina" element={<NuovaPagina />} />
```

3. **Aggiungi traduzioni** in `src/contexts/LanguageContext.jsx`

4. **Aggiungi link** in navigazione/servizi

### Modificare Traduzioni

**File:** `src/contexts/LanguageContext.jsx`

```jsx
export const translations = {
  it: {
    nav: {
      nuovaVoce: 'Nuova Voce'
    }
  },
  en: {
    nav: {
      nuovaVoce: 'New Item'
    }
  }
};
```

---

## 🌐 Build e Deploy

### Build Produzione

```bash
npm run build
```

Questo crea la cartella `dist/` con file ottimizzati.

### Deploy Consigliati

#### **Vercel** (Raccomandato)

```bash
# Installa Vercel CLI
npm i -g vercel

# Deploy
vercel
```

**Configurazione automatica** per Vite + React Router.

#### **Netlify**

1. Connetti repository GitHub
2. Build command: `npm run build`
3. Publish directory: `dist`

**Redirect per SPA:**

Crea `public/_redirects`:
```
/*    /index.html   200
```

#### **GitHub Pages**

1. Modifica `vite.config.js`:

```js
export default defineConfig({
  base: '/nome-repo/',
  // ...
})
```

2. Deploy:

```bash
npm run build
npx gh-pages -d dist
```

---

## 🎨 Personalizzazione

### Cambiare Colori

**File:** `src/index.css`

```css
:root {
  --color-primary: #TUO_COLORE;  /* Cambia qui */
  --color-text: #333;
  --color-background: #ffffff;
}
```

Il colore primario si aggiorna automaticamente in:
- Logo
- Link hover
- Bottoni CTA
- Accenti

### Cambiare Font

**Opzione 1: Google Fonts**

1. Aggiungi in `index.html`:

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&display=swap" rel="stylesheet">
```

2. Modifica `src/index.css`:

```css
:root {
  font-family: 'Inter', sans-serif;
}
```

**Opzione 2: Font Locale**

1. Aggiungi font in `src/assets/fonts/`
2. Importa in `index.css`:

```css
@font-face {
  font-family: 'MioFont';
  src: url('/assets/fonts/MioFont.woff2') format('woff2');
}

:root {
  font-family: 'MioFont', sans-serif;
}
```

### Sostituire Foto Profilo

**File:** `src/components/Hero.jsx`

Sostituisci il placeholder SVG:

```jsx
<div className="image-placeholder">
  <img src="/path/to/foto.jpg" alt="Cristian Crivello" />
</div>
```

Aggiungi foto in `public/`:
```
public/
  └── images/
      └── profile.jpg
```

Poi:
```jsx
<img src="/images/profile.jpg" alt="Cristian Crivello" />
```

### Modificare Testi

Tutti i testi sono in:
- `src/contexts/LanguageContext.jsx` - Homepage
- `src/pages/*.jsx` - Pagine servizi (content object)

---

## 📊 SEO Optimization

### Meta Tags Dinamici

Ogni pagina imposta dinamicamente:

```jsx
useEffect(() => {
  document.title = 'Titolo Ottimizzato SEO';

  const metaDescription = document.querySelector('meta[name="description"]');
  if (metaDescription) {
    metaDescription.content = 'Descrizione ottimizzata...';
  }
}, [language]);
```

### Aggiungi meta tag base in `index.html`:

```html
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="description" content="Descrizione default">
  <meta name="keywords" content="seo, web3, wordpress, consulente">
  <meta name="author" content="Cristian Crivello">

  <!-- Open Graph -->
  <meta property="og:type" content="website">
  <meta property="og:title" content="Cristian Crivello - SEO & Web3 Specialist">
  <meta property="og:description" content="Consulenza SEO professionale">
  <meta property="og:image" content="/images/og-image.jpg">

  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="Cristian Crivello">
  <meta name="twitter:description" content="SEO & Web3 Specialist">
</head>
```

### Sitemap

Crea `public/sitemap.xml`:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://cristiancrivello.com/</loc>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://cristiancrivello.com/seo</loc>
    <priority>0.8</priority>
  </url>
  <!-- Aggiungi altre pagine -->
</urlset>
```

### robots.txt

Crea `public/robots.txt`:

```
User-agent: *
Allow: /
Sitemap: https://cristiancrivello.com/sitemap.xml
```

---

## 📞 Contatti

**Cristian Crivello**
- LinkedIn: [linkedin.com/in/cristian-crivello](https://www.linkedin.com/in/cristian-crivello)
- Fiverr: [fiverr.com/cristiancrivello](https://www.fiverr.com/cristiancrivello)

---

## 📝 Licenza

Progetto privato - Tutti i diritti riservati © 2025 Cristian Crivello

---

## 🔧 Troubleshooting

### Il routing non funziona dopo deploy

Aggiungi rewrite rules per SPA (vedi sezione Deploy).

### Immagini non si caricano

Le immagini in `public/` vanno referenziate con `/` come root:
```jsx
<img src="/images/foto.jpg" />  // ✅ Corretto
<img src="./images/foto.jpg" /> // ❌ Sbagliato
```

### Cambio lingua non funziona

Verifica che il componente sia wrappato in `<LanguageProvider>`.

---

**Versione:** 1.0.0
**Ultimo aggiornamento:** Ottobre 2025
**Build con:** ❤️ e React
