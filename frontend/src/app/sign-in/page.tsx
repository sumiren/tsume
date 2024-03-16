import React from "react";
import {currentUser} from "@clerk/nextjs";
import {redirect} from "next/navigation";
import {SignInButton} from "@/app/sign-in/sign-in-button";

export const runtime = 'edge'

export default async function Home() {
  const user = await currentUser();
  if (user) redirect("/");

  return (
    <main className="flex min-h-screen justify-center items-center">
      <SignInButton/>
    </main>
  );
}

