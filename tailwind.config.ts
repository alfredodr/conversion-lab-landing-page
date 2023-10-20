import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        sm: "480px",
        md: "768px",
        lg: "976px",
        xl: "1440px",
      },
      fontFamily: {
        dmSans: ["var(--font-dmSans)"],
        dmSerifText: ["var(--font-dmSerifText)"],
        kalam: ["var(--font-kalam)"],
        gravitasOne: ["var(--font-gravitasOne)"],
        roboto: ["var(--font-roboto)"],
      },
    },
  },
  plugins: [],
};
export default config;
