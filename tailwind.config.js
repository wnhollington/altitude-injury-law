const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{html,js,jsx,ts,tsx,mdx}",
    "./src/components/**/*.{html,js,jsx,ts,tsx,mdx}",
    "./src/content/**/*.{html,js,jsx,ts,tsx,mdx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
    },
    extend: {
      backgroundImage: {
        'hero': "url('../images/homepage-hero-background-img.jpg')",
        'profile': "url('../images/neal.png')"
      },
      colors: {
        primary: "#6E0A05",
        secondary: "#055b6e"
      },
    },
  },
  plugins: [
    require('./node_modules/flowbite/plugin'),
    'gatsby-plugin-postcss',
  ],
}
