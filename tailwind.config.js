/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        orange: "#FFC979",
        lightbrown: "#D68F54",
        brown: "#853605",
      },
      zIndex: {
        ...Array.from({ length: 101 }, (_, i) => i).reduce((acc, cur) => {
          acc[cur] = cur;
          return acc;
        }, {}),
      },
    },
  },
  plugins: [],
}

