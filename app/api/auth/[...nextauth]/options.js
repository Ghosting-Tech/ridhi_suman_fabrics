import CredentialsProvider from "next-auth/providers/credentials";

import bcrypt from "bcrypt";

import User from "@/model/user";

import dbConnect from "@/config/db";

export const options = {
  pages: {
    newUser: "/test",
    signIn: "/test2",
  },

  providers: [
    CredentialsProvider({
      name: "Credentials",

      // credentials: {
      //   _id: {
      //     label: "_id",
      //     type: "text",
      //   },

      //   phoneNumber: {
      //     label: "phoneNumber",
      //     type: "text",
      //   },

      //   password: {
      //     label: "password",
      //     type: "password",
      //   },
      // },

      async authorize(credentials, req) {
        try {
          await dbConnect();

          const user = await User.findOne({
            phoneNumber: credentials.phoneNumber,
          });

          if (!user) {
            throw new Error("Invalid phone number or password");
          }

          const isMatch = await bcrypt.compare(
            credentials.password,
            user.password
          );

          if (!isMatch) {
            throw new Error("Invalid phone number or password");
          }

          return {
            _id: user._id.toString(),
            name: user.name,
            image: user.image,
            email: user.email,
            phoneNumber: user.phoneNumber,
            role: user.role,
          };
        } catch (error) {
          console.log("Error occurred ", error);

          throw new Error("Invalid phone number or password");
        }
      },
    }),
  ],

  callbacks: {
    // async jwt(token, account) {
    //   console.log("user:" + account);
    //   console.log("token:" + token);
    //   if (user) {
    //     token._id = user._id;
    //     token.phoneNumber = user.phoneNumber;
    //   }

    //   return token;
    // },

    // async session(session, token, user) {
    //   // console.log(session);
    //   console.log(token);
    //   session.user._id = token._id;

    //   return session;
    // },

    async session({ session, token, user }) {
      if (token) {
        session.user._id = token._id;
        session.user.phoneNumber = token.phoneNumber;
        session.user.name = token.name;
        session.user.image = token.image;
        session.user.email = token.email;
        session.user.role = token.role;
      }

      return session;
    },

    async jwt({ token, user }) {
      if (user) {
        token._id = user._id;
        token.name = user.name;
        token.image = user.image;
        token.email = user.email;
        token.phoneNumber = user.phoneNumber;
        token.role = user.role;
      }

      return token;
    },
  },

  session: {
    strategy: "jwt",
  },

  secret: process.env.NEXT_PUBLIC_NEXTAUTH_SECRET,
};

export default options;
