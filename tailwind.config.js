/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#00ffff",      // Cyan-like primary color
        dark: "#0a0a0a",         // Dark black/gray
      },
      boxShadow: {
        neon: "0 0 15px #00ffff88",  // A soft glowing neon cyan shadow
      },
      transitionDuration: {
        fast: "200ms",           // Custom duration (optional but fine)
      },
    },
  },
  plugins: [],
}
