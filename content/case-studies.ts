import fs from "fs"
import path from "path"
import matter from "gray-matter"
import type { CaseStudy } from "./portfolio-types"
import type { Locale } from "./i18n"

type CaseStudyFrontmatter = Omit<CaseStudy, "goals"> & {
  goals?: { label: string; value: string }[]
  images?: string[]
}

function getCaseStudiesDir(locale: Locale): string {
  return path.join(process.cwd(), "content", locale, "case-studies")
}

function readCaseStudyFrontmatter(filePath: string): CaseStudyFrontmatter {
  const raw = fs.readFileSync(filePath, "utf8")
  const { data } = matter(raw)
  return data as CaseStudyFrontmatter
}

function readAllCaseStudies(locale: Locale): CaseStudy[] {
  const dir = getCaseStudiesDir(locale)
  if (!fs.existsSync(dir)) return []

  return fs
    .readdirSync(dir)
    .filter((f: string) => f.endsWith(".mdx"))
    .map((f: string) => readCaseStudyFrontmatter(path.join(dir, f)))
    .sort((a: CaseStudyFrontmatter, b: CaseStudyFrontmatter) => a.title.localeCompare(b.title))
}

export function getCaseStudies(locale: Locale): CaseStudy[] {
  const pl = readAllCaseStudies("pl")
  if (locale === "pl") return pl

  const en = readAllCaseStudies("en")
  const enById = new Map(en.map((s) => [s.id, s]))

  return pl.map((plStudy) => enById.get(plStudy.id) ?? plStudy)
}

