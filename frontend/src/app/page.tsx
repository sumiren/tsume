import React from "react";
import {auth} from "@clerk/nextjs";

export const runtime = 'edge'

export default async function Home() {
  const { getToken, userId } = auth();
  console.log("userId:", userId);
  const res = await fetch(`${process.env.API_HOST}`, {
    cache: "no-cache",
    headers: {
      "Authorization": `Bearer ${(await getToken())}`,
    }
  });
  return (
    <main className="p-24">
      app
    </main>
  );
}


