import NextAuth, { type AuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import bcrypt from 'bcrypt'
import User from '@/models/User'
import { connectToDB } from '@/lib/moongoose'


// ✅ Typed AuthOptions with correct session strategy
export const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'email', placeholder: 'you@example.com' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        await connectToDB()

        // ✅ Validate credentials
        if (!credentials?.email || !credentials?.password) {
          throw new Error('Email and password are required')
        }

        // ✅ Find user by email
        const user = await User.findOne({ email: credentials.email })
        if (!user) {
          throw new Error('No user found with this email')
        }

        // ✅ Compare password
        const isValidPassword = await bcrypt.compare(
          credentials.password,
          user.password
        )

        if (!isValidPassword) {
          throw new Error('Incorrect password')
        }

        // ✅ Return a user object
        return {
          id: user._id.toString(),
          name: user.name,
          email: user.email,
        }
      },
    }),
  ],
  session: {
    strategy: 'jwt', // Correctly typed
  },
  pages: {
    signIn: '/login', // Optional custom login page
  },
  secret: process.env.NEXTAUTH_SECRET,
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
