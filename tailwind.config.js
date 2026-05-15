/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",

  // ─── Content Sources ───────────────────────────────────────────────────────
  content: [
    "./layouts/**/*.html",
    "./content/**/*.{html,md}",
    "./data/**/*.{yaml,json,toml}",
  ],

  theme: {
    extend: {
      // ─── Brand Color Palette (extracted from homepage) ──────────────────
      colors: {
        "surface-container-lowest":    "#0c0e10",
        "on-secondary-fixed":          "#002203",
        "primary-fixed-dim":           "#4cd6ff",
        "outline-variant":             "#3c494e",
        "error-container":             "#93000a",
        "surface-container-high":      "#282a2c",
        "outline":                     "#859399",
        "on-secondary-container":      "#007117",
        "surface-container-highest":   "#333537",
        "on-tertiary-fixed":           "#410001",
        "surface-bright":              "#38393c",
        "on-error-container":          "#ffdad6",
        "on-surface":                  "#e2e2e5",
        "on-primary-fixed-variant":    "#004e60",
        "tertiary-container":          "#ffaba0",
        "on-tertiary-container":       "#a20007",
        "inverse-surface":             "#e2e2e5",
        "primary-container":           "#00d1ff",
        "primary-fixed":               "#b7eaff",
        "primary":                     "#a4e6ff",
        "on-tertiary":                 "#690003",
        "surface":                     "#121416",
        "surface-container":           "#1e2022",
        "surface-container-low":       "#1a1c1e",
        "on-surface-variant":          "#bbc9cf",
        "inverse-on-surface":          "#2f3033",
        "surface-dim":                 "#121416",
        "on-error":                    "#690005",
        "secondary":                   "#ecffe3",
        "tertiary":                    "#ffd2cc",
        "secondary-fixed":             "#72ff70",
        "on-primary":                  "#003543",
        "secondary-fixed-dim":         "#00e639",
        "on-tertiary-fixed-variant":   "#930005",
        "background":                  "#121416",
        "secondary-container":         "#13ff43",
        "surface-variant":             "#333537",
        "on-secondary-fixed-variant":  "#00530e",
        "inverse-primary":             "#00677f",
        "on-background":               "#e2e2e5",
        "on-primary-fixed":            "#001f28",
        "on-primary-container":        "#00566a",
        "on-secondary":                "#003907",
        "surface-tint":                "#4cd6ff",
        "tertiary-fixed-dim":          "#ffb4aa",
        "error":                       "#ffb4ab",
        "tertiary-fixed":              "#ffdad5",
      },

      // ─── Border Radius ──────────────────────────────────────────────────
      borderRadius: {
        DEFAULT: "0.125rem",
        lg:      "0.25rem",
        xl:      "0.5rem",
        full:    "0.75rem",
      },

      // ─── Spacing System (8px base) ──────────────────────────────────────
      spacing: {
        unit:            "4px",
        "container-max": "1440px",
        margin:          "2rem",
        gutter:          "1.5rem",
      },

      // ─── Max-width Utilities ────────────────────────────────────────────
      maxWidth: {
        "container-max": "1440px",
      },

      // ─── Typography ─────────────────────────────────────────────────────
      fontFamily: {
        "data-mono":   ["Space Grotesk", "monospace"],
        "display-xl":  ["Inter", "sans-serif"],
        "label-tech":  ["Space Grotesk", "sans-serif"],
        "headline-md": ["Inter", "sans-serif"],
        "body-base":   ["Inter", "sans-serif"],
        "body-sm":     ["Inter", "sans-serif"],
        "headline-lg": ["Inter", "sans-serif"],
      },

      fontSize: {
        "data-mono":   ["14px", { lineHeight: "1",   letterSpacing: "0em",    fontWeight: "400" }],
        "display-xl":  ["48px", { lineHeight: "1.1", letterSpacing: "-0.02em", fontWeight: "700" }],
        "label-tech":  ["12px", { lineHeight: "1",   letterSpacing: "0.05em", fontWeight: "500" }],
        "headline-md": ["24px", { lineHeight: "1.3",                           fontWeight: "600" }],
        "body-base":   ["16px", { lineHeight: "1.5",                           fontWeight: "400" }],
        "body-sm":     ["14px", { lineHeight: "1.5",                           fontWeight: "400" }],
        "headline-lg": ["32px", { lineHeight: "1.2",                           fontWeight: "600" }],
      },

      // ─── Keyframe Animations ────────────────────────────────────────────
      keyframes: {
        "fade-in-up": {
          "0%":   { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        pulse: {
          "0%, 100%": { opacity: "1" },
          "50%":       { opacity: "0.5" },
        },
      },
      animation: {
        "fade-in-up": "fade-in-up 0.6s ease-out both",
      },
    },
  },

  plugins: [],
};
