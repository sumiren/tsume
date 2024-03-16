import Image from "next/image";
import React, {Suspense} from "react";

export const revalidate = 0;

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

async function Books() {
  const res = await fetch(`${process.env.API_HOST}`);
  return <div>fetching result...{(await res.json()).result}</div>
}
