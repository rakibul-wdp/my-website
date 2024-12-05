import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        outfit: ["var(--font-outfit)"],
        montserrat: ["var(--font-montserrat)"],
      },
      screens: {
        "627px": "627px",
        "1024px": "1024px",
        "1320px": "1320px",
        "1440px": "1440px",
        "1600px": "1600px",
        "1700px": "1700px",
      },
      backgroundImage: {
        "home-hero-bg-img": "url('/images/hero-bg.png')",
        "holiday-bg-img": "url('/images/holiday.png')",
        "auth-bg-img": "url('/images/auth-bg.png')",
      },
      listStyleImage: {
        checkmark: 'url("/icons/tick.svg")',
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      boxShadow: {
        custom: "0px 4px 14px 0px #00000017",
        IDBtn: "0px 3.17px 7.92px 0px #00000026",
        SearchTour: "0px 4px 24px 0px #00000026",
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        backgroundImage: {
          linear: "linear-gradient(90deg, #F6A23D 0%, #EC5934 100%)",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
          "BG-Color-1": "#E9F6F9",
          "BG-Color-2": "#ECF4F6",
          "BG-Color-3": "#F7F8FA",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "#EA4917",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "#666666",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "#FBDBD1",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
