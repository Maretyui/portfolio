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
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-4 flex justify-between items-center">
        <button
          onClick={() => scrollToSection("home")}
          className="text-lg md:text-xl font-bold tracking-tight hover:text-cyan transition-colors"
        >
          Maik Reinhardt
        </button>
        <div className="hidden md:flex items-center gap-8">
          <button
            onClick={() => scrollToSection("home")}
            className={`text-sm transition-colors flex items-center gap-2 ${
              activeSection === "home"
                ? "text-cyan"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            <FaHome className="w-4 h-4" />
            Home
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className={`text-sm transition-colors flex items-center gap-2 ${
              activeSection === "contact"
                ? "text-cyan"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            <FaEnvelope className="w-4 h-4" />
            Contact
          </button>
          <a
            href="https://discord.com/users/837262476680495104" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm transition-colors flex items-center gap-2 text-muted-foreground hover:text-foreground"
          >
            <FaDiscord className="w-4 h-4" />
            Discord
          </a>



          <button
            onClick={toggleLanguage}
            className="text-sm transition-colors flex items-center gap-2 text-muted-foreground hover:text-foreground"
          >
            <FaGlobe className="w-4 h-4" />
            {language}
          </button>
        </div>
      </div>
    </nav>
  )
}