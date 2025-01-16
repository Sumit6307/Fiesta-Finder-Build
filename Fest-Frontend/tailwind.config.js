export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        '404': "url('/src/assets/background404.jpg')",
      },
      // Custom scrollbar styles
      scrollbarWidth: {
        thin: "8px",
        none: "0px",
      },
    },
  },
  plugins: [
    // eslint-disable-next-line no-undef
    require('tailwind-scrollbar'),
  ],
};
