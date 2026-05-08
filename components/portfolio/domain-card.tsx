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

      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
      {!!keywords?.length && (
        <div className="mt-3 text-xs text-muted-foreground/90 font-mono">
          {keywords.map((k, idx) => (
            <span key={`${k}-${idx}`}>
              {k}
              {idx < keywords.length - 1 ? " · " : ""}
            </span>
          ))}
        </div>
      )}

      {/* Corner decoration */}
      <div className="absolute top-3 right-3 w-3 h-3 border-t border-r border-accent/40 rounded-tr opacity-0 group-hover:opacity-100 transition-smooth" />
    </div>
  )
}
