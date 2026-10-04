"use client"

import { useEffect } from "react"

// Next.js falls back to its own generic, unstyled error screen without
// this file - mirrors not-found.tsx so a runtime error stays visually
// consistent with the rest of the site instead of a blank default.
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <main className="min-h-screen bg-background text-foreground flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center space-y-6">
        <p className="text-6xl md:text-7xl font-bold text-cyan">Oops</p>
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Something Went Wrong</h1>
        <p className="text-base text-muted-foreground leading-relaxed">
          An unexpected error occurred. You can try again, or head back to the homepage.
        </p>
        <button
          type="button"
          onClick={() => reset()}
          className="inline-flex items-center justify-center rounded-full bg-foreground text-background px-6 py-3 font-medium transition-all duration-300 hover:bg-cyan hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan"
        >
          Try again
        </button>
      </div>
    </main>
  )
}
