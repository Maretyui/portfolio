"use client"

import { useState } from "react"
import { FaHome, FaDiscord, FaGlobe, FaEnvelope } from "react-icons/fa"

interface NavigationProps {
  activeSection: string
  setActiveSection: (section: string) => void
}

export default function Navigation({ activeSection, setActiveSection }: NavigationProps) {
  const [language, setLanguage] = useState<"EN" | "DE">("EN")

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId)
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const toggleLanguage = () => {
    setLanguage(prev => (prev === "EN" ? "DE" : "EN"))
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border/20">
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-4 flex flex-wrap justify-between items-center gap-x-4 gap-y-2">
        <button
          onClick={() => scrollToSection("home")}
          className="text-lg md:text-xl font-bold tracking-tight hover:text-cyan transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan focus-visible:rounded-md"
        >
          Maik Reinhardt
        </button>
        {/* Previously "hidden md:flex" hid every nav link (Contact, Discord,
            language toggle) below the md breakpoint, leaving mobile visitors
            with no way to reach them except manual scrolling. Now visible at
            all sizes; the wrap on the parent lets it drop to its own row on
            narrow screens instead of squeezing next to the name button. */}
        <div className="flex flex-wrap items-center gap-4 md:gap-8">
          <button
            onClick={() => scrollToSection("home")}
            aria-current={activeSection === "home" ? "page" : undefined}
            className={`text-sm transition-colors flex items-center gap-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan focus-visible:rounded-md ${
              activeSection === "home"
                ? "text-cyan"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            <FaHome className="w-4 h-4" aria-hidden="true" />
            Home
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            aria-current={activeSection === "contact" ? "page" : undefined}
            className={`text-sm transition-colors flex items-center gap-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan focus-visible:rounded-md ${
              activeSection === "contact"
                ? "text-cyan"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            <FaEnvelope className="w-4 h-4" aria-hidden="true" />
            Contact
          </button>
          <a
            href="https://discord.com/users/837262476680495104"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Discord (opens in a new tab)"
            className="text-sm transition-colors flex items-center gap-2 text-muted-foreground hover:text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan focus-visible:rounded-md"
          >
            <FaDiscord className="w-4 h-4" aria-hidden="true" />
            Discord
          </a>

          <button
            onClick={toggleLanguage}
            aria-label={language === "EN" ? "Switch language to German" : "Sprache auf Englisch umschalten"}
            className="text-sm transition-colors flex items-center gap-2 text-muted-foreground hover:text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan focus-visible:rounded-md"
          >
            <FaGlobe className="w-4 h-4" aria-hidden="true" />
            {language}
          </button>
        </div>
      </div>
    </nav>
  )
}