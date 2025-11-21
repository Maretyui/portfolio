"use client"

import { FaSwimmer, FaPaintBrush, FaCode, FaDraftingCompass } from "react-icons/fa"

export default function Services() {
  const services = [
    {
      icon: <FaSwimmer className="w-8 h-8 text-cyan" />, 
      title: "Swimming Instruction",
      description:
        "Advanced coaching for all skill levels. Building confidence and water safety with proven techniques.",
    },
    {
      icon: <FaPaintBrush className="w-8 h-8 text-purple" />, 
      title: "Web Design",
      description:
        "Creating visually stunning interfaces that engage users and communicate your brand effectively.",
    },
    {
      icon: <FaCode className="w-8 h-8 text-yellow" />,
      title: "Development",
      description:
        "Full-stack web solutions using modern technologies. From concept to deployment, I've got you covered.",
    },
    {
      icon: <FaDraftingCompass className="w-8 h-8 text-pink" />,
      title: "UX/UI Design",
      description:
        "Thoughtful design systems that prioritize user experience and accessibility in every interaction.",
    },
  ]

  return (
    <section id="services" className="py-20 md:py-32 px-4 md:px-8 bg-card/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">
            <span className="text-purple">My</span>
            <span className="text-foreground ml-2">Life</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Combining technical expertise with creative vision to deliver exceptional results.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-8 rounded-2xl border border-border/40 bg-background/40 shadow-sm backdrop-blur-sm transition-all"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
