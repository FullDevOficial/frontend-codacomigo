'use client';

import { signIn } from 'next-auth/react';

export function SignInWithGithub() {
  const handleSignIn = () => {
    signIn('github');
  };
  return (
    <button className="cursor-pointer rounded border border-gray-100 p-4" onClick={handleSignIn}>
      Sign In With Github
    </button>
  );
}
