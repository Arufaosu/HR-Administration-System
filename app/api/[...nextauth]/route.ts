// app/api/auth/[...nextauth]/route.ts

import NextAuth from "next-auth";
import { authOptions } from "@/lib/auth";  // You will define this in the next step
import CredentialsProvider from "next-auth/providers/credentials";


export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        // Hardcoded username and password check
        if (
          credentials?.username === "hradmin@test.com" &&
          credentials?.password === "TestPass1234"
        ) {
          return { id: 1, name: "HR Admin", email: credentials.username };
        }
        return null; // Invalid credentials
      },
    }),
  ],
  pages: {
    signIn: "/login", // Custom login page
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };

