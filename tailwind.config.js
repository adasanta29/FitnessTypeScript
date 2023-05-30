/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "gray-20": "#1e2022",/*"#F8F4EB",*/
        "gray-50": "#EFE6E6",
        "gray-100": "DFCCCC",
        "gray-500": "#001529",
        "primary-100": "#e3e8e8",   /*"#FFE1E0",*/
        "primary-300": "#adb8b8",   /*"#FFA6A3",*/
        "primary-500": "#92a0a0",   /*"#FF6B66",*/
        "secondary-400": "#FFCD58",
        "secondary-500": "#cbcac8",
        "lg-300": "#8a5c26",
        "lg-200": "#af8b49",
        "lg-100": "#e7dc8f",
      },
      backgroundImage: (theme) => ({
        "gradient-yellowred": "linear-gradient(90deg, #FF616A 0%, #FFC837 100%)",
        "mobile-home": "url('./assets/HomePageGraphic.png)",
      }),
      fontFamily: {
        dmsans: ["DM Sans", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      content: {
        evolvetext: "url('./assets/EvolveText.png')",
        abstractwaves: "url('./assets/AbstractWaves.png)",
        sparkles: "url('./assets/Sparkles.png)",
        circles: "url('./assets/Circles.png)",
      }
    },
    screens: {
      xs: "480px",
      sm: "768px",
      md: "1060px",
    }
  },
  plugins: [],
}

/*(135deg, rgba(138,92,38,1) 13%, rgba(175,139,73,1) 74%, rgba(231,220,143,1) 93%) */
