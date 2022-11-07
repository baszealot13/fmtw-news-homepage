/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: '#F55C52'
      },
      fontFamily: {
        body: ['Inter']
      }
    },
  },
  plugins: [],
}