'use client'
import React from "react";
import {useClerk } from "@clerk/nextjs";

export function CallbackHandler({ searchParams}  : {searchParams:  any}) {
  const { handleRedirectCallback } = useClerk()

  React.useEffect(() => {
    void handleRedirectCallback(searchParams)
  }, [searchParams, handleRedirectCallback])

  return (
    <div
      role="status"
      aria-label="Loading"
      aria-describedby="loading-description"
      className="flex items-center justify-center"
    >
      loading...
    </div>
  )
}


