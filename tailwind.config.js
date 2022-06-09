module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      display: ["Darker Grotesque", "sans-serif"],
      body: ["Jost", "sans-serif"]
    },
    container: {
      center: true,
      padding: "2rem"
    },
    extend: {
      animation: {
        "fade-up": "fade-up 300ms linear",
        "fade-left": "fade-left 100ms linear"
      },
      keyframes: {
        "fade-up": {
          from: { opacity: 0, transform: "translateY(30px)" },
          to: { opacity: 1, transform: "translateY(0px)" }
        },
        "fade-left": {
          from: { opacity: 0, transform: "translateX(-100px)" },
          to: { opacity: 1, transform: "translateX(0px)" }
        }
      }
    }
  },
  plugins: []
};
