import fs from "fs"
import path from "path"
import matter from "gray-matter"
import { NextResponse } from "next/server"

import { DEFAULT_LOCALE, isLocale, type Locale } from "@/content/i18n"
import { unified } from "unified"
import remarkParse from "remark-parse"
import remarkMdx from "remark-mdx"
import remarkGfm from "remark-gfm"
import remarkRehype from "remark-rehype"
import rehypeSanitize, { defaultSchema } from "rehype-sanitize"
import rehypeStringify from "rehype-stringify"

function getCaseStudiesDir(locale: Locale): string {
  return path.join(process.cwd(), "content", locale, "case-studies")
}

function getFrontmatterId(data: unknown): string | null {
  if (!data || typeof data !== "object") return null
  const id = (data as Record<string, unknown>).id
  return typeof id === "string" ? id : null
}

function findCaseStudyFileById(dir: string, id: string): string | null {
  if (!fs.existsSync(dir)) return null
  const files = fs.readdirSync(dir).filter((f: string) => f.endsWith(".mdx"))
  for (const f of files) {
    const full = path.join(dir, f)
    const raw = fs.readFileSync(full, "utf8")
    const { data } = matter(raw)
    if (getFrontmatterId(data) === id) return full
  }
  return null
}

export async function GET(
  req: Request,
  { params }: { params: { id: string } | Promise<{ id: string }> },
) {
  const { id } = await params
  const url = new URL(req.url)
  const localeParam = url.searchParams.get("locale")
  const locale: Locale = isLocale(localeParam) ? localeParam : DEFAULT_LOCALE

  const preferredDir = getCaseStudiesDir(locale)
  const fallbackDir = getCaseStudiesDir(locale === "pl" ? "en" : "pl")

  const filePath =
    findCaseStudyFileById(preferredDir, id) ?? findCaseStudyFileById(fallbackDir, id)
  if (!filePath) return NextResponse.json({ error: "NOT_FOUND" }, { status: 404 })

  const raw = fs.readFileSync(filePath, "utf8")
  const { content } = matter(raw)

  // Keep this intentionally conservative: allow basic formatting only.
  const baseAttributes = defaultSchema.attributes ?? {}
  const linkAttributes = ("a" in baseAttributes ? baseAttributes.a : undefined) ?? []

  const schema = {
    ...defaultSchema,
    attributes: {
      ...baseAttributes,
      a: [...linkAttributes, ["target"], ["rel"]],
    },
  } as typeof defaultSchema

  const file = await unified()
    .use(remarkParse)
    .use(remarkMdx) // allows MDX syntax; we still sanitize in HTML output
    .use(remarkGfm)
    .use(remarkRehype, { allowDangerousHtml: false })
    .use(rehypeSanitize, schema)
    .use(rehypeStringify)
    .process(content)

  return NextResponse.json({ id, html: String(file.value) })
}

