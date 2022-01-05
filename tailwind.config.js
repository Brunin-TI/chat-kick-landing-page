module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: { 50: "#1A237E" },
        button: { border: "#9D9D9D", darkTurquoise: "#2BC0C2" },
      },
    },
  },
  plugins: [],
};
