/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        emerald: {
          accent: "var(--primary-accent)",
        },
        blue: {
          accent: "var(--secondary-accent)",
        },
      },
      fontFamily: {
        outfit: ["var(--font-family)"],
      },
    },
  },
  plugins: [],
};
