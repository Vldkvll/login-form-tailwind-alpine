module.exports = {
  mode: "jit",
  purge: ["./src/assets/tailwindPerso.css", "./*.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        alpineBlue: "#7DC1D2",
        vitePurple: "#BD34FE",
        tailwind: "#16BDCA",
      },
      fontFamily: {
        lato: ["lato"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
