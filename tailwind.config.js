/** @type {import('tailwindcss').Config} */
module.exports = {
  prefix: "tw-",
  content: [
    "./src/**/*.{html,ts,js}"
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


