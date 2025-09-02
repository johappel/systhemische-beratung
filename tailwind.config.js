/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./App.tsx",
    "./systemische-beratung-webseite/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dunkelblau': '#203baf',
        'orange': '#ff482f',
        'helllila': '#e8c6e8',
        'dunkelgruen': '#1f594a',
        'hellgruen': '#bbecbf',
        'gelb': '#fffd4a',
      },
      fontFamily: {
        'heading': ['Playfair Display', 'serif'],
        'body': ['Merriweather', 'serif'],
      },
    },
  },
  plugins: [],
}