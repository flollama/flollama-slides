/** @type {import('tailwindcss').Config} */
module.exports = {
  safelist: [
    "bg-primary",
    "text-secondary",
    "bg-secondary",
    "text-text",
    "bg-dangerous",
    "text-white",
    "border",
    "border-stroke",
  ],

  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
  ],

  darkMode: ["class", '[data-theme="dark"]'],

  theme: {
    extend: {
      colors: {
        white: "var(--color-white)",
        black: "var(--color-black)",

        text: "var(--color-text)",
        "text-muted": "var(--color-text-muted)",
        "text-subtle": "var(--color-text-subtle)",

        bg: "var(--color-bg)",
        "bg-elevated": "var(--color-bg-elevated)",
        "bg-hover": "var(--color-bg-hover)",

        border: "var(--color-border)",
        accent: "var(--color-accent)",
      },

      boxShadow: {
        soft: "0 2px 8px var(--color-shadow)",
        glow: "0 0 16px var(--color-accent)",
      },

      fontFamily: {
        inter: "var(--font-inter)",
        poppins: "var(--font-poppins)",
        ubuntu: "var(--font-ubuntu)",
        noto: "var(--font-noto)",
      },
    },
  },

  plugins: [],
};
