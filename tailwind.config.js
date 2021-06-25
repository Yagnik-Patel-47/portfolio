module.exports = {
  purge: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        GothicA1: ["Gothic A1", "sans-serif"],
      },
      colors: {
        bg: "#181A1B",
        surface: "#202022",
        textPr: "#fff",
        textSc: "#c4c4c4",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
