import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",   // Make sure this includes pages directory
    "./app/**/*.{js,ts,jsx,tsx}",     // Include app directory as well
    "./src/**/*.{js,ts,jsx,tsx}",     // In case any components or other files are in src
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)", ...fontFamily.sans],
      },
    },
  },
  plugins: [],
} satisfies Config;

