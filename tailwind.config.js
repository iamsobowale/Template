module.exports = {
  content: [
    './layouts/**/*.html',
  ],
  theme: {
    extend: {
        colors: {
        },
        'fontFamily': {
          'Roboto': ['Roboto', 'sans-serif'],
          'poppins': ['Poppins', 'sans-serif'],
          'montserrat': ['Montserrat', 'sans-serif'],
        },
      },
    },
    
  plugins: [
    require('@tailwindcss/typography')
  ],
}