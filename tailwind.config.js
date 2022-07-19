/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'media',
  theme: {
    extend: {
      colors: {
        primary: '#66bb6a',
        'primary-dark': '#388e3c',
        secondary: '#a5d6a7',
        'secondary-dark': '#4caf50',
        error: '#d32f2f',
        'error-dark': '#b71c1c',
        warning: '#f57c00',
        'warning-dark': '#e65100',
        info: '#1976d2',
        'info-dark': '#0d47a1',
        success: '#388e3c',
        'success-dark': '#1b5e20',
        'th-primary': 'var(--primary)',
        'th-secondary': 'var(--secondary)',
        'th-error': 'var(--error)',
        'th-warning': 'var(--warning)',
        'th-info': 'var(--info)',
        'th-success': 'var(--success)',
      },
    },
  },
  plugins: [],
}
