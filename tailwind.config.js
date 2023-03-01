/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: ["./src/**/*.{html,js}", "./index.html"],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Exo', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
}