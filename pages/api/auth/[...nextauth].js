//Import plugins functions
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "email", type: "email", placeholder: "test@test.com" },
        password: { label: "Password", type: "password" },
      },
      //   async authorize(credentials) {
      //     const res = await fetch(
      //       `${INTERNAL_API_ROUTES.SIGN_IN}`,
      //       {
      //         method: "POST",
      //         body: JSON.stringify({
      //           email: credentials?.email,
      //           password: credentials?.password,
      //         }),
      //         headers: { "Content-Type": "application/json" },
      //       }
      //     );
      //     const user = await res.json();

      //     if (user.error) throw user;

      //     return user;
      //   },
      async authorize(credentials, req) {
        const user = {
          id: "1",
          name: "jonas",
          email: "jjoas@edu.co",
          password: "123456",
        };

        if (user) {
          return user;
        } else {
          return null;
        }
      },
    }),
  ],
  pages: {
    error: "/login"
  },
};

export default NextAuth(authOptions);
