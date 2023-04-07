module.exports = {
  content: ["_site/**/*.html"],
  safelist: [],
  theme: {
    fontFamily: {
      sans: ["Lab Grotesque", "sans-serif"],
    },
    extend: {},
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};
