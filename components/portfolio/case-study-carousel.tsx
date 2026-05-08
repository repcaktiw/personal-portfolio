"use client"

import { useMemo, useRef, useState } from "react"
import { cn } from "@/lib/utils"
import { ImageSequence } from "./image-sequence"
import * as Dialog from "@radix-ui/react-dialog"

interface CaseStudy {
  id: string
  title: string
  subtitle: string
  category: string
  image: string
  images?: string[]
  goals?: { label: string; value: string }[]
}

interface CaseStudyCarouselProps {
  studies: CaseStudy[]
  className?: string
}

export function CaseStudyCarousel({ studies, className }: CaseStudyCarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)
  const [activeId, setActiveId] = useState<string | null>(null)
  const [activeHtml, setActiveHtml] = useState<string>("")
  const [isLoadingHtml, setIsLoadingHtml] = useState(false)
  const activeStudy = useMemo(
    () => studies.find((s) => s.id === activeId) ?? null,
    [activeId, studies]
  )

  const openStudy = async (id: string) => {
    setActiveId(id)
    setIsLoadingHtml(true)
    setActiveHtml("")
    try {
      const res = await fetch(`/api/case-studies/${encodeURIComponent(id)}`, { cache: "no-store" })
      if (!res.ok) throw new Error("Failed to load case study content")
      const json = (await res.json()) as { html?: string }
      setActiveHtml(json.html ?? "")
    } catch {
      setActiveHtml("")
    } finally {
      setIsLoadingHtml(false)
    }
  }

  const checkScroll = () => {
    if (!scrollRef.current) return
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current
    setCanScrollLeft(scrollLeft > 10)
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10)
  }

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return
    const scrollAmount = scrollRef.current.clientWidth * 0.8
    scrollRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    })
  }

  return (
    <div className={cn("relative", className)}>
      {/* Navigation arrows */}
      <div className="absolute -top-16 right-0 flex items-center gap-2 z-10">
        <button
          onClick={() => scroll("left")}
          disabled={!canScrollLeft}
          className={cn(
            "p-3 rounded border border-border bg-background/80 backdrop-blur-sm transition-smooth",
            canScrollLeft
              ? "text-foreground hover:bg-secondary hover:border-accent/50"
              : "text-muted-foreground/40 cursor-not-allowed"
          )}
          aria-label="Scroll left"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={() => scroll("right")}
          disabled={!canScrollRight}
          className={cn(
            "p-3 rounded border border-border bg-background/80 backdrop-blur-sm transition-smooth",
            canScrollRight
              ? "text-foreground hover:bg-secondary hover:border-accent/50"
              : "text-muted-foreground/40 cursor-not-allowed"
          )}
          aria-label="Scroll right"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Carousel container */}
      <div
        ref={scrollRef}
        onScroll={checkScroll}
        className="flex gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-4 -mx-6 px-6 md:-mx-12 md:px-12 lg:-mx-20 lg:px-20"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {studies.map((study) => (
          <article
            key={study.id}
            className="group relative flex-shrink-0 w-[85vw] md:w-[60vw] lg:w-[45vw] max-w-2xl snap-start"
          >
            <button
              type="button"
              onClick={() => openStudy(study.id)}
              className="relative aspect-[16/10] w-full rounded-lg overflow-hidden bg-secondary border border-border border-glow text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              aria-label={`Otwórz: ${study.title}`}
            >
              {/* Visual placeholder - styled geometric pattern */}
              <div className="absolute inset-0 grid-pattern-dense opacity-30" />
              {study.images && study.images.length > 0 ? (
                <ImageSequence images={study.images} intervalMs={2800} crossfadeMs={900} />
              ) : (
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${study.image})` }}
                />
              )}
              
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
              
              {/* Category tag */}
              <div className="absolute top-4 left-4">
                <span className="ui-badge bg-accent/90 text-accent-foreground border-accent/30">
                  {study.category}
                </span>
              </div>

              {/* Content overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="ui-h3-lg text-foreground mb-2 group-hover:text-gradient transition-smooth">
                  {study.title}
                </h3>
                <p className="ui-body-sm line-clamp-2">
                  {study.subtitle}
                </p>
              </div>

              {/* Corner accent */}
              <div className="absolute top-3 right-3 w-4 h-4 border-t border-r border-accent/60 rounded-tr opacity-0 group-hover:opacity-100 transition-smooth" />
            </button>
          </article>
        ))}
      </div>

      {/* Scroll indicator line */}
      <div className="mt-6 h-px bg-border relative overflow-hidden">
        <div className="absolute inset-y-0 left-0 w-1/3 bg-accent/50 animate-pulse" />
      </div>

      <Dialog.Root
        open={!!activeStudy}
        onOpenChange={(open: boolean) => {
          if (!open) {
            setActiveId(null)
            setActiveHtml("")
            setIsLoadingHtml(false)
          }
        }}
      >
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 bg-background/70 backdrop-blur-sm z-50" />
          <Dialog.Content className="fixed z-50 left-1/2 top-1/2 w-[min(94vw,60rem)] max-h-[88vh] -translate-x-1/2 -translate-y-1/2 rounded-xl border border-border bg-background shadow-xl overflow-hidden">
            {activeStudy && (
              <div className="flex flex-col max-h-[88vh]">
                {/* Header */}
                <div className="flex items-start justify-between gap-4 px-6 py-5 border-b border-border/60">
                  <div className="min-w-0">
                    <Dialog.Title className="ui-h3-lg">
                      {activeStudy.title}
                    </Dialog.Title>
                    <Dialog.Description className="mt-1 ui-body-sm">
                      {activeStudy.subtitle}
                    </Dialog.Description>
                  </div>
                  <Dialog.Close asChild>
                    <button
                      type="button"
                      className="shrink-0 p-2 rounded border border-border bg-card/40 hover:bg-secondary transition-smooth"
                      aria-label="Zamknij"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </Dialog.Close>
                </div>

                {/* Body */}
                <div className="overflow-y-auto">
                  {/* Image */}
                  <div className="relative aspect-[16/9] bg-secondary border-b border-border/60">
                    <div className="absolute inset-0 grid-pattern-dense opacity-25" />
                    {activeStudy.images && activeStudy.images.length > 0 ? (
                      <ImageSequence images={activeStudy.images} intervalMs={2600} crossfadeMs={900} />
                    ) : (
                      <div
                        className="absolute inset-0 bg-cover bg-center"
                        style={{ backgroundImage: `url(${activeStudy.image})` }}
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent" />
                    <div className="absolute top-4 left-4">
                      <span className="ui-badge bg-accent/90 text-accent-foreground border-accent/30">
                        {activeStudy.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="px-6 py-6 space-y-6">
                    {/* Goals (Cel/Efekt) */}
                    {activeStudy.goals && activeStudy.goals.length > 0 && (
                      <div className="grid md:grid-cols-2 gap-4">
                        {activeStudy.goals.slice(0, 2).map((g: { label: string; value: string }) => (
                          <div
                            key={g.label}
                            className="p-4 rounded-lg bg-card/40 border border-border/60"
                          >
                            <div className="ui-kicker ui-kicker-muted">
                              {g.label}
                            </div>
                            <div className="mt-2 text-sm md:text-base font-semibold text-accent leading-snug">
                              {g.value}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* MDX body (compiled to sanitized HTML) */}
                    {(isLoadingHtml || activeHtml) && (
                      <div className="mdx-content space-y-4">
                        {isLoadingHtml ? (
                          <div className="ui-kicker ui-kicker-muted">Ładowanie…</div>
                        ) : (
                          <div dangerouslySetInnerHTML={{ __html: activeHtml }} />
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  )
}
