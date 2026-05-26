/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        gold: '#c9a256',
        'gold-light': '#e2c47a',
        dark: '#080808',
        'dark-card': '#111111',
        'dark-border': '#2a2a2a',
        cream: '#f0ece4',
      },
      fontFamily: {
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
      },
      animation: {
        sparkle: 'sparkle 3s ease-in-out infinite',
        'fade-in': 'fadeIn 0.5s ease-out forwards',
      },
    },
  },
  plugins: [],
}
