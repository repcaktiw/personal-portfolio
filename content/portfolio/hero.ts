import { SITE_AUTHOR_NAME } from "@/content/site"
import type { HeroContent } from "./types"

export const hero = {
  name: SITE_AUTHOR_NAME,
  headingLine1: "GIS · BIM · CAD",
  headingLine2: "Inżynieria lądowa · Automatyzacja procesów",
  tagline:
    "Łączenie danych przestrzennych, automatyzacji i narzędzi wspierających realizację projektów",
  primaryCta: { label: "Zobacz Case Studies", href: "#case-studies" },
  secondaryCta: { label: "Kontakt", href: "#contact" },
} satisfies HeroContent

