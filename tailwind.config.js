/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {},
    backgroundImage: {
      'hero-cover': "url('../public/cover.jpg')",
      'cover': 'cover'
    },
  },
  plugins: [],
}
