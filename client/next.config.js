/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    NEXTAUTH_URL:"https://example.com",
    GOOGLEAUTH_URL_DEV:"https://doclearningtoolai.com/api/auth/callback/google",
    GOOGLEAUTH_URL_PROD:"http://localhost:3000/api/auth/callback/google",
    GOOGLE_CLIENT_ID:"992578644844-rgcicntaj33mf8bn9m6eoq2ilel7p8a7.apps.googleusercontent.com",
    GOOGLE_CLIENT_SECRET:"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"
  }
}

module.exports = nextConfig
