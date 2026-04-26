import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class", '[data-theme="dark"]'],

  theme: {
    extend: {
      colors: {
        /* Base */
        white: "var(--white)",
        black: "var(--black)",

        /* Semantic (current theme) */
        text: "var(--text)",
        "muted": "var(--text-muted)",
        "subtle": "var(--text-subtle)",

        bg: "var(--bg)",
        "inverted": "var(--bg-inverted)",
        "elevated": "var(--bg-elevated)",

        "hover": "var(--bg-hover)",
        "popup": "var(--bg-popup)",

        accent: "var(--accent)",
        border: "var(--border)",

        danger: "var(--danger)",

        icon: "var(--icon)",

        /* Slate (current theme) */
        slate: {
          50: "var(--slate-50)",
          100: "var(--slate-100)",
          200: "var(--slate-200)",
          300: "var(--slate-300)",
          400: "var(--slate-400)",
          500: "var(--slate-500)",
          600: "var(--slate-600)",
          700: "var(--slate-700)",
          800: "var(--slate-800)",
          900: "var(--slate-900)",
        },

        /* ===== RAW LIGHT (direct access if needed) ===== */
        "light-text": "var(--light-text)",
        "light-text-muted": "var(--light-text-muted)",
        "light-text-subtle": "var(--light-text-subtle)",

        "light-bg": "var(--light-bg)",
        "light-bg-inverted": "var(--light-bg-inverted)",
        "light-bg-elevated": "var(--light-bg-elevated)",
        "light-bg-hover": "var(--light-bg-hover)",
        "light-bg-popup": "var(--light-bg-popup)",

        "light-accent": "var(--light-accent)",
        "light-border": "var(--light-border)",
        "light-shadow": "var(--light-shadow)",
        "light-blur": "var(--light-blur)",

        "light-danger": "var(--light-danger)",
        "light-danger-text": "var(--light-danger-text)",

        "light-icon": "var(--light-icon)",

        "light-slate-50": "var(--light-slate-50)",
        "light-slate-100": "var(--light-slate-100)",
        "light-slate-200": "var(--light-slate-200)",
        "light-slate-300": "var(--light-slate-300)",
        "light-slate-400": "var(--light-slate-400)",
        "light-slate-500": "var(--light-slate-500)",
        "light-slate-600": "var(--light-slate-600)",
        "light-slate-700": "var(--light-slate-700)",
        "light-slate-800": "var(--light-slate-800)",
        "light-slate-900": "var(--light-slate-900)",

        /* ===== RAW DARK ===== */
        "dark-text": "var(--dark-text)",
        "dark-text-muted": "var(--dark-text-muted)",
        "dark-text-subtle": "var(--dark-text-subtle)",

        "dark-bg": "var(--dark-bg)",
        "dark-bg-inverted": "var(--dark-bg-inverted)",
        "dark-bg-elevated": "var(--dark-bg-elevated)",
        "dark-bg-hover": "var(--dark-bg-hover)",
        "dark-bg-popup": "var(--dark-bg-popup)",

        "dark-accent": "var(--dark-accent)",
        "dark-border": "var(--dark-border)",
        "dark-shadow": "var(--dark-shadow)",
        "dark-blur": "var(--dark-blur)",

        "dark-danger": "var(--dark-danger)",
        "dark-danger-text": "var(--dark-danger-text)",

        "dark-icon": "var(--dark-icon)",

        "dark-slate-50": "var(--dark-slate-50)",
        "dark-slate-100": "var(--dark-slate-100)",
        "dark-slate-200": "var(--dark-slate-200)",
        "dark-slate-300": "var(--dark-slate-300)",
        "dark-slate-400": "var(--dark-slate-400)",
        "dark-slate-500": "var(--dark-slate-500)",
        "dark-slate-600": "var(--dark-slate-600)",
        "dark-slate-700": "var(--dark-slate-700)",
        "dark-slate-800": "var(--dark-slate-800)",
        "dark-slate-900": "var(--dark-slate-900)",
      },

      boxShadow: {
        soft: "0 2px 8px var(--shadow)",
        glow: "0 0 16px var(--accent)",

        /* raw shadows too */
        "light-shadow": "0 2px 8px var(--light-shadow)",
        "dark-shadow": "0 2px 8px var(--dark-shadow)",
      },

      fontFamily: {
        inter: ["var(--font-inter)"],
        poppins: ["var(--font-poppins)"],
        ubuntu: ["var(--font-ubuntu)"],
        noto: ["var(--font-noto)"],
      },
    },
  },

  plugins: [],
};

export default config;
