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
        "danger-text": "var(--danger-text)",

        icon: "var(--icon)",

        /* Shade*/
        shade: {
          50: "var(--shade-50)",
          100: "var(--shade-100)",
          200: "var(--shade-200)",
          300: "var(--shade-300)",
          400: "var(--shade-400)",
          500: "var(--shade-500)",
          600: "var(--shade-600)",
          700: "var(--shade-700)",
          800: "var(--shade-800)",
          900: "var(--shade-900)",
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
