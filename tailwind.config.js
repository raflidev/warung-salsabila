/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        sans: ['poppins', 'sans-serif'],
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}

