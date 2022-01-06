module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,svg}",
    "./src/components/**/*.{js,ts,jsx,tsx,svg}",
  ],
  theme: {
    extend: {
      colors: {
        primary: { 50: "#1A237E" },
        background: { bluePigment: "#3F2F9D" },
        button: {
          border: "#9D9D9D",
          darkTurquoise: "#2BC0C2",
          Teal: "#00BCD4",
        },
      },
    },
  },
  plugins: [],
};
