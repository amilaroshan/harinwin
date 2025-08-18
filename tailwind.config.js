/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#042460',
        'light-blue': '#4A90E2',
        'dark-blue': '#0A1B3D',
        cream: '#F8F6F0'
      },
      fontFamily: {
        'jakarta': ['Plus Jakarta Sans', 'sans-serif']
      }
    }
  },
  plugins: []
}

