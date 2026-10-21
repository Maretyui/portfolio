"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"

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
  const headingRef = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    console.error(error)
    // Unlike not-found.tsx, this boundary swaps in without a route change
    // or title update, so there's no normal cue for assistive tech that
    // something happened - move focus to the heading so it gets announced.
    headingRef.current?.focus()
  }, [error])

  return (
    <main className="min-h-screen bg-background text-foreground flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center space-y-6">
        <div role="alert">
          <p className="text-6xl md:text-7xl font-bold text-cyan">Oops</p>
          <h1
            ref={headingRef}
            tabIndex={-1}
            className="text-3xl md:text-4xl font-bold tracking-tight outline-none"
          >
            Something Went Wrong
          </h1>
        </div>
        <p className="text-base text-muted-foreground leading-relaxed">
          An unexpected error occurred. You can try again, or head back to the homepage.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            type="button"
            onClick={() => reset()}
            className="inline-flex items-center justify-center rounded-full bg-foreground text-background px-6 py-3 font-medium transition-all duration-300 hover:bg-cyan hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan"
          >
            Try again
          </button>
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-full border border-foreground/30 px-6 py-3 font-medium transition-all duration-300 hover:border-cyan hover:text-cyan focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan"
          >
            Back to homepage
          </Link>
        </div>
      </div>
    </main>
  )
}
