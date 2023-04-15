/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      white: "#fefefe",
      brand: "#86c993",
      light: "#c7d9e1",
      dark: "#0b0d14",
      primary: "#024559",
      secondary: "#2177b1",
      info: "#537fba",
      accent1: "#36424e",
      accent2: "#4a6d89",
      accent3: "#aab3cc",
      success: "#03a153",
      warning: "#e6c803",
      danger: "#f3011a",
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-brand)"],
      },
    },
  },
  plugins: [],
};
