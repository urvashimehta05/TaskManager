import * as React from "react"

import { cn } from "#/lib/utils"

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
  "h-7 w-full min-w-0 rounded-lg border border-white/20 bg-white/10 backdrop-blur-md px-4 py-2 text-base transition-all outline-none focus:outline-none focus:ring-0 file:inline-flex file:h-6 file:border-0 file:bg-sea-ink file:text-xs/relaxed file:font-medium file:text-foreground placeholder:text-sea-ink/60 focus-visible:border-sea-ink focus-visible:ring-2 focus-visible:ring-sea-ink/30 hover:border-sea-ink/50 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-2 aria-invalid:ring-destructive/20 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40",
  className
      )}
      {...props}
    />
  )
}

export { Input }
