/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        cream: "#FFFDF3",
        ink: "#202020",
        charcoal: "#252525",
        accent: "#FFD84D",
        accent2: "#F6D34B",
        muted: "#777777",
      },
      fontFamily: {
        display: ["Archivo Black", "Impact", "sans-serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      keyframes: {
        blink: { "0%,100%": { opacity: 1 }, "50%": { opacity: 0 } },
        floaty: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
      },
      animation: {
        blink: "blink 1s step-end infinite",
        floaty: "floaty 4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
