/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts,js}",
    './components/**/*.{html,js}',
  ],
  theme: {
    extend: {
      colors: {
        'vermelho' : "#FF0000",
        'vermelho-escuro': "#990000"
      }
    },
  },
  plugins: [],
}


