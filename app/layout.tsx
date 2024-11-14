'use client';

import { ReactNode } from 'react';
import { SessionProvider } from 'next-auth/react';
import './globals.css';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>HR Administration System</title>
      </head>
      <body className="bg-gray-100 text-gray-900">
        <SessionProvider>{children}</SessionProvider>
      </body>
    </html>
  );
}

