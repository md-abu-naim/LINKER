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
                name: { label: "Name", type: "text", placeholder: "Jhon doe" },
                email: { label: "Email", type: "text", placeholder: "example@gmail.com" },
                password: { label: "Password", type: "password" }
            },

            async authorize(credentials, req) {

                try {
                    const res = await axios.post(`${process.env.NEXT_PUBLIC_API}/users/login`, { email: credentials.email, password: credentials.password })
                    const data = res.data

                    if (!data || !data.token) {
                        return null;
                    }

                    return {
                        id: data.user.id,
                        name: data.user.name,
                        email: data.user.email,
                        token: data.token
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
    jwt: {
        secret: process.env.NEXTAUTH_SECRET
    },
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.email = user.email
                token.id = user.id
                token.accessToken = user.token 
            }
            return token
        },
        async session({ session, token }) {
            session.user.email = token.email
            session.user.id = token.id
            session.accessToken = token.accessToken
            return session
        }
    }
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }