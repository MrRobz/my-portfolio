/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1180px",
    },
    extend: {
      colors: {
        white: "#FFFFFF",
        manatee: "#909AA4",
        black: "#000",
        darkBlue: "#0b233f",
        primary: "#4C35DF",
      },
    },
  },
  plugins: [],
};
