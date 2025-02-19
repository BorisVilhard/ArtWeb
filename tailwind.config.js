/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        "roboto-slub": ["Roboto Slab", "sans-serif"],
      },
    },
  },
  plugins: [],
};
