"use client"

import { useEffect, useState } from "react"
import Navigation from "@/components/navigation"
import Hero from "@/components/hero"
import Services from "@/components/services"
import About from "@/components/about"
import Skills from "@/components/skills"
import Projects from "@/components/projects"
import Contact from "@/components/contact"

// The only two ids Navigation actually highlights via aria-current - "about",
// "skills" etc. have no nav link to mark active, so there's nothing to
// observe for them.
const NAV_SECTION_IDS = ["home", "contact"]

export default function Home() {
  const [activeSection, setActiveSection] = useState("home")

  // activeSection previously only changed when a nav link was clicked, so
  // scrolling there manually (trackpad, keyboard, browser search) left the
  // old link highlighted as "active" even after the real section had long
  // scrolled past. This keeps it in sync with whichever of those two
  // sections is actually most visible, regardless of how the user got there.
  useEffect(() => {
    const sections = NAV_SECTION_IDS
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null)

    if (sections.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        const mostVisible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (mostVisible) setActiveSection(mostVisible.target.id)
      },
      { threshold: 0.5 }
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

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
