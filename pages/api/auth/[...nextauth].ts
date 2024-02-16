import { NextApiRequest, NextApiResponse } from "next";
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { createUser } from "@/lib/actions/user.actions";

const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
  callbacks: {
    async signIn({ user }: any) {
      const newUser = {
        email: user.email,
        name: user.name,
        dob: new Date(),
        gender: 0,
        photo: user.image,
        career: "carrer",
        married: 0,
        relationship: 0,
        position: "position",
      };
      await createUser(newUser);
      return true;
    },
  },
};

export default NextAuth<NextApiRequest, NextApiResponse>(authOptions);
