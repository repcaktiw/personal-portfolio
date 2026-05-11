export type Locale = "pl" | "en"

export const DEFAULT_LOCALE: Locale = "pl"

export function isLocale(value: string | null | undefined): value is Locale {
  return value === "pl" || value === "en"
}

export function getLocaleFromPathname(pathname: string): Locale {
  return pathname === "/en" || pathname.startsWith("/en/") ? "en" : "pl"
}

