/** @type {import('tailwindcss').Config} */
//eslint-disable-next-line
const {nextui} = require("@nextui-org/react");
module.exports = {
  content: [
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/**/**/*.{js,ts,jsx,tsx}",
  ],
  safeList: ['text-center', 'text-left', 'text-right', 'text-justify','drawcols8', 'drawcols16', 'drawcols32', 'drawcols64', 'drawcols128','grid-rows-16', 'grid-rows-32', 'grid-rows-64', 'grid-rows-128'],
  theme: {
    extend: {
      gridTemplateColumns: {
        'drawcols8': '40px repeat(4, minmax(0, 1fr)) 40px',
        'drawcols16': '40px repeat(5, minmax(0, 1fr)) 40px',
        'drawcols32': '40px repeat(6, minmax(0, 1fr)) 40px',
        'drawcols64': '40px repeat(7, minmax(0, 1fr)) 40px',
        'drawcols128': '40px repeat(8, minmax(0, 1fr)) 40px',
      },
      gridTemplateRows: {
        '16': 'repeat(16, minmax(0, 1fr))',
        '32': 'repeat(32, minmax(0, 1fr))',
        '64': 'repeat(64, minmax(0, 1fr)',
        '128': 'repeat(128, minmax(0, 1fr)',
      },
    },
  },
  darkMode: "class",
  plugins: [nextui({
    themes: {
      light: {
        layout:{
          boxShadow: {
            small: "0 5px 20px -5px rgba(0, 0, 0, 0.1)",
            medium: "0 8px 30px rgba(0, 0, 0, 0.15)"
          }
        }
      }
    }
  })],
}