import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials"

/**
 * Basic setup from next-auth docs.
 */
export default NextAuth({
  providers: [
    CredentialsProvider({
        name: 'Custom Provider',
        credentials: {
            username: {
                label: 'Email',
                type: 'text',
                placeholder: 'email@domain.com'
            },
            password: {
                label: 'Password',
                type: 'password'
            }
        },
        async authorize(credentials, req) {
            const res = await fetch('localhost:5000/api/users/login', {
                method: 'POST',
                body: JSON.stringify(credentials),
                headers: { "Content-Type": "application/json" }
            })
            const user = await res.json()

            // If no error and user data is filled out, return it
            if(res.ok && user) {
                return user
            }

            // Return null if user data not retrieved
            return null
        }
    })
  ],
  jwt: {
      secret: process.env.JWT_SECRET,
      encryption: true
  },
  secret: process.env.JWT_SECRET,
  callbacks: {
      jwt({ token, user, account }) {
        if(user) {
            token.id = user.id
        }

        return token
      },

      session({ session, token }) {
          if(token) {
              session.id = token.id
          }

          return session
      }
  }
});
