import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./content/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#0e3193",
          hover: "#0849ff",
          dark: "#001d6e",
          light: "#6e94ff",
          subtle: "#f0f4ff",
          surface: "#f8faff",
        },
        navy: "#001d6e",
      },
      fontFamily: {
        headline: ["var(--font-passion-one)", "sans-serif"],
        copy: ["var(--font-source-sans)", "sans-serif"],
      },
      borderRadius: {
        jimdo: "5px",
      },
    },
  },
  plugins: [],
};

export default config;
