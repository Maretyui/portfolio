import type React from "react"
import type { Metadata, Viewport } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const geist = Geist({ subsets: ["latin"], variable: "--font-geist-sans" })
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono" })

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
  // Contact info (mailto/tel links, "Hamburg, Germany") is already presented
  // deliberately in contact.tsx - disable auto-detection across the board so
  // mobile browsers don't independently reformat/relink plain text elsewhere
  // on the page, not just phone numbers.
  formatDetection: {
    telephone: false,
    email: false,
    address: false,
  },
}

// The site only ever renders in dark mode (see the "dark" class on <html>
// below), so a single theme-color is enough - no need for a
// prefers-color-scheme media pair. colorScheme tells the browser itself the
// page is dark-only, so native UI it renders (scrollbars, form controls,
// the pull-to-refresh spinner on mobile) matches instead of defaulting to
// light chrome around a dark page.
export const viewport: Viewport = {
  themeColor: "#08080a",
  colorScheme: "dark",
}

// Lets search engines render Maik as a known entity (e.g. a knowledge-panel-
// style result) instead of just an unstructured page of text.
const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Maik Reinhardt",
  alternateName: "Maretyui",
  url: "https://maretyui.com",
  jobTitle: ["Web Designer", "Web Developer", "Swimming Instructor"],
  sameAs: ["https://github.com/maretyui", "https://discord.com/users/837262476680495104"],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`dark ${geist.variable} ${geistMono.variable}`}>
      <body className={`font-sans antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
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
