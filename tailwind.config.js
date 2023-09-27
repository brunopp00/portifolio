/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        'tilt-warp': ['Tilt Warp', 'cursive'],
        roboto: ['Roboto', 'sans-serif'],
      },
      backgroundColor: {},
      textColor: {
        default: 'rgb(14 165 233)',
      },
      borderColor: {
        default: 'rgb(14 165 233)',
      },
    },
  },
  plugins: [],
}
