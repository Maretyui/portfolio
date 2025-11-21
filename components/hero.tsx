"use client"
import { ChevronDown } from "lucide-react"
import { FaDiscord, FaGithub, FaLinkedin } from "react-icons/fa"

interface HeroProps {
  setActiveSection: (section: string) => void
}

export default function Hero({ setActiveSection }: HeroProps) {
  const scrollToAbout = () => {
    setActiveSection("about")
    const element = document.getElementById("about")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-24 px-4 md:px-8">
      <div className="max-w-5xl mx-auto w-full">
        <div className="flex flex-col items-center text-center space-y-8">
          <div className="flex items-center justify-center gap-4 flex-wrap">
            {[{
              href: "https://discord.com/users/837262476680495104",
              icon: <FaDiscord />
            },{
              href: "https://github.com/maretyui",
              icon: <FaGithub />
            },{
              href: "#",
              icon: <FaLinkedin />
            }].map(({ href, icon }, idx) => (
              <a
                key={idx}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-foreground text-background flex items-center justify-center 
                           transition-all duration-300 ease-out 
                           hover:bg-cyan hover:scale-105 hover:shadow-lg"
              >
                <span className="text-3xl">{icon}</span>
              </a>
            ))}
          </div>

          <div className="space-y-6 animate-fade-in-up">
            <div className="space-y-3">
              <p className="text-sm md:text-base text-muted-foreground font-light transition-colors duration-300 
                            hover:text-foreground">
                Welcome to my portfolio
              </p>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-tight">
                <span className="block text-purple transition-transform duration-300 ease-out hover:-rotate-2">Designing</span>
                <span className="block text-lime transition-transform duration-300 ease-out hover:rotate-2">Swimming</span>
                <span className="block">
                  <span className="text-cyan transition-transform duration-300 ease-out hover:-rotate-1">Digital </span>
                  <span className="text-foreground ml-3 transition-transform duration-300 ease-out hover:rotate-1">Experiences</span>
                </span>
              </h1>
            </div>

            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              A <span className="text-lime underline-offset-2 transition-all duration-300 hover:underline">swim instructor</span> &{" "}
              <span className="text-cyan underline-offset-2 transition-all duration-300 hover:underline">certified web designer</span> from Hamburg. I craft elegant digital solutions and teach
              water mastery with love.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-6">
            <button
              onClick={scrollToAbout}
              className="mt-16 flex flex-col items-center cursor-pointer group"
              aria-label="Scroll to training schedule"
            >
              <div className="animate-scroll-fade flex flex-col items-center transition-all duration-300 group-hover:opacity-80 group-hover:translate-y-1">
                <ChevronDown className="h-8 w-8 text-primary -mb-5 transition-transform duration-300 group-hover:translate-y-1" />
                <ChevronDown className="h-8 w-8 text-primary -mb-5 transition-transform duration-300 group-hover:translate-y-1" />
                <ChevronDown className="h-8 w-8 text-primary transition-transform duration-300 group-hover:translate-y-1" />
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
