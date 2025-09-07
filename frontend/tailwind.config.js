/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          yellow: "#facc15", // construction yellow
          black: "#1f1f1f",
          gray: "#6b7280",
        },
      },
    },
  },
  plugins: [require("tailwindcss-rtl")],
};

