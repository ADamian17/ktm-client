import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { authConfig } from "./auth.config";
import { SignInUserDocument } from "@/__generated__/graphql";
import { executeApiReq } from "./utils/executeApiReq";

export const { handlers, signIn, signOut, auth } = NextAuth({
  session: { strategy: "jwt" },
  ...authConfig,
  providers: [
    Credentials({
      async authorize(credentials) {
        const { email, password } = credentials as Record<
          "email" | "password",
          string
        >;
        const data = await executeApiReq(SignInUserDocument, {
          email,
          password,
        });

        if (!data?.signInUser?.user && !data?.signInUser?.token) return null;

        return {
          id: data?.signInUser?.user?.id,
          signedJwt: data?.signInUser?.token,
        };
      },
    }),
  ],
});
