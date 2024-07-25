/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '0px',
      'md': '701px',
      'lg': '900px',
    },
    extend: { 
      
      fontFamily: {
        lato: ['lato', 'sans-serif'],
        montserrat: ['montserrat', 'sans-serif']
      },
    },
  },
  plugins: [],
}

