// app/layout.tsx

import { ReactNode } from "react";
import "./globals.css"; // Your global CSS (if any, e.g., Tailwind)

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>HR Administration System</title>
        {/* Add any other meta tags or links here */}
      </head>
      <body className="bg-gray-100 text-gray-900">
        {/* The content of the page will be injected here */}
        {children}
      </body>
    </html>
  );
}

