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
        'page-2xl': '1440px',
        'page-lg': '880px',
        'page-md': '80vw',
        'page-default': '90vw',
        'mac-window-dot-2xl': '15px',
        'mac-window-dot-lg': '11px',
        'mac-window-dot-md': '9px',
      },
      height: {
        'work-card-2xl': '900px',
        'work-card-lg': '600px',
        'work-card-md': '450px',
        'mac-window-card-2xl': '810px',
        'mac-window-card-lg': '550px',
        'mac-window-card-md': '400px',
        'work-card-default': '350px',
        'mac-window-header-2xl': '55px',
        'mac-window-header-lg': '40px',
        'mad-window-header-md': '35px',
        'mac-window-dot-2xl': '15px',
        'mac-window-dot-lg': '11px',
        'mac-window-dot-md': '9px',
      },
      gap: {
        'mac-window-dots-2xl': '8px',
        'mac-window-dots-lg': '7px',
        'mac-window-dots-md': '4px',
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
