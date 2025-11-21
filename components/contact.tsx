"use client"

import { FaGithub, FaLinkedin, FaBehance, FaDiscord, FaWhatsapp, FaEnvelope, FaRegEnvelope, FaPhoneAlt } from "react-icons/fa";

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
                <FaRegEnvelope className="w-4.5 h-4.5" />
                <span className="font-medium group-hover:underline">hello@maretyui.com</span>
              </a>

              <a
                href="tel:+4917646644971"
                className="flex items-center gap-3 text-foreground hover:text-cyan transition-colors group"
              >
                <FaPhoneAlt className="w-4.3 h-4.3" />
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
                { name: "Whatsapp", icon: <FaWhatsapp className="text-3xl" />, url: "https://wa.me/+4917646644971?text=Hey%20Maretyui,%20" },
                // { name: "LinkedIn", icon: <FaLinkedin className="text-3xl" />, url: "https://linkedin.com" },
              ].map((social) => (
                <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-6 border border-border/30 rounded-xl text-center hover:border-cyan/50 hover:bg-cyan/5 transition-all group duration-200"
                >
                <div className="mb-3 flex justify-center transition-transform duration-300 ease-out group-hover:scale-110 group- transition-">{social.icon}</div>
                <p className="text-sm font-medium text-foreground transition-transform duration-300 ease-out group-hover:scale-[1.05] group-hover:text-cyan group-hover:text-cyan">
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
