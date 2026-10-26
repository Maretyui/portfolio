"use client"

import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"

const geist = Geist({ subsets: ["latin"], variable: "--font-geist-sans" })
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono" })

// error.tsx only wraps page.tsx, not the RootLayout itself - a failure
// while rendering app/layout.tsx (e.g. the font loader or the JSON-LD
// script) falls through to Next's bare default error screen instead. This
// is the dedicated boundary for that case, so it has to recreate the
// <html>/<body> shell layout.tsx normally provides, including the "dark"
// class the site's CSS variables depend on since there's no light theme.
export default function GlobalError({
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <html lang="en" className={`dark ${geist.variable} ${geistMono.variable}`}>
      <body className="font-sans antialiased bg-background text-foreground">
        <main className="min-h-screen flex items-center justify-center px-4">
          <div className="max-w-md w-full text-center space-y-6">
            <div role="alert">
              <p className="text-6xl md:text-7xl font-bold text-cyan">Oops</p>
              <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
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
                className="inline-flex items-center justify-center rounded-full bg-foreground text-background px-6 py-3 font-medium transition-all duration-300 hover:bg-cyan focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan"
              >
                Try again
              </button>
              {/* A plain <a>, not next/link's Link - the app router state
                  Link depends on is exactly what may have failed to
                  initialize here, since this boundary only fires when
                  app/layout.tsx itself throws. */}
              <a
                href="/"
                className="inline-flex items-center justify-center rounded-full border border-foreground/30 px-6 py-3 font-medium transition-all duration-300 hover:border-cyan hover:text-cyan focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan"
              >
                Back to homepage
              </a>
            </div>
          </div>
        </main>
      </body>
    </html>
  )
}
