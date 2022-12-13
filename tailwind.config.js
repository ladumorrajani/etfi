/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      "2xl": { max: "1535px" },
      xl: { max: "1279px" },
      lg: { max: "1023px" },
      md: { max: "767px" },
      sm: { max: "639px" },
    },
    colors: {
      transparent: "transparent",
      black: "#000",
      white: "#fff",
      white1: "#FDFDFD",
      primary: "#262626",
      blue: {
        100: "#14366B",
        200: "#1C4B94",
        300: "#225DB8",
        400: "#3584FF",
        500: "#E6EDFF",
        600: "#F5F8FF",
      },
      gray: {
        100: "#333333",
        200: "#353535",
        300: "#525864",
        400: "#5D6575",
      },
      border: { gray: "#E5E6F4" },
      bg: { default: "#fcfcff", paper: "#FFFFFF" },
    },
    fontFamily: {
      sans: ["Plus Jakarta Sans"],
    },
    fontSize: {
      xs: ["0.75rem", { lineHeight: "1.25rem" }], // 12px
      sm: ["0.875rem", { lineHeight: "1.5rem" }], // 14px
      base: ["1rem", { lineHeight: "1.25rem" }], // 16px
      md: ["1.125rem", { lineHeight: "1.6875rem" }], // 18px
      lg: ["1.25rem", { lineHeight: "1.5625rem" }], // 20px
      xl: ["1.4375rem", { lineHeight: "1.8125rem" }], // 23px
      "display-xs": ["1.75rem", { lineHeight: "2.1875rem" }], // 28px
      "display-sm": ["2.0625rem", { lineHeight: "2.5625rem" }], // 33px
      "display-md": ["2.5rem", { lineHeight: "3.125rem" }], // 40px
      "display-lg": ["3rem", { lineHeight: "3.75rem" }], // 48px
      "display-xl": ["3.625rem", { lineHeight: "4.5625rem" }], // 58px
      "display-2xl": ["3.875rem", { lineHeight: "4.875rem" }], // 62px
    },
    extend: {
      backgroundImage: {
        text: "linear-gradient(90deg, #3584FF 0%, #3584FF 35%,#1C4B94 80%, #1C4B94 100%)",
        btnPrimary:
          "linear-gradient(90deg, #1C4B94 -31.88%, #3584FF -1.09%, #1C4B94 124.47%)",
        btnPrimaryHover:
          "linear-gradient(90deg, #3584FF -31.88%, #1C4B94 -13.09%, #3584FF 124.47%)",
      },
    },
  },
  plugins: [],
};
