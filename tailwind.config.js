/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        dark: '#0B0F0E',
        primary: '#22c55e', // ta couleur verte personnalisée
      },
    },
  },
  plugins: [],
};
