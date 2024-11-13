/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',  // For App Router
    './pages/**/*.{js,ts,jsx,tsx}', // For Pages Router (if you're using it)
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

