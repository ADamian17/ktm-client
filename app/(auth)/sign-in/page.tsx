import React from 'react';

import SignInForm from '@/components/SignInForm';
import SignInSignUpWrapper from '@/components/SignInSignUpWrapper';

const SignInPage = () => {
  return (
    <SignInSignUpWrapper
      title="Welcome back to KTM"
      linkInfo={{
        copy: "Don't have an account?",
        text: "Sign up",
        path: "/sign-up"
      }}
    >
      <SignInForm />
    </SignInSignUpWrapper>
  )
}

export default SignInPage
