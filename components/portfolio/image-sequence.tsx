"use client"

import { useEffect, useMemo, useState } from "react"
import { cn } from "@/lib/utils"

type ImageSequenceProps = {
  images: string[]
  intervalMs?: number
  crossfadeMs?: number
  className?: string
  paused?: boolean
}

export function ImageSequence({
  images,
  intervalMs = 1200,
  crossfadeMs = 700,
  className,
  paused = false,
}: ImageSequenceProps) {
  const safeImages = useMemo(() => images.filter(Boolean), [images])
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    setActiveIndex(0)
  }, [safeImages.length])

  useEffect(() => {
    if (paused) return
    if (safeImages.length <= 1) return

    const id = window.setInterval(() => {
      setActiveIndex((i) => (i + 1) % safeImages.length)
    }, intervalMs)

    return () => window.clearInterval(id)
  }, [paused, safeImages.length, intervalMs])

  if (safeImages.length === 0) return null

  return (
    <div className={cn("absolute inset-0", className)}>
      {safeImages.map((src, i) => (
        <div
          key={`${src}-${i}`}
          className="absolute inset-0 bg-cover bg-center will-change-opacity"
          style={{
            backgroundImage: `url(${src})`,
            opacity: i === activeIndex ? 1 : 0,
            transition: `opacity ${crossfadeMs}ms ease-in-out`,
          }}
        />
      ))}
    </div>
  )
}

