/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-dark': '#101010',
        'custom-light': '#f2f2f2',
      },
      boxShadow: {
        '1': "inset 0 0 8px rgba(0, 0, 0, .4), 0 0 60px rgba(0, 0, 0, .2), 0 30px 120px rgba(0, 0, 0, .8)"
      }
    },
  },
  plugins: [],
}
