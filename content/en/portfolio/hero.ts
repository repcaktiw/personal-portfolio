import { site } from "../site"
import type { HeroContent } from "../../portfolio-types"

export const hero = {
  name: site.authorName,
  headingLine1: "GIS · BIM · CAD",
  headingLine2: "Civil engineering · Process automation",
  tagline: "Bridging spatial data, automation, and digital tools that support project delivery.",
  primaryCta: { label: "View case studies", href: "#case-studies" },
  secondaryCta: { label: "Contact", href: "#contact" },
} satisfies HeroContent

