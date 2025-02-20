const { theme } = require('./src/styles/theme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: 'var(--background-primary)',
          primary: 'var(--background-primary)',
          card: 'var(--background-card)',
          secondary: 'var(--background-secondary)',
        },
        text: {
          primary: 'var(--text-primary)',
          secondary: 'var(--text-secondary)',
        },
        accent: {
          primary: 'var(--accent-primary)',
          secondary: 'var(--accent-secondary)',
          tertiary: 'var(--accent-tertiary)',
        },
        states: {
          success: 'var(--states-success)',
          warning: 'var(--states-warning)',
          error: 'var(--states-error)',
          info: 'var(--states-info)',
        },
        border: {
          primary: 'var(--border-primary)',
          secondary: 'var(--border-secondary)',
        },
      },
    },
  },
  safelist: [
    'bg-background-secondary/50',
    'hover:bg-background-secondary/50',
    'hover:bg-background-secondary/70',
  ],
  plugins: [],
} 