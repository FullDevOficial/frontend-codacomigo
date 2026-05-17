'use client'

import { signIn } from 'next-auth/react'

export function SignInWithGithub() {
  const handleSignIn = () => {
    signIn("github")
  }
  return (
    <button className="p-4 rounded border border-gray-100 cursor-pointer" onClick={handleSignIn}>Sign In With Github</button>
  )
}