/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        reveal: {
          '0%': { transform: 'scaleY(1)' },
          '100%': { transform: 'scaleY(0)' }
        }
      },
      animation: {
        'reveal-down': 'reveal 1.2s ease-out forwards'
      }
    },
  },
  plugins: [],
}