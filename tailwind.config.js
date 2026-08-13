/** @type {import('tailwindcss').Config} */
export default {
  content: ["index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0A0C10",
        panel: "#13161C",
        panel2: "#1A1E26",
        line: "#262B34",
        ivory: "#EDE9E1",
        mist: "#93A0B4",
        gold: {
          50: "#FBF6E7",
          200: "#EFDA9E",
          300: "#E6CA79",
          400: "#DEBB55",
          500: "#D4AF37",
          600: "#B3902A",
          700: "#8F7220",
        },
      },
      fontFamily: {
        display: ["'Space Grotesk'", "sans-serif"],
        sans: ["'Inter'", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
      backgroundImage: {
        "radial-fade":
          "radial-gradient(circle at 50% 0%, rgba(212,175,55,0.10), rgba(10,12,16,0) 55%)",
        "corner-glow":
          "radial-gradient(ellipse at 20% 0%, rgba(90,60,120,0.18), rgba(10,12,16,0) 45%), radial-gradient(ellipse at 85% 15%, rgba(30,60,90,0.16), rgba(10,12,16,0) 40%)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(14px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s ease-out both",
        blink: "blink 1s step-start infinite",
      },
    },
  },
  plugins: [],
};
