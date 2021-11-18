module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{js,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    fontFamily: {
      rubik: ["Rubik"],
      qahiri: ["Qahiri"],
      josefinSans: ["Josefin Sans"],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
