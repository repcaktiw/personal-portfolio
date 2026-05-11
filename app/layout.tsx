import type { Metadata, Viewport } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { headers } from "next/headers"
import { Analytics } from "@vercel/analytics/next"
import { ThemeProvider } from "@/components/theme-provider"
import { getContent } from "@/content"
import { DEFAULT_LOCALE, isLocale } from "@/content/i18n"
import "./globals.css"

const geist = Geist({ subsets: ["latin"], variable: "--font-geist-sans", display: "swap" })

const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono", display: "swap" })

async function getLocaleFromHeaders(): Promise<"pl" | "en"> {
  const h = await headers()
  const raw = h.get("x-locale")
  return isLocale(raw) ? raw : DEFAULT_LOCALE
}

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocaleFromHeaders()
  const { site } = getContent(locale)

  return {
    title: site.documentTitle,
    description: site.metadataDescription,
    alternates: {
      languages: {
        pl: "/",
        en: "/en",
      },
    },
    icons: {
      icon: [
        { url: "/icon-light-32x32.png", media: "(prefers-color-scheme: light)" },
        { url: "/icon-dark-32x32.png", media: "(prefers-color-scheme: dark)" },
        { url: "/icon.svg", type: "image/svg+xml" },
      ],
      apple: "/apple-icon.png",
    },
  }
}

export const viewport: Viewport = { themeColor: "#1a1a2e", width: "device-width", initialScale: 1 }

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const locale = await getLocaleFromHeaders()

  return (
    <html lang={locale} suppressHydrationWarning className="bg-background">
      <body className={`${geist.variable} ${geistMono.variable} font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          {children}
        </ThemeProvider>
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  )
}
