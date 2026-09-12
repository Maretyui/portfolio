import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "404 – Page Not Found",
  robots: {
    index: false,
    follow: true,
  },
}

// Next.js falls back to its own generic, unstyled 404 page without this
// file - this keeps a mismatched/old link at least visually consistent
// with the rest of the site instead of a blank default.
export default function NotFound() {
  return (
    <main className="min-h-screen bg-background text-foreground flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center space-y-6">
        <p className="text-6xl md:text-7xl font-bold text-cyan">404</p>
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Page Not Found</h1>
        <p className="text-base text-muted-foreground leading-relaxed">
          This page doesn&apos;t exist, or it moved. Head back to the homepage instead.
        </p>
        <Link
          href="/"
          className="inline-flex items-center justify-center rounded-full bg-foreground text-background px-6 py-3 font-medium transition-all duration-300 hover:bg-cyan hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan"
        >
          Back to homepage
        </Link>
      </div>
    </main>
  )
}
