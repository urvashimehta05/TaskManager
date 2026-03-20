import { createFileRoute } from "@tanstack/react-router"
import { TaskTable } from "#/tasks/components/task-table"

export const Route = createFileRoute("/")({
  component: TasksPage,

  validateSearch: (search) => ({
    search: search.search ?? "",
    status: search.status ?? "all",
    priority: search.priority ?? "all",
  }),
})

function TasksPage() {
  return <TaskTable />
}