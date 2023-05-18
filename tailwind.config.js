/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    minHeight: {
      '1/2': '350px',
      '1/4': '100px',
    },
    extend: {},
  },
  plugins: [],
}