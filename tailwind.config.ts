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
        background: "hsl(0, 0%, 7%)",
        foreground: "hsl(0, 0%, 98%)",
        card: "hsl(0, 0%, 12%)",
        "card-foreground": "hsl(0, 0%, 98%)",
        primary: "hsl(142, 76%, 36%)",
        "primary-foreground": "hsl(0, 0%, 98%)",
        secondary: "hsl(0, 0%, 20%)",
        muted: "hsl(0, 0%, 25%)",
        accent: "hsl(142, 76%, 36%)",
        border: "hsl(0, 0%, 20%)",
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out",
        "slide-up": "slideUp 0.6s ease-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
