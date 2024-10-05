const flowbite = require("flowbite-react/tailwind");
/** @type {import('tailwindcss').Config} */
const withMT = require("flowbite-react/tailwind");

// module.exports = withMT({
//   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", flowbite.content()],
//   theme: {
//     extend: {},
//   },
//   plugins: [flowbite.plugin()],
// });

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", flowbite.content()],
  theme: {
    extend: {},
  },
  plugins: [flowbite.plugin(), withMT.plugin()],
};
