import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { dummyLoginApiUrl } from "@/src/shared/constants";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      credentials: {},
      async authorize(credentials) {
        const req = await fetch(dummyLoginApiUrl, {
          method: "POST",
          body: JSON.stringify(credentials),
          headers: { "Content-Type": "application/json" },
        });
        const res = await req.json();

        if (req.ok && res) {
          return res;
        }
        return null;
      },
    }),
  ],
});

export { handler as GET, handler as POST };
