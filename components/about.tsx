"use client"

export default function About() {
  return (
    <section id="about" className="py-20 md:py-32 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-start">
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                <span className="text-cyan">About</span>
                <span className="text-foreground ml-3">Me</span>
              </h2>
              <div className="h-1 w-16 bg-linear-to-r from-cyan to-yellow"></div>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-yellow mb-2">Swimming Instructor</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Certified swimming coach dedicated to teaching water safety and building confidence in swimmers of all
                  ages.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-cyan mb-2">Web Designer & Developer</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Full-stack web professional creating elegant, user-centered digital experiences with modern
                  technologies.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <p className="text-base md:text-lg text-foreground leading-relaxed">
              I'm Maik Reinhardt, a 16-year-old from Hamburg, Germany, fighting for two distinct worlds: swimming
              and web design.
            </p>

            <p className="text-base md:text-lg text-foreground leading-relaxed">
              My unique combination of technical expertise and physical coaching background allows me to approach
              challenges with creativity and precision. Whether I'm designing interfaces or coaching swimmers, I
              prioritize excellence and attention to detail.
            </p>

            <p className="text-base md:text-lg text-foreground leading-relaxed">
              I believe in continuous learning and pushing boundaries. Every project—digital or in the pool—is an
              opportunity to create meaningful impact and help others achieve their goals.
            </p>

            <div className="pt-6 space-y-3">
              <div className="flex items-center gap-3">
                <span className="text-cyan">✓</span>
                <span className="text-sm">Certified Swimming Instructor</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-yellow">✓</span>
                <span className="text-sm">Certified Web Designer</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-lime">✓</span>
                <span className="text-sm">Full-Stack Developer</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
