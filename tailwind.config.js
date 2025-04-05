/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Include all React files
  ],
  theme: {
    extend: {
      colors:{
        green: "#2c3e50",
        lightgreen: "#00b2ff",
        tealgreen: "#0F2B33",
        lightwhite: "#0A1E23",
      },
      backgroundImage: {
        'mega-menu-bg': "url('./images/scribble.png')",
      },
      keyframes: {
        slideBg: {
          '0%': { backgroundPosition: '-150px 100%', backgroundSize: 'auto 150px' },
          '100%': { backgroundPosition: '0% 100%', backgroundSize: 'auto 150px' },
          
        },
      },
      animation: {
        slideBg: 'slideBg 0.8s ease-in-out forwards',
      },
    },
  },
  
  plugins: [],
};
