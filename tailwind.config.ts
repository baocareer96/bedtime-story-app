import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        night: {
          950: "#16142b",
          900: "#211d3d",
          800: "#30295a"
        },
        cream: {
          50: "#fffaf2",
          100: "#f8edd9",
          200: "#ebdcc0"
        },
        gold: {
          300: "#f3d08a",
          400: "#e7bc63"
        },
        lavender: {
          300: "#c9baf0",
          400: "#b3a0e8"
        }
      },
      boxShadow: {
        story: "0 18px 40px rgba(10, 8, 24, 0.25)"
      },
      fontFamily: {
        display: [
          "\"Avenir Next Rounded\"",
          "\"Nunito\"",
          "\"Trebuchet MS\"",
          "ui-rounded",
          "system-ui",
          "sans-serif"
        ]
      },
      backgroundImage: {
        "night-sky":
          "radial-gradient(circle at top, rgba(201, 186, 240, 0.18), transparent 30%), linear-gradient(180deg, #211d3d 0%, #16142b 100%)"
      }
    }
  },
  plugins: []
};

export default config;
