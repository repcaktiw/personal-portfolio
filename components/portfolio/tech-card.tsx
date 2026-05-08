import { cn } from "@/lib/utils"

interface TechCardProps {
  icon?: React.ReactNode
  title: string
  description: string
  tags?: string[]
  className?: string
  href?: string
}

export function TechCard({ 
  icon, 
  title, 
  description, 
  tags,
  className,
  href
}: TechCardProps) {
  const Wrapper = href ? 'a' : 'div'
  const wrapperProps = href ? { href, target: "_blank", rel: "noopener noreferrer" } : {}

  return (
    <Wrapper
      {...wrapperProps}
      className={cn(
        "group relative flex flex-col p-6 rounded-lg",
        "bg-card/50 backdrop-blur-sm",
        "border border-border",
        "card-hover border-glow",
        href && "cursor-pointer",
        className
      )}
    >
      {/* Corner accent */}
      <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden rounded-tr-lg">
        <div className="absolute top-0 right-0 w-px h-8 bg-gradient-to-b from-accent/50 to-transparent" />
        <div className="absolute top-0 right-0 w-8 h-px bg-gradient-to-l from-accent/50 to-transparent" />
      </div>

      {icon && (
        <div className="mb-4 p-3 w-fit rounded-md bg-secondary/50 text-accent transition-smooth group-hover:bg-accent/10">
          {icon}
        </div>
      )}

      <h3 className="ui-h3 mb-2 transition-smooth group-hover:text-accent">
        {title}
      </h3>

      <p className="ui-body-sm flex-grow">
        {description}
      </p>

      {tags && tags.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-2">
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
    </Wrapper>
  )
}

interface StatCardProps {
  value: string
  label: string
  className?: string
}

export function StatCard({ value, label, className }: StatCardProps) {
  return (
    <div className={cn(
      "p-6 rounded-lg bg-card/30 border border-border text-center",
      className
    )}>
      <div className="text-3xl md:text-4xl font-semibold text-gradient mb-2">
        {value}
      </div>
      <div className="ui-kicker ui-kicker-muted justify-center">
        {label}
      </div>
    </div>
  )
}
