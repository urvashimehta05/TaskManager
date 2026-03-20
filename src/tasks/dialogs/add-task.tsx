import { TaskFormDialog } from "./task-form-dialog"

export const AddTask = ({ onClose }: { onClose?: () => void }) => {
  return <TaskFormDialog mode="add" onClose={onClose} />
}