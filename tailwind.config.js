/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {

      width:{
        box:'160px'
      },
      
      colors:{
        orange:'#FFA500',
        extpink:{
          100:'#FFB6C1',
          200:'#FF69B4'
        },
        olivegreen:'rgba(66,90,72,1)',
        snow:'rgb(255,250,250)'
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },

      screens: {
        'xs':{'max':'639px'},
        //=>@ @media { ... }(max-width: 639px)

        'sm': {'min': '640px', 'max': '767px'},
        // => @media (min-width: 640px and max-width: 767px) { ... }
  
        'md': {'min': '768px', 'max': '1023px'},
        // => @media (min-width: 768px and max-width: 1023px) { ... }
  
        'lg': {'min': '1024px', 'max': '1279px'},
        // => @media (min-width: 1024px and max-width: 1279px) { ... }
  
        'xl': {'min': '1280px', 'max': '1535px'},
        // => @media (min-width: 1280px and max-width: 1535px) { ... }
  
        '2xl': {'min': '1536px'},
        // => @media (min-width: 1536px) { ... }
      },
    },
  },
  plugins: [],
}
