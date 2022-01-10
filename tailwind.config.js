module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,svg}",
    "./src/components/**/*.{js,ts,jsx,tsx,svg}",
  ],
  theme: {
    extend: {
      colors: {
        primary: { 50: "#1A237E" },
        bluePigment: "#3F2F9D",
        bluePigment50: "#E1DDF5",
        button: {
          border: "#9D9D9D",
          darkTurquoise: "#2BC0C2",
          darkTurquoise50: "#E1F8F8",
          darkTurquoise100: "#2DCCD0",
          Teal: "#00BCD4",
          green100: "#4ADE80",
        },
        background: { 50: " #E8EAF6;" },
      },
      backgroundImage: (theme) => ({
        "home-background": "url('/assets/home-background.svg')",
      }),
    },
  },
  plugins: [],
};
