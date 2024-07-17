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
  safeList: ['text-center', 'text-left', 'text-right', 'text-justify'],
  theme: {
    extend: {},
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