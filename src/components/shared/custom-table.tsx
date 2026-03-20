"use client"

import * as React from "react"
import {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableHead,
  TableRow,
  TableCell,
  TableCaption,
} from "@/components/ui/table"

import { cn } from "@/lib/utils"

function CustomTable({ className, children, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "w-full overflow-x-auto text-sea-ink bg-popover/70 backdrop-blur-xl  rounded-xl shadow-[0_0_0_1px_hsl(var(--primary)/0.3),0_0_20px_hsl(var(--primary)/0.15)]",
        className
      )}
      {...props}
    >
      <Table>{children}</Table>
    </div>
  )
}

function CustomTableHeader({ className, ...props }: React.ComponentProps<"thead">) {
  return (
    <TableHeader
      className={cn(
        "sticky top-0 z-10 bg-white/5 backdrop-blur-md",
        className
      )}
      {...props}
    />
  )
}

function CustomTableRow({ className, ...props }: React.ComponentProps<"tr">) {
  return (
    <TableRow
      className={cn(
        `transition-all duration-300 hover:bg-palm/5 hover:border-l-2 hover:border-palm hover:rounded-lg dark:hover:bg-palm/10 dark:hover:border-palm/60`,
        className
      )}
      {...props}
    />
  )
}

function CustomTableHead({ className, ...props }: React.ComponentProps<"th">) {
  return (
    <TableHead
      className={cn(
        "text-xs font-semibold text-palm uppercase tracking-wider hover:bg-popover text-sea-ink backdrop-blur-md dark:text-palm/80 dark:hover:bg-popover/50",
        className
      )}
      {...props}
    />
  )
}

function CustomTableCell({ className, ...props }: React.ComponentProps<"td">) {
  return (
    <TableCell
      className={cn(
        "text-xs transition-colors p-3 text-sea-ink dark:text-foreground",
        className
      )}
      {...props}
    />
  )
}

function CustomTableBody(props: React.ComponentProps<"tbody">) {
  return <TableBody {...props} />
}

function CustomTableFooter(props: React.ComponentProps<"tfoot">) {
  return <TableFooter {...props} />
}

function CustomTableCaption(props: React.ComponentProps<"caption">) {
  return <TableCaption {...props} />
}

export {
  CustomTable,
  CustomTableHeader,
  CustomTableBody,
  CustomTableFooter,
  CustomTableHead,
  CustomTableRow,
  CustomTableCell,
  CustomTableCaption,
}