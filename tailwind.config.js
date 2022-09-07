/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {
      // adding our theme colors
      colors: {
        "weather-primary": "#00668A",
        "weather-secondary": "#004E71"
      }
    },
    // adding font family
    fontFamily: {
      Roboto: ["Roboto, sans-serif"]
    },
    // customizing the container class
    container: {
      padding: "2rem",
      center: true, // like margin auto
    },
    // breakpoints customization
    screens: {
      sm: "640px",
      md: "768px",
    }
  },
  plugins: [],
}
