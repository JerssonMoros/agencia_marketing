/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "blue-button": '#007BEF',
        "grey-new": '#3C3C3C',
        "blue-bg": '#010517',
      }
    },
  },
  plugins: [],
}

