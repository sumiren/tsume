'use client'
import React from "react";
import {useSignIn} from "@clerk/nextjs";

export function SignInButton() {
  const { signIn, isLoaded: signInLoaded } = useSignIn()

  const handleSignIn = async () => {
    if (!signInLoaded) return null

    await signIn.authenticateWithRedirect({
      strategy: "oauth_google",
      redirectUrl: "/auth/callback",
      redirectUrlComplete: "/",
    })
  }

  return (
      <button onClick={handleSignIn} className="border border-amber-50 p-2 rounded ">sign in with google</button>
  );
}


