/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      colors: {
        primary: {
          DarkCyan: 'hsl(158, 36%, 37%)',
          DarkCyanhover: 'hsl(158, 30%, 27%)',
          Cream: 'hsl(30, 38%, 92%)'
        },
        neutral: {
          VeryDarkBlue: 'hsl(212, 21%, 14%)',
          DarkGrayishBlue: 'hsl(228, 12%, 48%)',

        }
      },
      fontFamily: {
        monserrat: '"Montserrat", sans-serif;',
        fraunces: '"Fraunces", sans-serif;'

      },
      letterSpacing: {
        ancho: '6px',
      },
    },
  },
  plugins: [],
}

