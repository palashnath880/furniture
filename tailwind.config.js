/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'Gilroy-Bold': ['Gilroy-Bold', 'sans-serif'],
        'Gilroy-Heavy': ['Gilroy-Heavy', 'sans-serif'],
        'Gilroy-Light': ['Gilroy-Light', 'sans-serif'],
        'Gilroy-Medium': ['Gilroy-Medium', 'sans-serif'],
        'Gilroy-Regular': ['Gilroy-Regular', 'sans-serif'],
        'Rowdies': ['Rowdies', 'sans-serif']
      },
      colors: {
        'secondary': '#E58411',
      }
    },
  },
  plugins: [],
}