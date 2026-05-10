import { SITE_CONTACT_EMAIL } from "@/content/site"
import type { ContactContent } from "./types"

export const contact = {
  sectionLabel: "Kontakt",
  title: "Skontaktuj się ze mną",
  description:
    "Chętnie porozmawiam o projektach związanych z danymi, automatyzacją oraz cyfrowym workflow w środowisku technicznym.",
  email: SITE_CONTACT_EMAIL,
  emailCtaLabel: "Send Email",
  downloadCtaLabel: "Download CV",
  downloadHref: "#",
} satisfies ContactContent

