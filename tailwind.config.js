import scrollbar from 'tailwind-scrollbar';
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        customGreen: "#17AB72",
        customBlue: "#05257E",
        lightBlue: "#F1F9FF",
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
      screens: {
        md: "1024px", // You can adjust the value as needed
        xl: "1440px", // You can adjust the value as needed
      },
      scrollbar: {
        // You can customize your scrollbars here
        "scrollbar-thin": {
          width: "8px",
          backgroundColor: "#f5f5f5",
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "#888",
            borderRadius: "10px",
          },
          "&::-webkit-scrollbar-thumb:hover": {
            backgroundColor: "#555",
          },
        },
      },
    },
  },
  plugins: [
    require("tailwind-scrollbar"),
  ],
};
