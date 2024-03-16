import React from "react";
import {auth} from "@clerk/nextjs";

export async function BookList() {
  const { getToken } = auth();
  const res = await fetch(`${process.env.API_HOST}/books`, {
    cache: "no-cache",
    headers: {
      "Authorization": `Bearer ${(await getToken())}`,
    }
  });
  const data = await res.json();

  return <section className="mt-16">
    <p className="text-2xl font-bold">
      items:
    </p>
    <ul className="mt-8 ml-2">
      {data.books.map((book: any) => <li key={book.id}>・{book.name}</li>)}
    </ul>
  </section>
}
