import Image from "next/image";
import React, {Suspense} from "react";
import {Books} from "@/app/books";

export default async function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>hello</h1>
      <Suspense fallback={<p>Loading feed...</p>}>
        <Books/>
      </Suspense>
    </main>
  );
}


