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
        gitHubBlue: "#1769FF",
        linkedinBlue: "#0077B5",
        emailPink: "#AF0C48",
        darkBackGround1: "#2A262B",
        darkBackGround2: "#484148",
        customGray: "#D9D9D9",
        profileback: "#525252",
        project1Back: "#2D3235",
        project2Back: "#495351",
      },
      fontFamily: {
        sans: ["Inter,  sans-serif"],
        playfair: ['"Playfair Display"', "serif"],
      },
      width: {
        458: "320px",
      },
      height: {
        263: "200px",
      },
    
    },
  },
  plugins: [],
};
