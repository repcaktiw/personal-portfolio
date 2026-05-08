import fs from "fs"
import path from "path"
import matter from "gray-matter"
import type { CaseStudy } from "../portfolio/types"

type CaseStudyFrontmatter = Omit<CaseStudy, "goals"> & {
  goals?: { label: string; value: string }[]
  images?: string[]
}

const CASE_STUDIES_DIR = path.join(process.cwd(), "content", "case-studies")

function readCaseStudyFrontmatter(filePath: string): CaseStudyFrontmatter {
  const raw = fs.readFileSync(filePath, "utf8")
  const { data } = matter(raw)
  return data as CaseStudyFrontmatter
}

export function getCaseStudies(): CaseStudy[] {
  return fs
    .readdirSync(CASE_STUDIES_DIR)
    .filter((f: string) => f.endsWith(".mdx"))
    .map((f: string) => readCaseStudyFrontmatter(path.join(CASE_STUDIES_DIR, f)))
    .sort((a: CaseStudyFrontmatter, b: CaseStudyFrontmatter) => a.title.localeCompare(b.title))
}

