"use client"

import { useRef, useState } from "react"
import { cn } from "@/lib/utils"
import { ImageSequence } from "./image-sequence"

interface CaseStudy {
  id: string
  title: string
  subtitle: string
  category: string
  image: string
  images?: string[]
  metrics?: { label: string; value: string }[]
}

interface CaseStudyCarouselProps {
  studies: CaseStudy[]
  className?: string
}

export function CaseStudyCarousel({ studies, className }: CaseStudyCarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

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
            <div className="relative aspect-[16/10] rounded-lg overflow-hidden bg-secondary border border-border border-glow">
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
                <span className="px-3 py-1.5 text-xs font-mono uppercase tracking-wider bg-accent/90 text-accent-foreground rounded">
                  {study.category}
                </span>
              </div>

              {/* Content overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-2 group-hover:text-gradient transition-smooth">
                  {study.title}
                </h3>
                <p className="text-sm text-muted-foreground line-clamp-2">
                  {study.subtitle}
                </p>

                {/* Goal / Outcome */}
                {study.metrics && study.metrics.length > 0 && (
                  <div className="mt-4 pt-4 border-t border-border/50 space-y-3">
                    <div className="grid grid-cols-[4.5rem_1fr] gap-x-3">
                      <div className="text-xs text-muted-foreground uppercase tracking-wider">
                        Cel:
                      </div>
                      <div className="text-sm md:text-base font-semibold text-accent font-mono leading-snug">
                        {study.metrics[0]?.value}
                      </div>
                    </div>
                    <div className="grid grid-cols-[4.5rem_1fr] gap-x-3">
                      <div className="text-xs text-muted-foreground uppercase tracking-wider">
                        Efekt:
                      </div>
                      <div className="text-sm md:text-base font-semibold text-accent font-mono leading-snug">
                        {study.metrics[1]?.value}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Corner accent */}
              <div className="absolute top-3 right-3 w-4 h-4 border-t border-r border-accent/60 rounded-tr opacity-0 group-hover:opacity-100 transition-smooth" />
            </div>
          </article>
        ))}
      </div>

      {/* Scroll indicator line */}
      <div className="mt-6 h-px bg-border relative overflow-hidden">
        <div className="absolute inset-y-0 left-0 w-1/3 bg-accent/50 animate-pulse" />
      </div>
    </div>
  )
}
