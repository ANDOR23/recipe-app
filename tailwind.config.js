/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend:{
      fontFamily:{
        'poppins':['Poppins', 'sans-serif'],
        playfair: ['Playfair Display', 'serif']
      } 
    },
    screens: {
      'mobile':'320px',
      'tablet': '768px',
      'desktop': '1024px'
    },
  },
  plugins: [],
}

