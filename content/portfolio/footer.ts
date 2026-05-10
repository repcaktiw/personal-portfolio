import { SITE_URL_GITHUB, SITE_URL_LINKEDIN } from "@/content/site"
import type { FooterContent } from "./types"

export const footer = {
  availabilityLabel: "Dostępny do realizacji projektów",
  socialLinks: [
    { label: "GitHub", href: SITE_URL_GITHUB, iconKey: "GithubIcon" },
    { label: "LinkedIn", href: SITE_URL_LINKEDIN, iconKey: "LinkedinIcon" },
  ],
} satisfies FooterContent

