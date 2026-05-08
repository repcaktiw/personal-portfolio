import { cn } from "@/lib/utils"
import type { SocialLink } from "@/content/portfolio"
import { socialIcons } from "./icon-map"
import { GlobeIcon } from "lucide-react"

interface FooterProps {
  socialLinks?: SocialLink[]
  className?: string
  availabilityLabel?: string
}

export function Footer({ socialLinks, className, availabilityLabel }: FooterProps) {
  const currentYear = new Date().getFullYear()

  return (
    <footer className={cn("border-t border-border bg-card/30", className)}>
      <div className="container mx-auto px-6 md:px-8 lg:px-12 py-12 md:py-16">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Logo & Copyright */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded bg-accent/20 border border-accent/30 flex items-center justify-center">
                <GlobeIcon className="w-4 h-4 text-accent" aria-hidden="true" />
              </div>
              <span className="ui-brand">Kacper Witkowski</span>
            </div>
            <p className="ui-body-sm">
              &copy; {currentYear} All rights reserved.
            </p>
          </div>

          {/* Social Links */}
          {socialLinks && socialLinks.length > 0 && (
            <div className="flex items-center gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-muted-foreground hover:text-accent transition-smooth"
                  aria-label={link.label}
                >
                  {socialIcons[link.iconKey]({ className: "w-5 h-5" })}
                </a>
              ))}
            </div>
          )}

          {/* Status */}
          <div className="flex items-center gap-2 ui-body-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-500 pulse-dot" />
            {availabilityLabel ?? "Available for projects"}
          </div>
        </div>
      </div>
    </footer>
  )
}
