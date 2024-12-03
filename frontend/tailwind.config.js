/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        themeBg: "#161616",
        themeWhite: "rgba(255, 255, 255, 0.82)", // White with 82% opacity
        themeBlue: "#0E3BC8",
      },
    },
  },
  plugins: [],
}

