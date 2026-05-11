import { site } from "../site"
import type { ContactContent } from "../../portfolio-types"

export const contact = {
  sectionLabel: "Contact",
  title: "Get in touch",
  description: "Happy to discuss projects involving data, automation, and digital workflows in technical environments.",
  email: site.contactEmail,
  emailCtaLabel: "Send email",
  downloadCtaLabel: "Download CV",
  downloadHref: "#",
} satisfies ContactContent

