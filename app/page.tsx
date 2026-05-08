import {
  Section,
  SectionHeader,
  Navigation,
  Footer,
  CaseStudyCarousel,
  DomainCard,
  domainIcons,
} from "@/components/portfolio"
import { about, contact, domains, footer, hero, navItems, work } from "@/content/portfolio"
import { getCaseStudies } from "@/content/case-studies"
import { unstable_noStore as noStore } from "next/cache"
import Image from "next/image"

export const dynamic = "force-dynamic"

export default function PortfolioPage() {
  noStore()
  const studies = getCaseStudies()

  return (
    <>
      <Navigation items={navItems} />

      {/* Hero Section */}
      <Section className="min-h-screen flex items-center pt-20" withGrid>
        <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-14">
          {/* Photo (right on large, above on small) */}
          <div className="w-full max-w-md lg:max-w-lg order-first lg:order-last">
            <div className="relative aspect-[4/5] rounded-xl overflow-hidden border border-border bg-card/30 shadow-sm">
              <Image
                src="/images/hero-photo.jpg"
                alt={`${hero.name} - zdjęcie`}
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 90vw, 480px"
              />
            </div>
          </div>

          {/* Text */}
          <div className="max-w-4xl animate-fade-in">
            <div className="ui-kicker ui-kicker-muted mb-8">
              <span className="w-2 h-2 rounded-full bg-accent pulse-dot" />
              {hero.name}
            </div>

            <h1 className="ui-h1">
              {hero.headingLine1}
              <span className="block text-gradient">{hero.headingLine2}</span>
            </h1>

            <p className="mt-8 ui-lead max-w-xl">
              {hero.tagline}
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href={hero.primaryCta.href}
                className="group px-6 py-3 bg-accent text-accent-foreground font-medium rounded hover:bg-accent/90 transition-smooth flex items-center gap-2"
              >
                {hero.primaryCta.label}
                <svg
                  className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
              <a
                href={hero.secondaryCta.href}
                className="px-6 py-3 border border-border text-foreground font-medium rounded hover:bg-secondary transition-smooth"
              >
                {hero.secondaryCta.label}
              </a>
            </div>
          </div>
        </div>
      </Section>

      {/* About Section */}
      <Section id="about" className="bg-card/30">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-3">
            <SectionHeader
              label={about.sectionLabel}
              title={about.title}
            />
            <div className="space-y-4 ui-body">
              {about.paragraphs.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </div>
          
          {/* Visual skills block */}
          <div className="lg:col-span-2">
            <div className="grid grid-cols-2 gap-4">
              {about.skills.map((s) => (
                <div
                  key={s.label}
                  className="group relative p-5 rounded-lg bg-card/50 border border-border border-glow card-hover transition-smooth flex flex-col"
                >
                  <div className="text-2xl font-semibold font-mono text-accent transition-smooth group-hover:text-gradient">
                    {s.value}
                  </div>
                  <div className="text-xs text-muted-foreground mt-auto leading-snug pt-2">{s.label}</div>

                  <div className="absolute top-3 right-3 w-3 h-3 border-t border-r border-accent/40 rounded-tr opacity-0 group-hover:opacity-100 transition-smooth" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Domains / Experience Section */}
      <Section id="domains" withDots>
        <SectionHeader
          label={domains.sectionLabel}
          title={domains.title}
          description={domains.description}
        />
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {domains.items.map((d) => {
            const Icon = domainIcons[d.iconKey]
            return (
              <DomainCard
                key={d.title}
                icon={<Icon className="w-6 h-6" />}
                title={d.title}
                description={d.description}
                keywords={d.keywords}
              />
            )
          })}
        </div>
      </Section>

      {/* Case Studies Section */}
      <Section id="case-studies" className="bg-card/30 overflow-visible">
        <SectionHeader
          label={work.sectionLabel}
          title={work.title}
          description={work.description}
        />
        
        <CaseStudyCarousel studies={studies} />
      </Section>

      {/* Contact Section */}
      <Section id="contact" withGrid className="py-14 md:py-16 lg:py-20">
        <div className="max-w-2xl mx-auto text-center">
          <div className="mb-8 md:mb-10 text-center">
              <span className="ui-kicker ui-kicker-accent justify-center mb-3">
              <span className="w-2 h-2 rounded-full bg-accent pulse-dot" />
              {contact.sectionLabel}
            </span>
            <h2 className="ui-h2-compact">
              {contact.title}
            </h2>
            <p className="mt-3 ui-sublead max-w-2xl mx-auto">
              {contact.description}
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`mailto:${contact.email}`}
              className="px-6 py-3 bg-accent text-accent-foreground font-medium rounded hover:bg-accent/90 transition-smooth glow-accent"
            >
              {contact.emailCtaLabel}
            </a>
            <a
              href={contact.downloadHref}
              className="px-6 py-3 border border-border text-foreground font-medium rounded hover:bg-secondary transition-smooth"
            >
              {contact.downloadCtaLabel}
            </a>
          </div>
          
          <p className="mt-6 ui-mono-sm">
            {contact.email}
          </p>
        </div>
      </Section>

      <Footer socialLinks={footer.socialLinks} availabilityLabel={footer.availabilityLabel} />
    </>
  )
}
