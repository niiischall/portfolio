/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/components/**/*.tsx', './src/sections/**/*.tsx'],
  theme: {
    colors: {
      primary: 'rgb(52, 55, 60)',
      secondary: 'rgb(186, 38, 92)',
      light: 'rgb(238, 234, 227)',
      gray: 'rgb(228, 228, 228)',
      rule: 'rgb(52, 55, 60)',
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      xxl: '1536px',
    },
    extend: {
      fontFamily: {
        sans: ['Josefin Sans'],
        poppins: ['Poppins'],
      },
      letterSpacing: {
        widest: '0.3em',
      },
    },
  },
  plugins: [],
};
