# OpenSky Intelligence — Hugo + Tailwind Website

Production-ready Hugo static site for **OpenSky Intelligence**, featuring a dark tactical UI built with Tailwind CSS v3 and Hugo Pipes.

---

## Tech Stack

| Tool | Recommended Version | Purpose |
|---|---|---|
| Hugo | hugo v0.148.2 extended | Static site generator |
| Tailwind CSS | v3.4.17 | Utility-first styling |
| PostCSS | v8 | CSS processing pipeline |
| Autoprefixer | v10 | Vendor prefixing |

---

## Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Start development server (with draft content and fast reload)
npm run dev
# Alternatively: hugo server --disableFastRender --buildDrafts

# 3. Open browser
# → http://localhost:1313/
```

### Production Build
```bash
npm run build
# Alternatively: hugo --minify
# Output → ./public/
```

---

## Project Structure

```
opensky-website/
├── hugo.toml                    # Hugo configuration, menus, site params
├── tailwind.config.js           # Design system tokens (colors, fonts, spacing)
├── postcss.config.js            # PostCSS pipeline
├── package.json                 # npm dependencies & development scripts
├── netlify.toml                 # Netlify deployment configuration
│
├── assets/
│   └── css/
│       └── main.css             # Tailwind entry + custom components
│
├── layouts/
│   ├── index.html               # Homepage (assembles partials)
│   ├── _default/
│   │   ├── baseof.html          # Base HTML shell (all pages extend this)
│   │   ├── single.html          # Generic content pages (e.g. privacy policy)
│   │   └── list.html            # Generic section list pages
│   ├── capabilities/
│   │   └── list.html            # Capabilities section main layout
│   ├── projects/
│   │   └── list.html            # Projects / Use Cases main layout
│   ├── contact/
│   │   ├── list.html            # Contact page layout with form
│   │   └── thanks.html          # Form submission thank you layout
│   └── partials/
│       ├── head.html            # <head>: SEO, preload fonts, CSS via Hugo Pipes
│       ├── navbar.html          # Sticky navbar + mobile menu
│       ├── footer.html          # Site footer
│       ├── hero.html            # Homepage hero section
│       ├── scripts.html         # Site-wide JavaScript
│       └── sections/
│           ├── cta.html         # Site-wide Call-to-action partial
│           ├── capabilities/    # Section partials for Capabilities page
│           │   ├── behavior-analysis.html
│           │   ├── cta.html
│           │   ├── feature-split.html
│           │   └── header.html
│           ├── contact/         # Section partials for Contact page
│           │   ├── contact-grid.html
│           │   └── contact-header.html
│           ├── home/            # Section partials for Homepage
│           │   ├── capabilities.html
│           │   ├── feature-block.html
│           │   ├── tech-stack.html
│           │   └── why-us.html
│           └── projects/        # Section partials for Projects page
│               ├── cta.html
│               ├── header.html
│               └── project-item.html
│
├── content/
│   ├── _index.md                # Homepage content & front matter
│   ├── capabilities/
│   │   └── _index.md            # Capabilities page content & front matter
│   ├── projects/
│   │   └── _index.md            # Projects page content & front matter
│   ├── contact/
│   │   ├── _index.md            # Contact page content & front matter
│   │   └── thanks.md            # Thank You page content
│   ├── privacy-policy.md        # Privacy Policy content
│   └── terms-of-service.md      # Terms of Service content
│
├── data/
│   ├── capabilities.yaml        # Core capability cards data
│   ├── why_choose_us.yaml       # Why Choose Us cards data
│   └── projects.yaml            # Projects / Use Cases data
│
└── static/
    ├── css/
    │   └── fonts.css            # Font-face CSS declarations
    ├── fonts/                   # Bundled local web fonts (.woff2)
    └── images/                  # Site images & visual assets
```

---

## Adding Images

The layout uses high-fidelity real assets rather than generic placeholders. You can replace them with your actual files in `static/images/`:

| File | Used In |
|---|---|
| `/images/logo.png` | Navbar + Footer branding |
| `/images/hero-bg.png` | Homepage hero tactical grid/background |
| `/images/tech-1.png` to `/images/tech-4.png` | Homepage Technical Stack mosaic |
| `/images/vehicle-detection.jpg` & `vehicle-detection-2.png` | Capabilities: Vehicle Detection components |
| `/images/gun-detection.png` | Capabilities: Weapon Detection AI section |
| `/images/drone-systems.png` & `drone-systems-2.png` | Capabilities: Unmanned Systems section |
| `/images/behavior-analysis.png` | Capabilities: Behavior & Threat Analysis section |
| `/images/project-*.jpg` & `project-*.png` | Projects / Use Cases detail cards |
| `/images/contact-tactical-map.jpg` | Contact page tactical map background |

---

## Content Management (No Code Changes Needed)

### Edit Capability Cards
→ `data/capabilities.yaml`

### Edit "Why Choose Us" Cards
→ `data/why_choose_us.yaml`

### Edit Projects / Use Cases
→ `data/projects.yaml`

### Edit Site Info (email, address, logo)
→ `hugo.toml` → `[params]` section

### Edit Navigation Menu
→ `hugo.toml` → `[[menus.main]]` entries

---

## Contact Form Setup

The contact form uses **Netlify Forms** by default.

### Netlify
Deploy to Netlify — forms work automatically because of the `data-netlify="true"` attribute and redirect to the custom thank-you page `/contact/thanks/`.

### Formspree / Other Action
1. Open `layouts/partials/sections/contact/contact-grid.html`
2. Change `action="/contact/thanks/"` to your Formspree endpoint (e.g., `action="https://formspree.io/f/YOUR_ID"`)
3. Remove the `data-netlify="true"` attribute

---

## Design System Reference

All tokens are defined in `tailwind.config.js`:

| Token | Value / Font Family | Purpose |
|---|---|---|
| `primary` | `#a4e6ff` | Brand cyan accent |
| `primary-fixed-dim` | `#4cd6ff` | Hover/secondary brand accent |
| `surface` / `background` | `#121416` | Main deep background |
| `on-surface` | `#e2e2e5` | Primary body text |
| `on-surface-variant` | `#bbc9cf` | Muted descriptions/labels |
| `display-xl` / `headline-lg` | `Inter` | Bold futuristic headers |
| `body-base` / `body-sm` | `Inter` | Highly readable body text |
| `label-tech` / `data-mono` | `Space Grotesk` | Monospace data readouts and small indicators |

Custom CSS components are defined in `assets/css/main.css` → `@layer components`.

---

## Deployment

### Netlify
```toml
# netlify.toml
[build]
  command = "npm install && hugo --minify"
  publish = "public"
```

### Vercel / Cloudflare Pages
Set build command: `npm install && hugo --minify`
Output directory: `public`
