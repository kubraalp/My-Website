/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customPink: "#E92577",
        customBlue: "#DDEEFE",
        customGreen: "#D9F6F1",
        customBlack: "#0A0A14",
      },
      fontFamily: {
        sans: ["Inter,  sans-serif"],
      },
    },
  },
  plugins: [],
};
