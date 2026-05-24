import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./hooks/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#101010",
        paper: "#F8F9FA",
        "brutal-yellow": "#FFD93D",
        "brutal-red": "#FF6B6B",
        "brutal-green": "#6BCB77",
        "brutal-blue": "#4D96FF",
        "brutal-pink": "#F72585",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "sans-serif"],
        display: ["var(--font-space)", "Space Grotesk", "sans-serif"],
      },
      boxShadow: {
        brutal: "8px 8px 0 #101010",
        "brutal-sm": "4px 4px 0 #101010",
        "brutal-lg": "14px 14px 0 #101010",
        "brutal-dark": "8px 8px 0 #F8F9FA",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        blink: {
          "0%, 48%": { opacity: "1" },
          "49%, 100%": { opacity: "0" },
        },
        scan: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100%)" },
        },
      },
      animation: {
        marquee: "marquee 28s linear infinite",
        blink: "blink 1s steps(1) infinite",
        scan: "scan 7s linear infinite",
      },
    },
  },
  plugins: [tailwindcssAnimate],
};

export default config;
