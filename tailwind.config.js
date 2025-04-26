/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'popx-purple': '#6C25FF',
        'popx-light-purple': '#CFC0FF',
        'popx-gray': '#CBCBCB',
      }
    },
  },
  plugins: [],
}



