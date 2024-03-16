import React, {Suspense} from "react";
import {BookList} from "@/app/book-list";

export const runtime = 'edge'

export default async function Home() {
  return (
    <main className="p-24">
      <section className="mt-16">
        <p className="text-2xl font-bold">
          your books:
        </p>
      </section>
      <Suspense fallback={<p className="mt-16 text-xl">fetching on Next.js server side...</p>}>
        <BookList/>
      </Suspense>
    </main>
  );
}


