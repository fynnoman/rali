import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#EAF1FA",
          100: "#CDDCF0",
          200: "#9CB7DF",
          300: "#6B91CE",
          400: "#406DB5",
          500: "#235191",
          600: "#17407A",
          700: "#0F305E",
          800: "#0B2448",
          900: "#081A33",
          950: "#040E1F",
        },
        signal: {
          50: "#F0FDF4",
          100: "#DCFCE7",
          200: "#BBF7D0",
          300: "#86EFAC",
          400: "#4ADE80",
          500: "#22C55E",
          600: "#16A34A",
          700: "#15803D",
          800: "#166534",
          900: "#14532D",
        },
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "ui-monospace", "monospace"],
      },
      letterSpacing: {
        "tighter-2": "-0.035em",
      },
    },
  },
  plugins: [],
};

export default config;
