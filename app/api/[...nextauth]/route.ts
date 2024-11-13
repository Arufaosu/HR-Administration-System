// app/api/auth/[...nextauth]/route.ts

import NextAuth from "next-auth";
import { authOptions } from "@/lib/auth";  // You will define this in the next step

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };

