/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#FFFFFF",
        brightGray: "#FFFFFF",
        manatee: "#909AA4",
        black: "#000",
        darkBlue: "#0b233f",
      },
    },
  },
  plugins: [],
};
