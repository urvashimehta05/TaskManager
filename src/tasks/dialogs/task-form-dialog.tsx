import { useState } from "react";
import { useTaskStore } from "../store/task-store";
import type { Task } from "../types/task";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { CustomBtn, SharedBtn } from "#/components/shared/custom-btn";

export type TaskFormMode = "add" | "edit";

type TaskFormDialogProps = {
  mode: TaskFormMode;
  task?: Task;
  triggerLabel?: string;
  onClose?: () => void;
};

export const TaskFormDialog = ({
  mode,
  task,
  triggerLabel,
  onClose,
}: TaskFormDialogProps) => {
  const addTask = useTaskStore((s) => s.addTask);
  const updateTask = useTaskStore((s) => s.updateTask);

  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState(mode === "edit" && task ? task.title : "");
  const [description, setDescription] = useState(
    mode === "edit" && task ? task.description || "" : ""
  );
  const [status, setStatus] = useState<Task["status"]>(
    mode === "edit" && task ? task.status : "todo"
  );
  const [priority, setPriority] = useState<Task["priority"]>(
    mode === "edit" && task ? task.priority : "medium"
  );

  const isEditMode = mode === "edit";
  const dialogTitle = isEditMode ? "Edit Task" : "Add Task";
  const submitButtonText = isEditMode ? "Update" : "Add";

  const handleSubmit = () => {
    if (!title.trim()) return;

    if (isEditMode && task) {
      updateTask({
        ...task,
        title,
        description,
        status,
        priority,
      });
    } else {
      addTask({
        title,
        description,
        status,
        priority,
      });
    }

    setTitle("");
    setDescription("");
    setStatus("todo");
    setPriority("medium");

    setOpen(false);
    onClose?.();
  };

  const handleOpenChange = (newOpen: boolean) => {
    setOpen(newOpen);
    if (!newOpen) {
      if (mode === "edit" && task) {
        setTitle(task.title);
        setDescription(task.description || "");
        setStatus(task.status);
        setPriority(task.priority);
      } else {
        setTitle("");
        setDescription("");
        setStatus("todo");
        setPriority("medium");
      }
    }
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>
        {mode === "add" ? (
          <CustomBtn>{triggerLabel || "+ Add Task"}</CustomBtn>
        ) : (
          <SharedBtn>{triggerLabel || "Edit"}</SharedBtn>
        )}
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>{dialogTitle}</DialogTitle>
        </DialogHeader>

        <div className="space-y-4">
          <Input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Title"
          />

          <Input
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Description"
          />

          <div>
            <label className="text-sm font-medium">Status</label>
            <select
              value={status}
              onChange={(e) => setStatus(e.target.value as Task["status"])}
              className="w-full mt-1 px-3 py-2 border rounded-md"
            >
              <option value="todo">Todo</option>
              <option value="in-progress">In Progress</option>
              <option value="done">Done</option>
            </select>
          </div>

          <div>
            <label className="text-sm font-medium">Priority</label>
            <select
              value={priority}
              onChange={(e) =>
                setPriority(e.target.value as Task["priority"])
              }
              className="w-full mt-1 px-3 py-2 border rounded-md"
            >
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
          </div>

          <div className="flex justify-end gap-2 pt-4">
            <Button variant="outline" onClick={() => setOpen(false)}>
              Cancel
            </Button>
            <Button onClick={handleSubmit}>{submitButtonText}</Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
