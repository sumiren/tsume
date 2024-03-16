import React from "react";

export async function Books() {
  const res = await fetch(`${process.env.API_HOST}`, {
    cache: "no-cache",
  });
  return <div>fetching result...{(await res.json()).result}</div>
}
