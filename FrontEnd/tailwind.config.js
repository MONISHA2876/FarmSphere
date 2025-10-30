/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        farm: {
          dark: "#1B3C2D", // deep forest green
          main: "#2E6049", // rich botanical green
          light: "#A7D7A9", // soft mint green
          lighter: "#D4EED1", // pale leaf tint
        },
        btn: {
          main: "#3B7A57", // fern green
          hover: "#4DAF7C", // lively sap green
          focus: "#7BD389", // fresh lime green
        },
        menu: {
          bg: "#16352F", // dark moss green
        },
      },
    },
  },
  plugins: [],
};
