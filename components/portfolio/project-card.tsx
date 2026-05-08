import { cn } from "@/lib/utils"

interface ProjectCardProps {
  title: string
  description: string
  category: string
  tags?: string[]
  status?: "completed" | "in-progress" | "archived"
  metrics?: { label: string; value: string }[]
  className?: string
  featured?: boolean
}

export function ProjectCard({
  title,
  description,
  category,
  tags,
  status = "completed",
  metrics,
  className,
  featured = false,
}: ProjectCardProps) {
  const statusColors = {
    completed: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
    "in-progress": "bg-amber-500/20 text-amber-400 border-amber-500/30",
    archived: "bg-zinc-500/20 text-zinc-400 border-zinc-500/30",
  }

  return (
    <article
      className={cn(
        "group relative flex flex-col rounded-lg overflow-hidden",
        "bg-card/50 backdrop-blur-sm",
        "border border-border",
        "card-hover border-glow",
        featured && "md:col-span-2 md:flex-row",
        className
      )}
    >
      {/* Project visual placeholder */}
      <div
        className={cn(
          "relative bg-secondary/30 grid-pattern-dense",
          featured ? "md:w-1/2 h-48 md:h-auto" : "h-40"
        )}
      >
        {/* Decorative elements */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-16 h-16 rounded-lg border border-border/50 bg-card/50 flex items-center justify-center">
            <svg
              className="w-8 h-8 text-accent/50"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1}
                d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2"
              />
            </svg>
          </div>
        </div>

        {/* Category badge */}
        <div className="absolute top-4 left-4">
          <span className="ui-badge">
            {category}
          </span>
        </div>

        {/* Status indicator */}
        <div className="absolute top-4 right-4">
          <span
            className={cn(
              "ui-badge",
              statusColors[status]
            )}
          >
            {status.replace("-", " ")}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className={cn("flex flex-col p-6", featured && "md:w-1/2 md:justify-center")}>
        <h3 className="ui-h3-lg mb-2 transition-smooth group-hover:text-accent">
          {title}
        </h3>

        <p className="ui-body-sm mb-4">
          {description}
        </p>

        {/* Metrics */}
        {metrics && metrics.length > 0 && (
          <div className="flex gap-6 mb-4 py-4 border-y border-border/50">
            {metrics.map((metric) => (
              <div key={metric.label}>
                <div className="ui-metric">{metric.value}</div>
                <div className="ui-kicker ui-kicker-muted">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tags */}
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-auto">
            {tags.map((tag) => (
              <span
                key={tag}
                className="ui-tag"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </article>
  )
}
