/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'ui-sans-serif', 'system-ui'], // Add your custom font here
        serif: ['Merriweather', 'ui-serif', 'Georgia'], // Example of a serif font
        mono: ['Menlo', 'Monaco', 'ui-monospace'], // Example of a mono font
      },
      backdropBlur: {
        sm: '4px',
        DEFAULT: '10px',
        lg: '20px',
      },
    },
  },
  plugins: [
    require('tailwindcss-filters'),
  ],
}

