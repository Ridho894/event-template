const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        darkBlue: "#07133A",
        darkBlues: "#000425"
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
