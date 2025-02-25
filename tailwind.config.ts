import type { Config } from "tailwindcss";

export default {
  content: ['./app/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'custom-dark': '#101010',
        'custom-light': '#f2f2f2',
        'custom-dark-alt': '#191919',
      },
      fontFamily: {
        'default': ['"Montserrat"', 'sans-serif'],
        'accent': ['"Playfair Display"', 'serif'],
      },
      boxShadow: {
        'card': 'inset 0 0 8px rgba(0, 0, 0, .4), 0 0 60px rgba(0, 0, 0, .2), 0 30px 120px rgba(0, 0, 0, .8)',
        'card-mobile': 'inset 0 0 8px rgba(0, 0, 0, .4), 0 0 60px rgba(0, 0, 0, .2), 0 10px 40px rgba(0, 0, 0, .8)',
        "tab": '0 2px 25px 2px rgba(255, 255, 255, 1)',
      },
      backgroundOpacity: {
        '4': '0.04',
      },
      backgroundImage: {
        'work-page': 'radial-gradient(circle closest-corner at 50% 0, rgba(242, 242, 242, .15), rgba(0, 0, 0, 0));',
        'info-page': 'radial-gradient(circle closest-corner at 50% 0, rgba(242, 242, 242, .15), rgba(0, 0, 0, 0));',
        'main-page-mobile': 'radial-gradient(circle farthest-side at 50% 0, rgba(242, 242, 242, .25), rgba(0, 0, 0, 0) 80%);',
        'project-page': 'radial-gradient(circle farthest-side at 50% 0, var(--project-color), rgba(0, 0, 0, 0));',
        'header-mobile': 'linear-gradient(rgba(0, 0, 0, .6), rgba(0, 0, 0, 0))',
        'header': 'linear-gradient(rgba(0, 0, 0, .7), rgba(16, 16, 16, 0))',
        'highlight-card-asset': 'radial-gradient(circle farthest-side at 50% 0, var(--project-color), #101010);', 
      },
      backgroundSize: {
        'loader': 'calc(100%/3) 50%',
        'work-page': '100% 135vh',
        'info-page': '100% 135vh',
        'project-page-md': '100% 135vh',
        'project-page-default': '100% 65vh',
        'main-page-mobile': '100% 450px',
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
        'work-card-default': '200px',
        'work-card-image-2xl': '750px',
        'work-card-image-lg': '450px',
        'work-card-image-md': '350px',
        'work-card-image-default': '200px',
        'mac-window-card-2xl': '810px',
        'mac-window-card-lg': '550px',
        'mac-window-card-md': '400px',
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
  variants: {
    extend: {
      translate: ['group-hover', 'hover-none'],  // Extend translate variant to support hover-none
    },
  },
  plugins: [],
} satisfies Config;
