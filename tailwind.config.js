/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx,vue}'],
  theme: {
    extend: {
      keyframes: {
        'bounce-in': {
          '0%': { opacity: 0, transform: 'scale(.3) ' },
          '50%': { opacity: 1, transform: 'scale(1.05)' },
          '70%': { transform: 'scale(.9)' },
          '100%': { transform: 'scale(1)' }
        },
        'fade-in': {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 }
        }
      },
      animation: {
        'bounce-in': 'bounce-in 300ms cubic-bezier(0.4, 0, 0.2, 1)',
        'fade-in': 'fade-in 300ms cubic-bezier(0.4, 0, 0.2, 1)'
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))'
      }
    }
  },
  plugins: []
}
