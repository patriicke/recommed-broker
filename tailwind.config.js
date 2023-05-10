/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'geomanistBold': ['geomanistBold', 'sans-serif'],
        'geomanistMedium': ['geomanistMedium', 'sans-serif'],
        'geomanistRegular': ['geomanistregular', 'sans-serif'],
      },
      colors: {
        "secondary-50": "#60c328",
        "secondary-100": "#60c328",
        "secondary-500": "#60c328",
        "primary-200": "#60c328",
        "primary-400": "#60c328",
        "primary-500": "#60c328",
        "success-500": "rgb(79, 255, 138)",
        "yellow-color": "#60c328",
        "blue-color": "#60c328",
        "secondary-400": "#60c328"
      },
      fontSize: {
        xs: "0.75rem",
        sm: "0.8rem",
        base: "1rem",
        xl: "1.25rem",
        "2xl": "1.563rem",
        "3xl": "1.953rem",
        "4xl": "2.441rem",
        "5xl": "3.052rem"
      }
    }
  },
  plugins: []
};
