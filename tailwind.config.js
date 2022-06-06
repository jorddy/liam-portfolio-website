module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}"],
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
      animations: { "fade-up": "fade-up 500ms linear" },
      keyframes: {
        "fade-up": {
          from: { opacity: 0, transform: "translateY(30px)" },
          to: { opacity: 1, transform: "translateY(0px)" }
        }
      }
    }
  },
  plugins: []
};
