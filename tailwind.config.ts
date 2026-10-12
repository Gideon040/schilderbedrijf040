import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './sanity/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-archivo)', 'system-ui', 'sans-serif'],
        // 'bebas' blijft als klassenaam bestaan voor bestaande pagina's, maar wijst nu naar Barlow Condensed
        bebas: ['var(--font-archivo)', 'system-ui', 'sans-serif'],
        heading: ['var(--font-archivo)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'ui-monospace', 'monospace'],
      },
      borderRadius: {
        card: '16px',
        btn: '8px',
      },
      colors: {
        // Redesign 2026 (plan/design/LEESMIJ.md)
        navy: '#0B1B30',
        ink: '#07121F',
        brand: { DEFAULT: '#1668E3', hover: '#0F56C2' },
        link: { DEFAULT: '#1561D6', hover: '#0E4AA8' },
        verf: '#F2B632',
        zand: '#F5F3EF',
        winter: '#FDF3DC',
        tekst: { DEFAULT: '#2E3A48', zacht: '#3B4755', licht: '#5A6573' },
        lijn: '#E3E6EB',
        // Donkerder grijs voor leesbaarheid (2.1): bestaande text-gray-* klassen halen nu 4.5:1
        gray: {
          50: '#F9FAFB', 100: '#F3F4F6', 200: '#E5E7EB', 300: '#D1D5DB',
          400: '#5A6573', 500: '#4B5563', 600: '#3B4755', 700: '#2E3A48', 800: '#1F2937', 900: '#111827',
        },
        primary: 'hsl(var(--primary))',
        secondary: 'hsl(var(--secondary))',
        background: 'hsl(var(--background))',
        'accent-light': 'hsl(var(--accent-light))',
        'text-dark': 'hsl(var(--text-dark))',
        'text-light': 'hsl(var(--text-light))',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
export default config;