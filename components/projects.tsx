"use client"

import { useState, useEffect } from "react"

export default function Projects() {
  const colors = [
    "text-cyan",
    "text-lime",
    "text-pink-400",
    "text-purple-400",
    "text-emerald-400",
    "text-orange-400",
    "text-blue-400",
    "text-rose-400",
    "text-teal-400",
  ]

  function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)]
  }

  const projects = [
    {
      title: "Central Egypt Tours",
      year: "2024",
      category: "Tour Provider Site",
      description:
        "A modern tour booking and travel experience platform built for a tourism agency in Egypt.",
      tags: ["Next.js", "Tailwind CSS", "TypeScript"],
      link: "https://centralegypttours.com",
    },
    {
      title: "Swimming Instructor",
      year: "2024",
      category: "Personal Role",
      description:
        "Teaching beginners water confidence, foundational strokes, breathing techniques, and safe swimming habits.",
      tags: ["Coaching", "Beginner Training", "Water Safety"],
      link: "#",
    },
  ]

  const [hoverColors, setHoverColors] = useState<string[]>([])

  useEffect(() => {
    setHoverColors(projects.map(() => getRandomColor()))
  }, [])

  return (
    <section id="projects" className="py-20 md:py-32 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        {}
        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="text-lime">My</span>
            <span className="text-foreground ml-3">Work</span>
          </h2>
          <p className="text-muted-foreground">
            Featured work showcasing design and development expertise.
          </p>
        </div>

        {}
        <div className="space-y-8">
          {projects.map((project, index) => {
            const hoverColor = hoverColors[index] || "text-cyan" 

            return (
              <a
                key={index}
                href={project.link}
                onMouseEnter={() =>
                  setHoverColors((prev) => {
                    const newColors = [...prev]
                    newColors[index] = getRandomColor()
                    return newColors
                  })
                }
                className="group block p-8 border border-border/30 rounded-xl hover:border-cyan/50 hover:bg-card/50 hover:scale-[1.02] transition-all duration-300 ease-out"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 md:gap-12">
                  {}
                  <div className="flex-1 space-y-4">
                    <div className="flex items-center gap-3">
                      <h3 className="text-2xl font-bold text-foreground">
                        {project.title}
                      </h3>
                      <span className="text-xs px-3 py-1 bg-border/30 rounded-full text-muted-foreground">
                        {project.year}
                      </span>
                    </div>

                    <p className={`text-sm font-semibold ${hoverColor}`}>
                      {project.category}
                    </p>

                    <p
                      className={`
                        text-base text-muted-foreground leading-relaxed
                        md:opacity-0 md:translate-y-3
                        md:group-hover:opacity-100 md:group-hover:translate-y-0
                        md:transition-all md:duration-500
                      `}
                    >
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 pt-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs px-3 py-1 bg-border/20 text-muted-foreground rounded-full hover:bg-border/40 transition-colors duration-200"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {}
                  <div className="shrink-0 w-12 h-12 rounded-full bg-cyan/10 flex items-center justify-center group-hover:bg-cyan/20 transition-colors duration-300">
                    <svg
                      className="w-6 h-6 text-cyan group-hover:translate-x-1 group-hover:scale-110 transition-transform duration-300 ease-out"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </div>
                </div>
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}