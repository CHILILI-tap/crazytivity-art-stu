import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#0E0D0C",
          soft: "#171513",
          mute: "#22201D",
        },
        ivory: {
          DEFAULT: "#F6F1E9",
          soft: "#EDE5D7",
          deep: "#E4D9C4",
        },
        terracotta: "#C25E3A",
        gold: "#B8894A",
        burgundy: "#5A1F2B",
      },
      fontFamily: {
        serif: ["var(--font-fraunces)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        widest2: "0.28em",
      },
      maxWidth: {
        editorial: "78rem",
        prose2: "42rem",
      },
    },
  },
  plugins: [],
};

export default config;