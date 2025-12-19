import type { Config } from "tailwindcss";
import colors from "./src/theme/colors";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: colors.gold,
        "gold-soft": colors.goldSoft,
        "gold-dim": colors.goldDim,
        ink: colors.ink,
        charcoal: colors.charcoal,
        stone: colors.stone,
        paper: colors.paper,
        mist: colors.mist,
        sand: colors.sand,
        cloud: colors.cloud,
      },
      fontFamily: {
        display: ["var(--font-display)", "Playfair Display", "serif"],
        sans: ["var(--font-sans)", "Manrope", "sans-serif"],
      },
      boxShadow: {
        glow: `0 10px 40px -10px ${colors.goldSoft}`,
        card: `0 14px 40px -14px ${colors.charcoal}`,
      },
    },
  },
  plugins: [],
};

export default config;
