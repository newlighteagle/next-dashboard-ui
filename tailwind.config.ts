import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        // Primary Colors
        wriPrimaryGold: "#F0AB00",
        wriPrimaryBlack: "#000000",
        wriPrimaryGray: "#9B9B9B",
        // Secondary Colors
        wriSecondaryBlue: "#3855A3",
        wriSecondaryCyan: "#0096A4",
        wriSecondaryGreen: "#32864B",
        wriSecondaryOrange: "#EB8026",
        wriSecondaryPink: "#EE3161",
        wriSecondaryMagenta: "#9B216C",
        wriSecondaryRed: "#8A1A25",
        // Tertiary Colors
        wriTertiaryGreen: "#81C67B",
        wriTertiaryBlue: "#7EBCC6",
        wriTertiaryCream: "#FBE7C5",
        wriTertiaryGray: "#E7E6E6",
      },
    },
  },
  plugins: [],
};
export default config;

// WRI Colors
// Primary
// #F0AB00
// Secondary
