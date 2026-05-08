import { cn } from "@/lib/utils"

interface SectionProps {
  children: React.ReactNode
  className?: string
  id?: string
  withGrid?: boolean
  withDots?: boolean
}

export function Section({ 
  children, 
  className, 
  id,
  withGrid = false,
  withDots = false,
}: SectionProps) {
  return (
    <section 
      id={id}
      className={cn(
        "relative py-20 md:py-28 lg:py-32",
        withGrid && "grid-pattern",
        withDots && "dot-pattern",
        className
      )}
    >
      <div className="container mx-auto px-6 md:px-8 lg:px-12">
        {children}
      </div>
    </section>
  )
}

interface SectionHeaderProps {
  label?: string
  title: string
  description?: string
  className?: string
  align?: "left" | "center"
}

export function SectionHeader({ 
  label, 
  title, 
  description, 
  className,
  align = "left"
}: SectionHeaderProps) {
  return (
    <div className={cn(
      "mb-12 md:mb-16",
      align === "center" && "text-center",
      className
    )}>
      {label && (
        <span className="ui-kicker ui-kicker-accent mb-4">
          <span className="w-2 h-2 rounded-full bg-accent pulse-dot" />
          {label}
        </span>
      )}
      <h2 className="ui-h2">
        {title}
      </h2>
      {description && (
        <p className="mt-4 ui-lead max-w-2xl">
          {description}
        </p>
      )}
    </div>
  )
}
