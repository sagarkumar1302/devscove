/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Include all React files
  ],
  theme: {
    extend: {
      colors:{
        green: "#22434d",
        lightgreen: "#68e492",
      },
      backgroundImage: {
        'mega-menu-bg': "url('./images/arrow-2.png')",
      },
      keyframes: {
        slideBg: {
          '0%': { backgroundPosition: '-200px 100%', backgroundSize: 'auto 200px' },
          '100%': { backgroundPosition: '0% 100%', backgroundSize: 'auto 200px' },
        },
      },
      animation: {
        slideBg: 'slideBg 0.8s ease-in-out forwards',
      },
    },
  },
  plugins: [],
};
