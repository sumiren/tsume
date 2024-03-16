import React, {Suspense} from "react";
import {ArchitectureTest} from "@/app/architecture-test/architecture-test";

export const runtime = 'edge'

export default async function Home() {
  return (
    <main className="p-24 min-h-screen block">
      <h1 className="text-3xl">Next.js App Router + Streaming + Partial Prerendering</h1>
      <Suspense fallback={<p className="mt-16 text-xl">fetching on Next.js server side...</p>}>
        <ArchitectureTest/>
      </Suspense>
    </main>
  );
}


