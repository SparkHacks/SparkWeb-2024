/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        poppin: ["Poppins", ...defaultTheme.fontFamily.sans],
        hyperhelix: ["HyperHelix", ...defaultTheme.fontFamily.sans],
      },
      backgroundImage: {
        "stars-pattern": "url('sparkle-65.gif')",
      },
    },
  },
  plugins: [],
};
