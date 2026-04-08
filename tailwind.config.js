/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./layouts/**/*.html",
    "./content/**/*.md",
    "./content/**/*.html",
    "./data/**/*.json",
    "./data/**/*.toml",
  ],
  theme: {
    extend: {
      colors: {
        // You can add your custom colors here to match the current theme
      },
    },
  },
  plugins: [],
}
