import React from 'react';
import SignInSignUpWrapper from '@/components/SignInSignUpWrapper';

const SignInPage = () => {
  return (
    <SignInSignUpWrapper
      title="Get Started with KTM"
      linkInfo={{
        copy: "Have an account?",
        text: "Sign in",
        path: "/sign-in",
      }}
    >
      Sign Up Form
    </SignInSignUpWrapper>
  )
}

export default SignInPage
