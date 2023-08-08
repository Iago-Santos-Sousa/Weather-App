/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,components}"],
  theme: {
    fontFamily: {
      mainFontStyle: ["Ubuntu", "sans-serif"],
    },
    extend: {
      colors: {
        customizeBackground: "#4ace53",
        bodyBackground: "#66D570",
      },
      backgroundImage: {
        myGradient:
          "linear-gradient(rgb(74, 206, 83) 0%, rgb(192, 236, 204) 100%)",
      },
    },
  },
  plugins: [],
};
