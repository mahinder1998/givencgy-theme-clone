/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './layout/*.liquid',
    './sections/*.liquid',
    './snippets/*.liquid',
    './templates/*.liquid',
    './templates/csutomers/*.liquid',
  ],
  theme: {
    screens:{
      sm: "480px",
      md: "768px",
      lg: "992px",
      xl: "1122px"
    },
    extend: {
      fontFamily:{
        mavenReg: "Maven Pro",
      }
    },
  },
  plugins: [],
}

