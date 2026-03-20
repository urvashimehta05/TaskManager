import { createFileRoute } from "@tanstack/react-router"
import { TaskTable } from "#/tasks/components/task-table"
import { z } from 'zod'
const productSearchSchema = z.object({
  search: z.string().catch(""),
  status: z.enum(["all", "todo", "in-progress", "done"]).catch("all"),
  priority: z.enum(["all", "low", "medium", "high"]).catch("all"),
})
export const Route = createFileRoute("/")({
  component: TasksPage,

 validateSearch: productSearchSchema,
})

function TasksPage() {
  return <TaskTable />
}