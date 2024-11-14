// next.config.js
import "./src/env.js";

/** @type {import("next").NextConfig} */
const config = {
  reactStrictMode: true,  // Enabling React Strict Mode

  // Set up output configuration for compatibility
  output: 'standalone',

  // Custom rewrites if needed
  async rewrites() {
    return [
      {
        source: '/login',
        destination: '/auth/signin',  // Redirect login to the next-auth sign-in page if applicable
      },
    ];
  },
  
  env: {
    NEXTAUTH_URL: process.env.NEXTAUTH_URL || "http://localhost:3000",
    NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET || "your-secret-here",
  },
};

export default config;

