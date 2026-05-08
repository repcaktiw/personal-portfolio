import fs from "fs"
import path from "path"
import matter from "gray-matter"
import { NextResponse } from "next/server"

import { unified } from "unified"
import remarkParse from "remark-parse"
import remarkMdx from "remark-mdx"
import remarkGfm from "remark-gfm"
import remarkRehype from "remark-rehype"
import rehypeSanitize, { defaultSchema } from "rehype-sanitize"
import rehypeStringify from "rehype-stringify"

const CASE_STUDIES_DIR = path.join(process.cwd(), "content", "case-studies")

function findCaseStudyFileById(id: string): string | null {
  const files = fs.readdirSync(CASE_STUDIES_DIR).filter((f: string) => f.endsWith(".mdx"))
  for (const f of files) {
    const full = path.join(CASE_STUDIES_DIR, f)
    const raw = fs.readFileSync(full, "utf8")
    const { data } = matter(raw)
    if ((data as any)?.id === id) return full
  }
  return null
}

export async function GET(_: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const filePath = findCaseStudyFileById(id)
  if (!filePath) {
    return NextResponse.json({ error: "NOT_FOUND" }, { status: 404 })
  }

  const raw = fs.readFileSync(filePath, "utf8")
  const { content } = matter(raw)

  // Keep this intentionally conservative: allow basic formatting only.
  const schema = {
    ...defaultSchema,
    attributes: {
      ...defaultSchema.attributes,
      a: [...((defaultSchema.attributes as any)?.a ?? []), ["target"], ["rel"]],
    },
  }

  const file = await unified()
    .use(remarkParse)
    .use(remarkMdx) // allows MDX syntax; we still sanitize in HTML output
    .use(remarkGfm)
    .use(remarkRehype, { allowDangerousHtml: false })
    .use(rehypeSanitize as any, schema as any)
    .use(rehypeStringify)
    .process(content)

  return NextResponse.json({ id, html: String(file.value) })
}

