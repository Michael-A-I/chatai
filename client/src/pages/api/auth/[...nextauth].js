import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      profile(profile) {
        console.log(profile.id)
        return {
          iss: profile.iss,
          azp: profile.azp,
          aud: profile.aud,
          id: profile.sub,
          email: profile.email,
          email_verified: profile.email_verified,
          at_hash: profile.at_hash,
          name: profile.name,
          picture: profile.picture,
          given_name: profile.given_name,
          family_name: profile.family_name,
          locale: profile.locale,
          iat: profile.iat,
          exp: profile.exp
        }
      }
    })
  ]
}

export default NextAuth(authOptions)
