import React from "react";

export async function Books() {
  const res = await fetch(`${process.env.API_HOST}`, {
    cache: "no-cache",
  });
  const data = await res.json();
  return <div>
    <section className="mt-16">
      <p className="text-2xl font-bold">
        query duration:
      </p>
      <p className="mt-8 text-xl ml-2">
        {data.tidbQueryDuration}
      </p>
    </section>
    <section className="mt-16">
      <p className="text-2xl font-bold">
        items:
      </p>
      <ul className="mt-8 ml-2">
        {data.books.map((book: any) => <li key={book.id}>・{book.id}</li>)}
      </ul>
    </section>
  </div>

}
