/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Custom OffSec Dark Palette
        brand: {
          dark: '#0a0f1d',      // Deep background
          card: '#111827',      // Card surfaces
          border: '#1f2937',    // Component borders
          accent: '#10b981',    // Primary highlight green/cyan
          accentHover: '#059669'
        }
      }
    },
  },
  plugins: [],
}