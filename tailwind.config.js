/**
 * @format
 * @type {import('tailwindcss').Config}
 */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-gray": "rgb(214,222,241)",
        "light-blue": "#F3F6FD",
        "dim-blue": "#E9F0F8",
        blue: "#6682E3",
        "dark-blue": "#A5AFC8",
      },
    },
  },
  plugins: [],
};
