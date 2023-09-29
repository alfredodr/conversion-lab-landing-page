import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        dmSans: ["var(--font-dmSans)"],
        dmSerifText: ["var(--font-dmSerifText)"],
        kalam: ["var(--font-kalam)"],
        gravitasOne: ["var(--font-gravitasOne)"],
      },
    },
  },
  plugins: [],
};
export default config;
