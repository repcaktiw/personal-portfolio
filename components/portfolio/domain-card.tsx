import { cn } from "@/lib/utils"

interface DomainCardProps {
  icon: React.ReactNode
  title: string
  description: string
  keywords?: string[]
  className?: string
}

export function DomainCard({ icon, title, description, keywords, className }: DomainCardProps) {
  return (
    <div
      className={cn(
        "group relative p-6 rounded-lg bg-card/50 border border-border border-glow card-hover transition-smooth",
        className
      )}
    >
      {/* Icon */}
      <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center text-accent mb-4 group-hover:bg-accent/10 transition-smooth">
        {icon}
      </div>

      <h3 className="ui-h3 mb-2">{title}</h3>
      <p className="ui-body-sm">{description}</p>
      {!!keywords?.length && (
        <div className="mt-3 flex flex-wrap items-center text-[11px] leading-relaxed text-muted-foreground/80">
          {keywords.map((k, idx) => (
            <span key={`${k}-${idx}`} className="inline-flex items-center">
              <span className="font-mono">{k}</span>
              {idx < keywords.length - 1 && (
                <span className="mx-2 text-muted-foreground/40" aria-hidden="true">
                  ·
                </span>
              )}
            </span>
          ))}
        </div>
      )}

      {/* Corner decoration */}
      <div className="absolute top-3 right-3 w-3 h-3 border-t border-r border-accent/40 rounded-tr opacity-0 group-hover:opacity-100 transition-smooth" />
    </div>
  )
}
