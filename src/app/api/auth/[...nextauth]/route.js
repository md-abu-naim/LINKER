import axios from "axios"
import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

export const authOptions = {
    // Configure one or more authentication providers
    providers: [
        CredentialsProvider({
            // The name to display on the sign in form (e.g. 'Sign in with...')
            name: 'Credentials',

            credentials: {
                email: { label: "Email", type: "text", placeholder: "name@example.com" },
                password: { label: "Password", type: "password" }
            },

            async authorize(credentials, req) {

                try {
                    const res = await axios.post('https://linkerbd-server.vercel.app/users/login', { email: credentials.email, password: credentials.password })
                    const data = res.data

                    if (!data || !data.token) {
                        return null;
                    }

                    return {
                        id: data.user.id,
                        email: data.user.email,
                        token: data.user.token
                    }
                }
                catch (error) {
                    return null;
                }
            }

        })
    ],
    pages: {
        signIn: '/login',
        signOut: '/login',
    },
    session: {
        strategy: "jwt",
    },
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.accessToken = user.token
                token.id = user.id
            }
            return token
        },
        async session({ session, token }) {
            session.accessToken = token.accessToken
            session.user.id = token.id
            return session
        }
    }
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }