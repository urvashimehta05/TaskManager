import type { ColumnDef } from "@tanstack/react-table";
import type { Task } from "../types/task";
import { EditTask } from "../dialogs/edit-task";
import { DeleteTask } from "../dialogs/delete-task";
export const columns: ColumnDef<Task>[] = [
  {
    accessorKey: "title",
    header: "Title",
    filterFn: "includesString",
  },
  {
    accessorKey: "status",
    header: "Status",
  },
  {
    accessorKey: "priority",
    header: "Priority",
  },
  {
    accessorKey: "createdAt",
    header: "Created At",
    cell: ({ row }) =>
      new Date(row.original.createdAt).toLocaleDateString(),
  },
  {
  id: "actions",
  header: "Actions",
  cell: ({ row }) => {
    const task = row.original;

    return (
      <div className="flex gap-2">
        <EditTask task={task} />
        <DeleteTask id={task.id} />
      </div>
    );
  },
},
  
];
