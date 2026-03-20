import { useEffect, useState } from "react"
import {
  useReactTable,
  getCoreRowModel,
  getFilteredRowModel,
  flexRender,
} from "@tanstack/react-table"
import { ModeToggle } from "#/components/mode-toggle";
import {
  CustomTable as Table,
  CustomTableHeader as TableHeader,
  CustomTableBody as TableBody,
  CustomTableRow as TableRow,
  CustomTableHead as TableHead,
  CustomTableCell as TableCell,
} from "@/components/shared/custom-table";

import { Input } from "@/components/ui/input"
import { columns } from "./columns"
import { useTaskStore } from "../store/task-store"
import { TaskFormDialog } from "../dialogs/task-form-dialog"
import { TaskRow } from "./task-row"
import { useSearch, useNavigate } from "@tanstack/react-router"
import { Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue } from "#/components/ui/select";
export const TaskTable = () => {
  const tasks = useTaskStore((s) => s.tasks)
  const searchParams = useSearch({ from: "/" })
  const navigate = useNavigate({ from: "/" })

  const search = (searchParams as any).search ?? ""
  const status = (searchParams as any).status ?? "all"
  const priority = (searchParams as any).priority ?? "all"

  const [columnFilters, setColumnFilters] = useState<any[]>([])

  useEffect(() => {
    setColumnFilters([
      { id: "title", value: search },
      { id: "status", value: status === "all" ? "" : status },
      { id: "priority", value: priority === "all" ? "" : priority },
      
    ])
  }, [search, status, priority])

  const table = useReactTable({
    data: tasks,
    columns,
    state: { columnFilters },
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
  })
  const updateParam = (key: string, value: string) => {
    navigate({
      search: (prev: any) => ({
        ...prev,
        [key]: value === "" || value === "all" ? undefined : value,
      }),
    })
  }

  return (
    <div className="p-6 space-y-4 background-chip-line rounded-lg">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-center text-sea-ink dark:text-slate-300">Task Manager</h1>
<div className="flex items-center gap-2">
  <ModeToggle />
  <TaskFormDialog mode="add" />
</div>
      </div>

      <div className="flex flex-col justify-center items-center sm:flex-row gap-4">
        <div className="hidden sm:block">
          <Input
            placeholder="Search tasks..."
            value={search}
            onChange={(e) => updateParam("search", e.target.value)}
          />
        </div>

        <Select
          value={status}
          onValueChange={(value) => updateParam("status", value)}
        >
                    <SelectTrigger className="w-full max-w-48">
        <SelectValue placeholder="Select a Status" />
      </SelectTrigger>
          <SelectContent>
        <SelectGroup>
          <SelectLabel>Status</SelectLabel>
          <SelectItem value="all">All Status</SelectItem>
          <SelectItem value="todo">Todo</SelectItem>
          <SelectItem value="in-progress">In Progress</SelectItem>
          <SelectItem value="done">Done</SelectItem>
        </SelectGroup>
      </SelectContent>
        </Select>

        <Select
          value={priority}
          onValueChange={(value) => updateParam("priority",value)}
        >
          <SelectTrigger className="w-full max-w-48">
        <SelectValue placeholder="Select a Priority" />
      </SelectTrigger>
          <SelectContent>
        <SelectGroup>
          <SelectLabel>Priorities</SelectLabel>
          <SelectItem value="all">All Priorities</SelectItem>
          <SelectItem value="low">Low</SelectItem>
          <SelectItem value="medium">Medium</SelectItem>
          <SelectItem value="high">High</SelectItem>
        </SelectGroup>
      </SelectContent>
        </Select>
      </div>

      <div>
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <TableHead key={header.id}>
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>

          <TableBody>
            {table.getRowModel().rows.length ? (
              table.getRowModel().rows.map((row) => (
                <TaskRow key={row.id} row={row} />
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={columns.length} className="text-center">
                  No tasks found
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}