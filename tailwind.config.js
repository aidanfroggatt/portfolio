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
      fontFamily: {
        'default': ['"Inter"', 'sans-serif'],
        'accent': ['"Playfair Display"', 'serif'],
      },
      boxShadow: {
        'card': 'inset 0 0 8px rgba(0, 0, 0, .4), 0 0 60px rgba(0, 0, 0, .2), 0 30px 120px rgba(0, 0, 0, .8)',
        "tab": '0 2px 25px 2px rgba(255, 255, 255, 1)',
      },
      backgroundOpacity: {
        '4': '0.04',
      },
      width: {
        'loader': '60px',
        'work-card-2xl': '1275px',
        'work-card-lg': '850px',
        'work-card-md': '80vw',
      },
      height: {
        'work-card-2xl': '825px',
        'work-card-lg': '550px',
        'work-card-md': '450px',
        'footer-2xl': '450px',
        'footer-lg': '300px',
      },
      aspectRatio: {
        'loader': '2',
      },
      backgroundSize: {
        'loader': 'calc(100%/3) 50%'
      },
      animation: {
        'loader-animation': 'loader-keyframes 1s infinite linear'
      },
      keyframes: {
        'loader-keyframes': {
          '20%': {
            'backgroundPosition': '0% 0%, 50% 50%, 100% 50%'
          },
          '40%': {
            'backgroundPosition': '0% 100%, 50% 0%, 100% 50%'
          },
          '60%': {
            'backgroundPosition': '0% 50%, 50% 100%, 100% 0%'
          },
          '80%': {
            'backgroundPosition': '0% 50%, 50% 50%, 100% 100%'
          }
        }
      },
    },
  },
  plugins: [],
}
