/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        shine: "shine 1s",
      },
      keyframes: {
        shine: {
          "100%": { left: "125%" },
        },
      },
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
        'white-smoke': '#F8F8F8',
        'blue-grey': '#D3D5E6',
        'deep-violet': '#636185',
        'grey-error': '#9B9AA9',
        'linear-bottom': '#F6F6F9',
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
  
        'min-lg': {'min': '1023px'},
        'lg': {'max': '1023px'},
        // => @media (max-width: 1023px) { ... }
        'min-md': {'min': '967px'},
        'md': {'max': '967px'},
        // => @media (max-width: 767px) { ... }
        
        'min-sm': {'min': '720px'},
        'sm': {'max': '720px'},
        // => @media (max-width: 639px) { ... }
        'min-xs': {'min': '569px'},
        'xs': {'max': '569px'},
        // => @media (max-width: 639px) { ... }
      },
    },
  },
  plugins: [],
  variants: {
    extend: {
        display: ["group-hover"],
    },
},
}
