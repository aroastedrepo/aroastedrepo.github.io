module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        nunito: ["Nunito", "sans-serif"],
        lora: ["Lora", "serif"],
        pixel: ['"Press Start 2P"', "monospace"],
      },
      colors: {
        vv: {
          space: "#0b0e25",
          panel: "#161935",
          card: "#1b1f4e",
          line: "#253e5c",
          cyan: "#61d2fa",
          link: "#0b7ea8",
          green: "#70e050",
          orange: "#e07040",
        },
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
