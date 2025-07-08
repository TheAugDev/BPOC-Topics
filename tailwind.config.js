/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./topics/**/*.html"
  ],
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
