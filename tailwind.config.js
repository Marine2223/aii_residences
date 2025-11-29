/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        marine: "#002147",     // Bleu marine
        lightorange: "#FFD180", // Orange clair
        blanc: "#FFFFFF",      // Blanc
      },
    },
  },
  plugins: [],
}
