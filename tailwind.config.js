/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Verifica che questo percorso sia ESATTO
  ],
  theme: {
    extend: {
      colors: {
        piazza: {
          red: '#e63946',
          dark: '#05060f',
        }
      }
    },
  },
  plugins: [],
}