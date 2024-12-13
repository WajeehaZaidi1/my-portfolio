// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}", // Ensure Tailwind processes your JSX files
  ],
  theme: {
    extend: {
      keyframes: {
        // Slide in from right animation
        slideInFromRight: {
          "0%": { transform: "translateX(25%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        // Spin animation for rotating images
        spin: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        // Move up animation for the cards
        moveUp: {
          "0%": { transform: "translateY(100%)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        // Move down animation for the cards
        moveDown: {
          "0%": { transform: "translateY(-100%)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
      animation: {
        
        // Apply the slide-in animation
        slideInFromRight: "slideInFromRight 1s ease-out forwards",
        // Apply the spin animation (infinite rotation)
        spin: "spin 8s linear infinite", // Adjust the speed (8s) as needed
        // Apply move-up and move-down animations
        moveUp: "moveUp 1s ease-out forwards",
        moveDown: "moveDown 1s ease-out forwards",
      },
    },
  },
  plugins: [],
  variants: {
    extend: {
      scrollBehavior: ["responsive"], // Enable responsive smooth scrolling
    },
  },
};
