import { site } from "../site"
import type { FooterContent } from "../../portfolio-types"

export const footer = {
  availabilityLabel: "Available for projects",
  socialLinks: [
    { label: "GitHub", href: site.urlGithub, iconKey: "GithubIcon" },
    { label: "LinkedIn", href: site.urlLinkedin, iconKey: "LinkedinIcon" },
  ],
} satisfies FooterContent

