/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],

  // use below if you need animation package.
  // run this in terminal: npm install -D tailwindcss-animated
  //uncomment below plugins, comment out above plugins
  //There is also a nice configurator for it here: https://www.tailwindcss-animated.com/configurator.html
  // plugins: [require("tailwindcss-animated")],
};
