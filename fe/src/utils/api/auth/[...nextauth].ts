import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'

import CredentialsProvider from 'next-auth/providers/credentials'
import http from 'src/utils/api/api'

type Credential = {
  email: string
  password: string
}

export const postSigninUser = (data: Credential) => {
  // TODO:
  return http.post<Credential>('/login', data)
}

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'email', type: 'text' },
        password: { label: 'password', type: 'text' },
      },
      authorize: async (credentials, req) => {
        console.log('authorize動いている')
        const postData = {
          email: credentials?.email ?? '',
          password: credentials?.password ?? '',
        }
        const res = await postSigninUser(postData)
        console.log('res.data:', res.data)

        return res.data
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user, account }) {
      // 最初のサインイン
      if (account && user) {
        return {
          ...token,
          accessToken: user.token,
          refreshToken: user.refreshToken,
        }
      }

      return token
    },
    async session({ session, token }) {
      session.accessToken = token.accessToken
      session.refreshToken = token.refreshToken
      session.accessTokenExpires = token.accessTokenExpires

      return session
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: '/login',
    signOut: '/login',
  },
  debug: process.env.NODE_ENV === 'development',
})
