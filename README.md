# OpenSky Tactical — Hugo + Tailwind Website

Production-ready Hugo static site for **OpenSky Tactical**, featuring a dark tactical UI built with Tailwind CSS v3 and Hugo Pipes.

---

## Tech Stack

| Tool | Version | Purpose |
|---|---|---|
| Hugo | v0.128+ (extended) | Static site generator |
| Tailwind CSS | v3 | Utility-first styling |
| PostCSS | v8 | CSS processing pipeline |
| Autoprefixer | v10 | Vendor prefixing |

---

## Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Start development server
hugo server --disableFastRender

# 3. Open browser
# → http://localhost:1313/
```

### Production Build
```bash
hugo --minify
# Output → ./public/
```

---

## Project Structure

```
opensky-website/
├── hugo.toml                    # Hugo configuration, menus, site params
├── tailwind.config.js           # Design system tokens (colors, fonts, spacing)
├── postcss.config.js            # PostCSS pipeline
├── package.json                 # npm dependencies
│
├── assets/
│   └── css/
│       └── main.css             # Tailwind entry + custom components
│
├── layouts/
│   ├── index.html               # Homepage (assembles partials)
│   ├── _default/
│   │   ├── baseof.html          # Base HTML shell (all pages extend this)
│   │   ├── single.html          # Generic content pages
│   │   └── list.html            # Generic section list pages
│   ├── capabilities/
│   │   └── list.html            # Capabilities section page
│   ├── projects/
│   │   └── list.html            # Projects / Use Cases page
│   ├── contact/
│   │   └── list.html            # Contact page with form
│   └── partials/
│       ├── head.html            # <head>: SEO, fonts, CSS via Hugo Pipes
│       ├── navbar.html          # Sticky navbar + mobile menu
│       ├── footer.html          # Site footer
│       ├── hero.html            # Homepage hero section
│       ├── scripts.html         # Site-wide JavaScript
│       └── sections/
│           ├── capabilities.html     # Core Capabilities card grid
│           ├── tech-stack.html       # Unified Technical Ecosystem section
│           ├── vehicle-detection.html
│           ├── gun-detection.html
│           ├── drone-systems.html
│           ├── behavior-analysis.html
│           ├── why-choose-us.html    # 4-column icon cards
│           └── cta.html             # Call-to-action section
│
├── content/
│   ├── _index.md                # Homepage front matter (hero config)
│   ├── capabilities/_index.md
│   ├── projects/_index.md
│   ├── contact/_index.md
│   ├── privacy-policy.md
│   └── terms-of-service.md
│
├── data/
│   ├── capabilities.yaml        # Core capability cards data
│   ├── why_choose_us.yaml       # Why Choose Us cards data
│   └── projects.yaml            # Projects / Use Cases data
│
└── static/
    ├── images/                  # ← Place your images here (see below)
    └── favicon.png
```

---

## Adding Images

Replace placeholder paths with your actual images in `static/images/`:

| File | Used In |
|---|---|
| `/images/logo.png` | Navbar + Footer |
| `/images/hero-bg.jpg` | Homepage hero background |
| `/images/tech-1.jpg` through `tech-4.jpg` | Tech Stack mosaic |
| `/images/vehicle-detection.jpg` | Vehicle Detection section |
| `/images/gun-detection.jpg` | Gun Detection section |
| `/images/drone-systems.jpg` | Drone Systems section |
| `/images/behavior-analysis.jpg` | Behavior Analysis section |
| `/images/projects/*.jpg` | Projects page cards |

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
Deploy to Netlify — forms work automatically via the `netlify` attribute.

### Formspree
1. Open `layouts/contact/list.html`
2. Change `action="/success/"` to `action="https://formspree.io/f/YOUR_ID"`
3. Remove the `netlify` and `netlify-honeypot` attributes

---

## Design System Reference

All tokens are in `tailwind.config.js`:

| Token | Value |
|---|---|
| `primary` | `#a4e6ff` (brand cyan) |
| `surface` | `#121416` (background) |
| `on-surface` | `#e2e2e5` (text) |
| Font: Display | Inter |
| Font: Mono/Labels | Space Grotesk |

Custom CSS components: `assets/css/main.css` → `@layer components`

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
