import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#22566E",
        secondary: "#E9EFF1",
        textDark: "#303030",
        textLight: "#A2A2A2",
        border: "#E9EDF4",
        background: "#FFFFFF",
      },
    },
  },
  plugins: [],
};
export default config;
