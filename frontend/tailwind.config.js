/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        brandScript: ["Great Vibes", "cursive"],
        brandSerif: ["Cinzel", "serif"],
      },
    },
  },
  plugins: [],
};
