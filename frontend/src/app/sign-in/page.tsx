import React from "react";
import {currentUser} from "@clerk/nextjs/server";
import {redirect} from "next/navigation";
import {SignInButton} from "@/app/sign-in/sign-in-button";
import {ClerkProvider} from "@clerk/nextjs";

export const runtime = 'edge'

export default async function Home() {
  const user = await currentUser();
  if (user) redirect("/");

  return (
    <main className="flex min-h-screen justify-center items-center">
    <ClerkProvider>
      <SignInButton/>
    </ClerkProvider>
    </main>
  );
}


