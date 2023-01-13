const { emerald } = require('tailwindcss/colors')

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: emerald
      }
    },

    fontFamily: {
      sans: ['Inter', 'system-ui', 'sans-serif'],
      display: ['Exo', 'system-ui', 'sans-serif'],
      body: ['Inter', 'system-ui', 'sans-serif']
      // serif: ['ui-serif', 'Georgia'],
      // display: ['Oswald'],
    }
  },
  plugins: []
}
