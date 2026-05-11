import type { Locale } from "./i18n"

import { site as plSite } from "./pl/site"
import { site as enSite } from "./en/site"

import * as plPortfolio from "./pl/portfolio"
import * as enPortfolio from "./en/portfolio"

export type ContentBundle = {
  locale: Locale
  site: typeof plSite
  portfolio: {
    navItems: typeof plPortfolio.navItems
    hero: typeof plPortfolio.hero
    about: typeof plPortfolio.about
    domains: typeof plPortfolio.domains
    work: typeof plPortfolio.work
    contact: typeof plPortfolio.contact
    footer: typeof plPortfolio.footer
  }
}

export function getContent(locale: Locale): ContentBundle {
  const site = locale === "en" ? enSite : plSite
  const portfolio = locale === "en" ? enPortfolio : plPortfolio

  return {
    locale,
    site,
    portfolio: {
      navItems: portfolio.navItems,
      hero: portfolio.hero,
      about: portfolio.about,
      domains: portfolio.domains,
      work: portfolio.work,
      contact: portfolio.contact,
      footer: portfolio.footer,
    },
  }
}

