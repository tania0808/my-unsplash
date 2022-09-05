/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        'xxs': '.6rem'
      },

      colors: {
        'light-blue': '#F3F2FC',
        'auth-btn': '#B2ACF3',
        'input': 'A6A9B4',
        'add-btn': '#3DB46D',
        'light-grayish-blue': 'hsl(233, 11%, 84%)',
        'light-grey': '#D3D3D3',
        'grey': 'hsl(234, 11%, 52%)',
        'white-smoke': '#F8F8F8'
      },

      fontFamily: {
        'josefin': 'Josefin Sans, sans-serif',
        'poppins': 'Poppins, sans-serif'
      },
      borderWidth: {
        '1': '1px',
      },

      screens: {
        '3xl': {'max': '2500px'},
        '2xl': {'max': '1535px'},
        // => @media (max-width: 1535px) { ... }
  
        'xl': {'max': '1279px'},
        // => @media (max-width: 1279px) { ... }
  
        'lg': {'max': '1023px'},
        // => @media (max-width: 1023px) { ... }
  
        'md': {'max': '967px'},
        // => @media (max-width: 767px) { ... }
  
        'min-sm': {'min': '720px'},
        
        'sm': {'max': '720px'},
        // => @media (max-width: 639px) { ... }
        'xs': {'max': '569px'},
        // => @media (max-width: 639px) { ... }
      },
    },
  },
  plugins: [],
}
