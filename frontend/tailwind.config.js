/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        themeBlue: "#1F95ED",
        themeDBlue: "#0E3AC8",
      },
    },
  },
  plugins: [],
}

