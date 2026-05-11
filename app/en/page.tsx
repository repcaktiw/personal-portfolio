import PortfolioPage from "@/components/portfolio/portfolio-page"
import { getContent } from "@/content"
import { getCaseStudies } from "@/content/case-studies"

export const dynamic = "force-dynamic"

export default function Page() {
  const { portfolio, site } = getContent("en")
  const studies = getCaseStudies("en")

  return <PortfolioPage portfolio={portfolio} authorName={site.authorName} studies={studies} />
}

