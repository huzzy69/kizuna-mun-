/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'kizuna-bg': '#FCFAF7',
        'kizuna-crimson': '#BC2732',
        'kizuna-gold': '#D4AF37',
        'kizuna-black': '#2D3436',
      },
      fontFamily: {
        serif: ['Noto Serif JP', 'Playfair Display', 'serif'],
        sans: ['Inter', 'Nunito Sans', 'sans-serif'],
        calligraphy: ['Shizuru', 'cursive'],
      },
      backgroundImage: {
        'washi': "url('/washi_texture.png')",
        'kanji': "url('/kizuna_kanji.png')",
      }
    },
  },
  plugins: [],
}
