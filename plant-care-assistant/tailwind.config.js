/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}", // Point Tailwind to your files
  ],
  theme: {
    extend: {
      colors: {
        primary: "#4CAF50",
        secondary: "#FF5722",
      },
      fontFamily: {
        sans: ['"Open Sans"', 'Arial', 'sans-serif'],
      },
      spacing: {
        128: "32rem",  // Custom spacing unit (for example, 32rem)
      },
    },
  },
  plugins: [],
}

