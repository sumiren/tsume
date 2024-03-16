import Image from "next/image";
import React, {Suspense} from "react";
import {Books} from "@/app/books";

export default async function Home() {

  return (
    <main className="p-24">
      <h1 className="text-3xl">Next.js App Router + Streaming + Partial Prerendering</h1>
      <Suspense fallback={<p className="mt-16 text-xl">fetching on Next.js server side...</p>}>
        <Books/>
      </Suspense>
    </main>
  );
}


