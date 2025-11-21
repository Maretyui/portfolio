"use client"

import { FaGithub, FaLinkedin, FaBehance, FaDiscord } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="py-20 md:py-32 px-4 md:px-8 bg-card/30">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                <span className="text-foreground">Let's</span>
                <span className="text-cyan ml-3">Connect</span>
              </h2>
              <div className="h-1 w-16 bg-linear-to-r from-cyan to-yellow"></div>
            </div>

            <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-xl">
              Whether you're interested in web design services, swimming coaching, or just want to chat about design and
              tech, I'd love to hear from you.
            </p>

            <div className="space-y-4 pt-4">
              <a
                href="mailto:hello@maretyui.com"
                className="flex items-center gap-3 text-foreground hover:text-cyan transition-colors group"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <span className="font-medium group-hover:underline">hello@maretyui.com</span>
              </a>

              <a
                href="tel:+49123456789"
                className="flex items-center gap-3 text-foreground hover:text-cyan transition-colors group"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <span className="font-medium group-hover:underline">+49 (0) 176 466 44971</span>
              </a>

              <div>
                <p className="text-sm text-muted-foreground mb-3">Hamburg, Germany</p>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-foreground">Follow My Work</h3>

            <div className="grid grid-cols-2 gap-4">
              {[
                { name: "GitHub", icon: <FaGithub className="text-3xl" />, url: "https://github.com/maretyui" },
                { name: "Discord", icon: <FaDiscord className="text-3xl" />, url: "https://discord.com/users/837262476680495104" },
                // { name: "LinkedIn", icon: <FaLinkedin className="text-3xl" />, url: "https://linkedin.com" },
              ].map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-6 border border-border/30 rounded-xl text-center hover:border-cyan/50 hover:bg-cyan/5 transition-all group"
                >
                  <div className="mb-3 flex justify-center">{social.icon}</div>
                  <p className="text-sm font-medium text-foreground group-hover:text-cyan transition-colors">
                    {social.name}
                  </p>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border/30 text-center text-xs text-muted-foreground">
          <p>© 2025 Maik Reinhardt. Design & Development. Hamburg, Germany.</p>
        </div>
      </div>
    </section>
  );
}
