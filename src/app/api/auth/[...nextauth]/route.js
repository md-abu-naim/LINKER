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

                const user = { email: credentials.email, password: credentials.password }
                // console.log(user)

                axios.post('http://localhost:5000/users/login', user)
                    .then(res => {
                        // console.log(res.data.data);
                        if (res.data.data.insertedId) {
                            elart('Login successfully')
                        }
                    })

                // If no error and we have user data, return it
                if (user) {
                    return user
                }
                // Return null if user data could not be retrieved
                return null
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
            }
            return token
        },
        async session({ session, token }) {
            session.accessToken = token.accessToken
            return session
        }
    }
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }