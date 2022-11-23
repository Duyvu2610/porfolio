/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'side-bar': 'rgb(7 14 31)',
        'primary': 'rgb(89 206 143)',
        'bg': 'rgb(1 14 34)'
      },
      backgroundImage: {
        'hero1-bg': "url('/images/herosection-bg.png')",
      },
      animation: {
        rotate: 'rotate 1s linear infinite',
        slidePoint: 'slidePoint 1.5s linear infinite',
        fade: 'fade 1s linear infinite',
        project: 'project .7s linear '
      },
      keyframes: {
        rotate: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        slidePoint: {
          '0%': { transform: 'translateX(0px)' },
          '100%': { transform: 'translateX(128px)' },
        },
        fade: {
          '0%': { opacity: "0" },
          '100%': { opacity: "1" }
        },
        project: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(100%)' },
        },
      },
      spacing: {
        'menu-w': "calc(100vw - 80px)",
        'sidebar-w': "80px"
      }
    },
  },
  plugins: [],
}