module.exports = {
  content: ["_site/**/*.html"],
  safelist: [],
  theme: {
    fontFamily: {
      sans: ["Schibsted Grotesk", "sans-serif"],
    },
    extend: {
      colors: {
        white: "#fffcf2",
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};
