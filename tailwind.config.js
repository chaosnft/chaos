/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: '#FFFFFF',
        blue: '#1976D2',
        green: '#2E7D32',
        black: '#000000',
        pink: '#F06292',
        'red-600': '#D32F2F',
        'light-yellow': '#FFF9C4',
        'dark-brown': '#3E2723',
        'light-blue': '#BBDEFB',
        ivory: '#FFF8E1',
        'light-green': '#C8E6C9',
        'navy-black': '#0A2B4A',
      },
      letterSpacing: {
        wider: '0.1em',
      },
      fontFamily: {
        'sf-slapstick': ['SF Slapstick Comic Shaded', 'cursive'],
        'comica-bd-italic': ['ComicaBD-Italic', 'cursive'],
        'comic-art': ['Comic-Art', 'cursive']
      },
      backgroundImage: {
        rainbow: 'linear-gradient(to right, #FF0000, #FFA500, #FFFF00, #008000, #0000FF, #4B0082, #EE82EE)', // 7 màu cầu vồng
      },
    },
  },
  plugins: [],
}