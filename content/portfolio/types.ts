export type NavItem = {
  label: string
  href: string
}

export type Metric = {
  label: string
  value: string
}

// Lucide icon component names we allow in content.
export type SocialIconKey = "GithubIcon" | "LinkedinIcon"

export type SocialLink = {
  label: string
  href: string
  iconKey: SocialIconKey
}

export type CaseStudy = {
  id: string
  title: string
  subtitle: string
  category: string
  image: string
  images?: string[]
  goals?: Metric[]
}

export type DomainIconKey =
  | "DroneIcon"
  | "RulerIcon"
  | "FileChartLineIcon"
  | "MonitorCogIcon"
  | "WorkflowIcon"
  | "ChartPieIcon"
  | "MapIcon"

export type Domain = {
  iconKey: DomainIconKey
  title: string
  description: string
  keywords?: string[]
}

export type HeroContent = {
  name: string
  headingLine1: string
  headingLine2: string
  tagline: string
  primaryCta: { label: string; href: string }
  secondaryCta: { label: string; href: string }
}

export type AboutContent = {
  sectionLabel: string
  title: string
  paragraphs: string[]
  skills: { value: string; label: string }[]
}

export type DomainsContent = {
  sectionLabel: string
  title: string
  description: string
  items: Domain[]
}

export type WorkContent = {
  sectionLabel: string
  title: string
  description: string
  studies: CaseStudy[]
}

export type ContactContent = {
  sectionLabel: string
  title: string
  description: string
  email: string
  emailCtaLabel: string
  downloadCtaLabel: string
  downloadHref: string
}

export type FooterContent = {
  socialLinks: SocialLink[]
  availabilityLabel: string
}

