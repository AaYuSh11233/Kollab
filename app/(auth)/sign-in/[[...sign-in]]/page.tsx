import { SignedIn, SignedOut, SignIn } from '@clerk/nextjs'

const SignInPage = () => {
  return (
    <main className="auth-page">
      <SignedIn>
        <p>You are already signed in.</p>
      </SignedIn>
      <SignedOut>
        <SignIn path="/sign-in" routing="path" />
      </SignedOut>
    </main>
  )
}

export default SignInPage