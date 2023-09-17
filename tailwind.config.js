module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'sm': { 'max': '479px' },
        'md': { 'max': '599px' },
        'lg': { 'max': '719px' },
        'xl': { 'max': '889px' },
        '2xl': { 'max': '1023px' },
      },
    },
  },
  plugins: [],
};