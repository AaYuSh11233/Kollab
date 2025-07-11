import { SignedIn, SignedOut, SignUp } from '@clerk/nextjs'

const SignUpPage = () => {
  return (
    <main className="auth-page">
      <SignedIn>
        <p>You are already signed in.</p>
      </SignedIn>
      <SignedOut>
        <SignUp path="/sign-up" routing="path" />
      </SignedOut>
    </main>
  )
}

export default SignUpPage