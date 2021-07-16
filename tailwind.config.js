module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        techGreen: "#19D568",
        techRed: "#EB5757",
        techGray1: "#474747",
        techGray2: "#696969"
      },
    },
  },
  variants: {
   
    extend: {
     
    },
  },
  plugins: [],
}
