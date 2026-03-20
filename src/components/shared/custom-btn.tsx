import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { Slot } from "radix-ui"

import { cn } from "#/lib/utils"

const buttonVariants = cva(
  "group/button inline-flex shrink-0 items-center justify-center rounded-md border border-transparent bg-clip-padding text-xs/relaxed font-medium whitespace-nowrap transition-all outline-none select-none focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring/30 active:translate-y-px disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-2 aria-invalid:ring-destructive/20 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        glass: `
relative
bg-[var(--surface)] backdrop-blur-xl
text-[var(--sea-ink)]
border border-[var(--line)]

shadow-[0_0_0_1px_rgba(23,58,64,0.2),0_8px_30px_rgba(79,184,178,0.15)]
transition-all duration-300 ease-out

hover:bg-[var(--surface-strong)]
hover:shadow-[0_0_0_1px_rgba(23,58,64,0.35),0_12px_40px_rgba(79,184,178,0.25)]
hover:-translate-y-[1px]

active:scale-[0.97]
active:shadow-[inset_0_2px_8px_rgba(23,58,64,0.25)]

dark:bg-slate-800/60 dark:border-slate-700/50 dark:text-white dark:hover:bg-slate-700/80 dark:shadow-[0_0_0_1px_rgba(255,255,255,0.1),0_8px_30px_rgba(0,0,0,0.3)]

before:absolute before:inset-0 before:rounded-md
before:bg-gradient-to-b before:from-[var(--inset-glint)] before:to-transparent
before:opacity-70 before:pointer-events-none `,
        edit: `bg-[var(--sea-ink)] text-white hover:bg-[rgba(23,58,64,0.8)] active:scale-[0.97] active:shadow-[inset_0_2px_6px_rgba(23,58,64,0.25)] dark:bg-sea-ink/80 dark:hover:bg-sea-ink dark:text-white`,
        default: "bg-[var(--sea-ink)] text-white hover:bg-[rgba(23,58,64,0.8)] dark:bg-sea-ink/80 dark:hover:bg-sea-ink dark:text-white",
        outline:
          "border-border hover:bg-input/50 hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground dark:border-slate-700 dark:bg-transparent dark:text-foreground dark:hover:bg-slate-800/60 dark:aria-expanded:bg-slate-800",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80 aria-expanded:bg-secondary aria-expanded:text-secondary-foreground dark:bg-slate-700/60 dark:text-white dark:hover:bg-slate-700",
        ghost:
          "hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground dark:hover:bg-slate-800/60 dark:text-white dark:hover:text-white",
        destructive:
          "bg-destructive/10 text-destructive hover:bg-destructive/20 focus-visible:border-destructive/40 focus-visible:ring-destructive/20 dark:bg-red-500/20 dark:text-red-400 dark:hover:bg-red-500/30 dark:focus-visible:ring-red-500/40",
        link: "text-primary underline-offset-4 hover:underline dark:text-palm dark:hover:text-palm/80",
      },
      size: {
        default:
          "h-7 gap-1 px-2 text-xs/relaxed has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3.5",
        xs: "h-5 gap-1 rounded-sm px-2 text-[0.625rem] has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-2.5",
        sm: "h-6 gap-1 px-2 text-xs/relaxed has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3",
        lg: "h-8 gap-1 px-2.5 text-xs/relaxed has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 [&_svg:not([class*='size-'])]:size-4",
        icon: "size-7 [&_svg:not([class*='size-'])]:size-3.5",
        "icon-xs": "size-5 rounded-sm [&_svg:not([class*='size-'])]:size-2.5",
        "icon-sm": "size-6 [&_svg:not([class*='size-'])]:size-3",
        "icon-lg": "size-8 [&_svg:not([class*='size-'])]:size-4",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function SharedBtn({
  className,
  variant = "edit",
  size = "default",
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot.Root : "button"

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

function CustomBtn({
  className,
  variant = "glass",
  size = "default",
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot.Root : "button"

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}
export { CustomBtn, SharedBtn, buttonVariants }
