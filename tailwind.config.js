/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens:{
      xsm: '320px',
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1120px',
      xxl: '1440px'
    },
    extend: {
      colors: {
        red: "#ff0000",
        redP: '#0d6efd', //this is blue color, name is false
        redP2: '#0d6efd',
        gray: '#eee'
      }
    }
  },
  plugins: [],
}
