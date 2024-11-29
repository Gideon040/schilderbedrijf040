/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#e6f3ff',
          100: '#cce7ff',
          200: '#99cfff',
          300: '#66b7ff',
          400: '#339fff',
          500: '#0088fc',
          600: '#006dca',
          700: '#005297',
          800: '#003665',
          900: '#001b32',
        },
        dark: '#1a1a1a',
      },
      fontFamily: {
        heading: ['Bebas Neue', 'sans-serif'],
        body: ['Questrial', 'sans-serif'],
      },
    },
  },
  plugins: [],
};