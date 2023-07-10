import GoogleButton from "react-google-button"

import { signIn, useSession } from "next-auth/react"
import { useRouter } from "next/navigation"

const LoginPage = () => {
  const { data: session, status } = useSession()
  const router = useRouter()

  const handleGoogleLogin = () => {
    signIn("google")
  }

  if (status === "loading") {
    return <div>Loading...</div>
  }

  if (status === "authenticated") {
    return router.push("/")
  }

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white p-8 shadow-md rounded-md">
        {status === "authenticated" ? <h1 className="text-2xl font-semibold mb-4">Logged In</h1> : <h1 className="text-2xl font-semibold mb-4">Not Login</h1>}
        <GoogleButton onClick={handleGoogleLogin} />
      </div>
    </div>
  )
}

export default LoginPage
