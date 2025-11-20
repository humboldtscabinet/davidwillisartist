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
        brand: {
          DEFAULT: "#6366f1",
          dark: "#4f46e5",
        },
        accent: {
          DEFAULT: "#ec4899",
          dark: "#db2777",
        },
        surface: {
          light: "#f9fafb",
          dark: "#111827",
        },
      },
    },
  },
  plugins: [],
};

export default config;
