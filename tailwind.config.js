/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ 
    './pages/**/*.{html,js}',
  './components/**/*.{html,js}',],
  theme: {
    extend: {
      screens:{
        "3xl":"200px"
      }
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
}
