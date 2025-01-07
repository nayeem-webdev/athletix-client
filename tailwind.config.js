/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#FF9D45",
        accent: "#356498",
      },
      fontFamily: {
        quick: "Quicksand",
        roboto: "Roboto Condensed",
      },
    },
  },
  plugins: [],
};
