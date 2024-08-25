module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        nunito: ["Nunito", "sans-serif"],
        lora: ["Lora", "serif"],
      },
      fontWeight: {
        light: 300,
        normal: 400,
        bold: 600,
      },
      keyframes: {
        blink: {
          "0%, 100%": { opacity: 1 },
          "50%": { opacity: 0 },
        },
      },
      animation: {
        cursor: "blink 1s step-end infinite",
      },
    },
  },
  plugins: [],
};
