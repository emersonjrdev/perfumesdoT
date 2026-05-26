/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        gold: '#c9a256',
        'gold-light': '#e8c97a',
        'gold-dark': '#9a7a3a',
        dark: '#060606',
        'dark-card': '#0e0e0e',
        'dark-hover': '#161616',
        'dark-border': '#242424',
        cream: '#f0ece4',
      },
      fontFamily: {
        logo: ['Cinzel Decorative', 'serif'],
        display: ['Cinzel', 'serif'],
        body: ['Raleway', 'sans-serif'],
      },
      keyframes: {
        sparkle: {
          '0%, 100%': { opacity: '0', transform: 'scale(0)' },
          '50%': { opacity: '1', transform: 'scale(1)' },
        },
        fadeIn: {
          from: { opacity: '0', transform: 'translateY(12px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
      },
      animation: {
        sparkle: 'sparkle 3s ease-in-out infinite',
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        float: 'float 4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
