/* eslint-disable global-require */
/* eslint-disable import/no-extraneous-dependencies */

module.exports = {
  content: [
    './pages/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
    './context/**/*.{js,jsx,ts,tsx}',
  ],
  darkMode: 'class',
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    extend: {
      colors: {
        primary: {
          100: '#787878',
          200: '#5E5E5E',
          300: '#E2081E',
          400: '#2B2B2B',
          500: '#121212',
          600: '#333333',
        },
        secondary: {
          50: '#F8F5F3',
          100: '#DAD6D3',
          200: '#C8C2BE',
          300: '#B5B0AD',
          400: '#47FA92',
          500: '#867D77',
          600: '#68605B',
        },
        background: {
          100: '#FFFEFE',
        },
        neutral: {
          600: '#5F5F5F',
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/line-clamp'),
  ],
};
