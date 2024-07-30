/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'montserrat': ['"Montserrat", sans-serif'],
        'fraunces': ['"Fraunces", serif'],
      },
      colors: {
        // Primary
          'primary-dark-cyan': 'hsl(158, 36%, 37%)',
          'primary-cream': 'hsl(30, 38%, 92%)',

        // Neutral
          'neutral-very-dark-blue': 'hsl(212, 21%, 14%)',
          'neutral-dark-grayish-blue': 'hsl(228, 12%, 48%)',
          'neutral-white': 'hsl(0, 0%, 100%)',
      },
      screens: {
        // @media (min-width: ...) {}
          'xs': '475px',  // => @media (min-width: 475px) { ... }
        
        // @media (max-width: ...) {}
          // 'max-screen-xs': {'max': '425px'}, // => @media (max-width: 425px) { ... }
      },
    },
  },
  plugins: [],
}