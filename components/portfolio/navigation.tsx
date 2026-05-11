"use client"

import { useState, useEffect } from "react"
import { GlobeIcon } from "lucide-react"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

interface NavItem {
  label: string
  href: string
}

interface NavigationProps {
  items: NavItem[]
  logo?: React.ReactNode
  authorName: string
}

export function Navigation({ items, logo, authorName }: NavigationProps) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()

  const isEn = pathname === "/en" || pathname.startsWith("/en/")
  const langLabel = isEn ? "PL" : "EN"
  const langHref = isEn ? (pathname.replace(/^\/en(\/|$)/, "/") || "/") : pathname === "/" ? "/en" : `/en${pathname}`

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled 
          ? "bg-background/80 backdrop-blur-lg border-b border-border" 
          : "bg-transparent"
      )}
    >
      <nav className="container mx-auto px-6 md:px-8 lg:px-12">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            {logo || (
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded bg-accent/20 border border-accent/30 flex items-center justify-center">
                  <GlobeIcon className="w-4 h-4 text-accent" aria-hidden="true" />
                </div>
                <span className="ui-brand hidden sm:block">{authorName}</span>
              </div>
            )}
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {items.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="ui-navlink animated-underline"
              >
                {item.label}
              </a>
            ))}

            <a
              href={langHref}
              onClick={(e) => {
                const hash = window.location.hash
                if (hash) {
                  e.preventDefault()
                  window.location.href = `${langHref}${hash}`
                }
              }}
              className="px-3 py-1.5 rounded border border-border text-xs font-medium text-muted-foreground hover:text-foreground hover:bg-secondary transition-smooth"
              aria-label={`Switch language to ${langLabel}`}
            >
              {langLabel}
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-muted-foreground hover:text-foreground transition-smooth"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={cn(
            "md:hidden overflow-hidden transition-all duration-300",
            mobileOpen ? "max-h-96 pb-6" : "max-h-0"
          )}
        >
          <div className="flex flex-col gap-4 pt-4 border-t border-border">
            <a
              href={langHref}
              onClick={(e) => {
                const hash = window.location.hash
                if (hash) {
                  e.preventDefault()
                  window.location.href = `${langHref}${hash}`
                }
                setMobileOpen(false)
              }}
              className="ui-navlink"
              aria-label={`Switch language to ${langLabel}`}
            >
              {langLabel}
            </a>
            {items.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="ui-navlink"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </nav>
    </header>
  )
}
