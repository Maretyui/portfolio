"use client"

import { useState } from "react"
import Navigation from "@/components/navigation"
import Hero from "@/components/hero"
import Services from "@/components/services"
import About from "@/components/about"
import Skills from "@/components/skills"
import Projects from "@/components/projects"
import Contact from "@/components/contact"

export default function Home() {
  const [activeSection, setActiveSection] = useState("home")

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />
      {/* layout.tsx's "Skip to main content" link targets this id - it needs
          to sit after Navigation, not on <main> itself (which wraps
          Navigation too), otherwise "skipping" the nav lands you right back
          at its own top instead of past it. */}
      <div id="main-content">
        <Hero setActiveSection={setActiveSection} />
        <Services />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </main>
  )
}
