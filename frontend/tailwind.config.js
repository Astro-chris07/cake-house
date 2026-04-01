/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bakery: {
          light: '#FDFBF7', // Very light cream
          pink: '#FCE0E3', // Soft pastel pink
          rose: '#F08A93', // Primary brand color
          choco: '#3D2B1F', // Dark chocolate for text
          mocha: '#8D6B5A', // Lighter brown for secondary text
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
