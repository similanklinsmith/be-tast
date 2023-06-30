/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  content: [],
  theme: {
    extend: {
      boxShadow: {
        1: "0px 4px 52px 0px rgba(0, 0, 0, 0.25)",
        2: "0px 4px 20px 0px rgba(0, 0, 0, 0.05)",
        3: "0px 4px 8px 0px rgba(0, 0, 0, 0.01)",
        4: "8px 3px 22px 10px rgba(150, 150, 150, 0.11)",
      },
    },
    colors: {
      blue: "#2150DE",
      "blue-botnoi": "#55BBF4",
      "blue-light": "#EDF1FC",
      "blue-navy": "#16447F",
      grey: "#B3B3B3",
      "grey-light": "#FAFAFA",
      "grey-dark": "#666666",
      black: "#000000",
      "black-light": "#34363F",
      white: "#FFFFFF",
      red: "#F53D7A",
      green: "#34B53A",
    },
    fontFamily: {
      sans: ["DM Sans", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },
  },
  plugins: [],
};
