/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      keyframes: {
        expand: {
          "0%": {
            transform: "scaleY(0)",
          },
          "50%": {
            transform: "scaleY(0.5)",
          },
          "100%": {
            transform: "scaleY(1)",
          },
        },
        // shrink: {
        //   "0%": {
        //     transform: "scaleY(1)",
        //   },
        //   "50%": {
        //     transform: "scaleY(0.5)",
        //   },
        //   "100%": {
        //     transform: "scaleY(0)",
        //   },
        // },
      },
      animation: {
        expand: "expand 0.3s ease-out",
        // shrink: "shrink 0.3s ease-out forwards",
      },
      colors: {
        // primary: "#3977ff",
        primary: "#035AA6",
        darkPrimary: "#012442",
      },
      fontFamily: {
        sans: ["Source-Sans-3", "sans-serif"],
        display: ["Kdam Thmor Pro", "sans-serif"],
        arabic: ["Changa", "sans-serif"],
      },
      backgroundImage: {
        contact: "url('../src/assets/imgs/contact.jpg')",
        contact1: "url('../src/assets/imgs/contact-1.jpg')",
        contact2: "url('../src/assets/imgs/contact-2.jpg')",
        contact3: "url('../src/assets/imgs/contact-3.jpg')",
      },
    },
  },
  plugins: [],
};
