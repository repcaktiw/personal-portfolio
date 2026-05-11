import { site } from "../site"
import type { HeroContent } from "../../portfolio-types"

export const hero = {
  name: site.authorName,
  headingLine1: "GIS · BIM · CAD",
  headingLine2: "Inżynieria lądowa · Automatyzacja procesów",
  tagline: "Łączenie danych przestrzennych, automatyzacji i narzędzi wspierających realizację projektów",
  primaryCta: { label: "Zobacz Case Studies", href: "#case-studies" },
  secondaryCta: { label: "Kontakt", href: "#contact" },
} satisfies HeroContent

