/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        custom: ['CustomFont', 'sans-serif'], // 'custom' is the custom class name you can use in your HTML
      },
    },
  },
  plugins: [],
}

