/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      maxWidth: {
        '4/5': '80%',
      },
      minWidth: {
        '4/6': '66.666667%',
      },
      spacing: {
        '1/10': '10%',
        '9/10': '90%',
        '1/20': '5%',
        '19/20': '95%',
      },
    },
  },
  plugins: [],
}

