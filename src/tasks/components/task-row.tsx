import { CustomTableCell as TableCell, CustomTableRow as TableRow } from "@/components/shared/custom-table"
import { flexRender, type Row } from "@tanstack/react-table"
import type { Task } from "../types/task"
type TaskRowProps = {
  row: Row<Task>
}

export const TaskRow = ({ row }: TaskRowProps) => {
  return (
    <TableRow>
      {row.getVisibleCells().map((cell) => (
        <TableCell key={cell.id}>
          {flexRender(
            cell.column.columnDef.cell,
            cell.getContext()
          )}
        </TableCell>
      ))}
    </TableRow>
  )
}