/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        saffron: {
          50: '#fff7ed',
          100: '#ffedd5',
          200: '#fed7aa',
          300: '#fdba74',
          400: '#fb923c',
          500: '#f97316',
          600: '#ea580c',
          700: '#c2410c',
          800: '#9a3412',
          900: '#7c2d12',
          950: '#431407',
        },
        gold: {
          50: '#fefce8',
          100: '#fef9c3',
          200: '#fef08a',
          300: '#fde047',
          400: '#facc15',
          500: '#eab308',
          600: '#ca8a04',
          700: '#a16207',
          800: '#854d0e',
          900: '#713f12',
          950: '#422006',
        },
        sacred: {
          dark: '#161311',
          card: '#1f1a17',
          stone: '#29231f',
          border: '#3d342d',
          accent: '#e65100',
          ivory: '#FFFDF7',
          sandstone: '#EBDCB9',
          vermilion: '#C92A2A',
        }
      },
      fontFamily: {
        serif: ['Cinzel', 'Merriweather', 'Georgia', 'serif'],
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'divine-gradient': 'linear-gradient(135deg, #1c1917 0%, #291e17 50%, #1c140e 100%)',
        'mandala-glow': 'radial-gradient(circle at center, rgba(234, 179, 8, 0.15) 0%, rgba(249, 115, 22, 0.05) 50%, transparent 70%)',
      },
      boxShadow: {
        'divine': '0 10px 30px -10px rgba(234, 179, 8, 0.25)',
        'divine-lg': '0 20px 40px -15px rgba(249, 115, 22, 0.3)',
      }
    },
  },
  plugins: [],
}
