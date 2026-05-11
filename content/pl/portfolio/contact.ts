import { site } from "../site"
import type { ContactContent } from "../../portfolio-types"

export const contact = {
  sectionLabel: "Kontakt",
  title: "Skontaktuj się ze mną",
  description:
    "Chętnie porozmawiam o projektach związanych z danymi, automatyzacją oraz cyfrowym workflow w środowisku technicznym.",
  email: site.contactEmail,
  emailCtaLabel: "Wyślij e-mail",
  downloadCtaLabel: "Pobierz CV",
  downloadHref: "#",
} satisfies ContactContent

