"use client"

import { useState } from "react"

export default function Skills() {
  const skills = [
    {
      category: "Design",
      color: "text-purple",
      glow: "",
      items: ["UI/UX Design", "Typography", "PowerPoint", "Responsive Design", "Draw.io"],
    },
    {
      category: "Development",
      color: "text-cyan",
      glow: "",
      items: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Web APIs"],
    },
    {
      category: "Coaching",
      color: "text-yellow",
      glow: "",
      items: ["Freestyle Technique", "Water Safety", "Stroke Training", "Diving Basics", "Endurance Building"],
    },
  ]

  return (
    <section id="skills" className="py-20 md:py-32 px-4 md:px-8 bg-card/30">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="text-yellow">Tech</span>
            <span className="text-foreground ml-3">Stack</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl">
            My expertise spans across design, development, and coaching—enabling me to deliver comprehensive solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((skill) => (
            <div
              key={skill.category}
              className="relative p-8 border border-border/30 rounded-xl transition-all overflow-hidden group"
            >


              <h3 className={`text-2xl font-bold mb-6 transition-colors ${skill.color} group-hover:text-foreground`}>
                {skill.category}
              </h3>
              <ul className="space-y-3">
                {skill.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 text-muted-foreground transition-colors group-hover:text-foreground"
                  >
                    <span className={`text-lg transition-colors ${skill.color} group-hover:text-foreground`}>→</span>
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
