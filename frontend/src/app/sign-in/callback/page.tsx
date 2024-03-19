import React from "react";
import {currentUser } from "@clerk/nextjs/server";
import {CallbackHandler} from "@/app/sign-in/callback/callback-handler";
import {redirect} from "next/navigation";

export const runtime = 'edge'


export default async function Home(searchParams : any) {

  const user = await currentUser();
  if (user) redirect("/");

  return (
    <CallbackHandler searchParams={searchParams}/>
  )
}
