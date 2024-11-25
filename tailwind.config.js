/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      aspectRatio:{
        '16/9': '7.5/3',
        '0' : '500/3'
      },
    },
  },
  plugins: [[require('@tailwindcss/aspect-ratio')]],
}