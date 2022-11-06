/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors:{
     green:'#34D399',
     dark:'#121927',
     darklight:'#141d2b',
     greenlight:'#9ff000',
     whitelight:'#A4B1CD',
     bgcol:'#131C2A',
     white:'#ffffff',
     darksolid:'#1A2432',
     redlight:'#EF4444',
     bgredlight:'#332535',
     bgdark2:'#1F2937',
     blue:'#0080FF',
    },
    extend: {
      fontFamily:{
        'sans':["Euclid-Circular-A"]
      }
    },
  },
  plugins: [],
}
