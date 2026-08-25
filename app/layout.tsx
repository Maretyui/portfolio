import type React from "react"
import type { Metadata, Viewport } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

const SITE_TITLE = "Maretyui | Maik Reinhardt"
const SITE_DESCRIPTION =
  "Portfolio website of Maik Reinhardt, showcasing projects and skills in web development and design as well as swimming and diving."

export const metadata: Metadata = {
  metadataBase: new URL("https://maretyui.com"),
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  keywords: [
    "Maik Reinhardt",
    "Maretyui",
    "Web Design",
    "Web Development",
    "Next.js",
    "Portfolio",
    "Hamburg",
    "Swimming Instructor",
  ],
  icons: {
    icon: "/favicon.ico",
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    url: "/",
    siteName: "Maretyui",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
  },
  formatDetection: {
    telephone: false,
  },
}

// The site only ever renders in dark mode (see the "dark" class on <html>
// below), so a single theme-color is enough - no need for a
// prefers-color-scheme media pair.
export const viewport: Viewport = {
  themeColor: "#08080a",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`font-sans antialiased`}>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-md focus:bg-background focus:px-4 focus:py-2 focus:text-foreground focus:outline focus:outline-2 focus:outline-cyan"
        >
          Skip to main content
        </a>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
