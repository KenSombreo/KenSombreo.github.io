import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Backgrounds
        ink: "#080B11",
        panel: "#11151C",
        line: "#22303F",

        // Accent Colors
        olive: "#A3B85C",
        coral: "#FF6B4A",

        // Text
        muted: "#8B98A8",
      },

      fontFamily: {
        sans: [
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Inter",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
      },

      keyframes: {
        fadeInUp: {
          "0%": {
            opacity: "0",
            transform: "translateY(18px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        floatSlow: {
          "0%,100%": {
            transform: "translateY(0)",
          },
          "50%": {
            transform: "translateY(-10px)",
          },
        },
        pulseSoft: {
          "0%,100%": {
            opacity: "0.45",
            transform: "scale(1)",
          },
          "50%": {
            opacity: "1",
            transform: "scale(1.08)",
          },
        },
      },

      animation: {
        "fade-in-up": "fadeInUp 0.7s ease-out both",
        "float-slow": "floatSlow 6s ease-in-out infinite",
        "pulse-soft": "pulseSoft 2.4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;