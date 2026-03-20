import { TaskFormDialog } from "./task-form-dialog"
import type { Task } from "../types/task"

export const EditTask = ({ task }: { task: Task }) => {
  return <TaskFormDialog mode="edit" task={task} />
}