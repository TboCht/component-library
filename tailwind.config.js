/** @type {import('tailwindcss').Config} */
import plugin from "tailwindcss/plugin";

module.exports = {
  important: true,
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "../shared/**/*.{html,js,vue,ts}",
    "!../shared/**/node_modules/**", // Exclusion explicite de node_modules
    "!./node_modules/**",
  ],
  theme: {
    ////////////////////////////////////////////////////////////////////////////  global spacing
    spacing: {
      0: "0rem",
      1: "0.25rem",
      2: "0.5rem" /* 8px */,
      3: "0.75rem" /* 12px */,
      4: "1rem" /* 16px */,
      6: "1.5rem" /* 24px */,
      8: "2rem" /* 32px */,
      10: "2.5rem" /* 40px */,
      12: "3rem" /* 48px */,
      16: "4rem" /* 64px */,
      20: "5rem" /* 80px */,
    },
    ////////////////////////////////////////////////////////////////////////////  border radius
    borderRadius: {
      DEFAULT: "0.25rem" /* 4px */,
      md: "0.375rem" /* 6px */,
      lg: "0.5rem" /* 8px */,
      xl: "0.75rem" /* 12px */,
      xxl: "1rem" /* 16px */,
      full: "9999px",
    },
    ////////////////////////////////////////////////////////////////////////////  font size
    fontSize: {
      xxs: ["0.625rem", { lineHeight: "0.75rem" }],
      xs: ["0.75rem", { lineHeight: "1rem" }] /* 12px - 16px */,
      sm: ["0.875rem", { lineHeight: "1.25rem" }] /* 14px - 20px */,
      base: ["1rem", { lineHeight: "1.5rem" }] /* 16px - 24px */,
      lg: ["1.125rem", { lineHeight: "1.75rem" }] /* 18px - 28px */,
      xl: ["1.250rem", { lineHeight: "2rem" }],
    },
    ////////////////////////////////////////////////////////////////////////////  colors
    colors: ({ colors }) => ({
      inherit: colors.inherit,
      current: colors.current,
      transparent: colors.transparent,
      white: colors.white,
      base: {
        50: "#fafaf9" /* background very soft */,
        100: "#f5f5f4" /* background cards */,
        300: "#d6d3d1" /* borders base */,
        400: "#a8a29e" /* subtitles over white base */,
        500: "#78716c" /* subtitles, captions, misc over bg-100+ */,
        700: "#44403c" /* alternative text / labels etc */,
        900: "#1c1917" /* Main color for text */,
      },
      primary: "#1356E5" /* primary color */,
      secondary: "#1379e5",
      error: "#e61220",
      waiting: "#f97316",
      validated: "#84cc16",
    }),

    ////////////////////////////////////////////////////////////////////////////  default border color
    borderColor: ({ theme }) => ({
      ...theme("colors"),
      DEFAULT: theme("colors.base.300", "currentColor"),
      focus: "#78716c",
    }),

    ////////////////////////////////////////////////////////////////////////////  Gradients
    backgroundImage: {
      hexploGradient: "linear-gradient(to top right,#1A41D1, #0C6BF8)",
      contributionGradient: "linear-gradient(to top right, #335CDF, #2685F7)",
      blackGradient: "linear-gradient(to top, #000000, #333333)",
      blueVerticalGradient: "linear-gradient(to bottom, #1379e5, #fff)",
      backgroundTest:
        "linear-gradient(0deg, rgba(28,25,23,0.8525785765895953) 0%, rgba(28,25,23,0.5872724089635855) 34%, rgba(28,25,23,0.3491771708683473) 57%, rgba(28,25,23,0) 100%)",
      transparentGradient: "linear-gradient(to bottom, transparent, #000000)",
      blackTransparentGradient:
        "linear-gradient(0deg, rgba(0,0,0,1) 50%, rgba(0,0,0,0.7008324430199431) 70%, rgba(0,0,0,0) 100%)",
      test: "linear-gradient(180deg, rgba(28,25,23,0.8025785765895953) 0%, rgba(28,25,23,0.5872724089635855) 40%, rgba(28,25,23,0.3491771708683473) 60%, rgba(28,25,23,0) 100%)",
    },

    ////////////////////////////////////////////////////////////////////////////  Box Shadows
    boxShadow: {
      toolbar: "0 2px 4px -1px rgba(0, 0, 0, 0.1)",
      reverse: "0 -2px 4px -1px rgba(0, 0, 0, 0.1)",
      searchbar:
        "-2px 3px 7px 2px rgba(0,0,0,0.05), 2px -3px 7px 2px rgba(0,0,0,0.05)",
      tictac: "0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)",
      locationBtn:
        "0 1px 3px rgba(0, 0, 0, 0.18), 0 1px 2px rgba(0, 0, 0, 0.12)",
      profilePic: "-10px 13px 22px -8px rgba(0,0,0,0.28)",

      //////// Lewis shadows top-down
      xs: "0px 2px 4px 0px rgba(0, 0, 0, 0.08)",
      sm: "0px 4px 8px 0px rgba(0, 0, 0, 0.12)",
      md: "0px 8px 16px 0px rgba(0, 0, 0, 0.16)",
      lg: "0px 16px 32px 0px rgba(0, 0, 0, 0.20)",
      xl: "0px 32px 64px 0px rgba(0, 0, 0, 0.24)",
      inner: "inset 0 2px 4px 0 rgb(0 0 0 / 0.05)",
      hover: "0px 0px 0px 2px #E7E5E4",
      focus: "0px 0px 0px 2px #D6D3D1",

      ///////// Lewis down-top
      smTop: "0px -4px 8px 0px rgba(0,0,0,0.12)",
    },
    extend: {
      animation: {
        rotation: "rotation 2s linear infinite",
        dash: "dashcircle 1.5s ease-in-out infinite",
        zoomIn: "zoomIn 0.6s ease-in-out",
        fadeIn: "fadeIn 0.4s ease-in-out",
      },
      keyframes: {
        rotation: {
          "100% ": {
            transform: "rotate(360deg)",
          },
        },
        dashcircle: {
          "0%": {
            "stroke-dasharray": "1, 200",
            "stroke-dashoffset": "0",
          },

          "50%": {
            "stroke-dasharray": "90, 200",
            " stroke-dashoffset": "-35px",
          },

          "100%": {
            "stroke-dashoffset": "-125px",
          },
        },
        zoomIn: {
          "0%": { transform: "scale(0)" },
          "60%": { transform: "scale(1.3)" },
          "95%": { transform: "scale(0.9)" },
          "100%": { transform: "scale(1)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ["checked"],
      fill: ["checked"],
      stroke: ["checked"],
    },
  },
  // tailwind.config.js
  plugins: [
    plugin(({ addUtilities }) => {
      addUtilities({
        ".label-lg": {
          "font-size": "1.125rem",
          "font-weight": "600",
          "line-height": "1.5rem",
        },
        ".label-md": {
          "font-size": "1rem",
          "font-weight": "600",
          "line-height": "1.5rem",
        },
        ".label-sm": {
          "font-size": "0.875rem",
          "font-weight": "600",
          "line-height": "1.25rem",
        },
        ".label-xs": {
          "font-size": "0.75rem",
          "font-weight": "600",
          "line-height": "1rem",
        },
      });
    }),
  ],
};
