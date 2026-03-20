import { useState } from "react";
import { useTaskStore } from "../store/task-store";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";

export const DeleteTask = ({ id }: { id: string }) => {
  const deleteTask = useTaskStore((s) => s.deleteTask);
  const [open, setOpen] = useState(false);

  const handleDelete = () => {
    deleteTask(id);
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button size="sm" variant="secondary">
          Delete
        </Button>
      </DialogTrigger>
      <DialogContent className="bg-sea-ink/10 backdrop-blur-md text-foreground border border-sea-ink/20 rounded-lg dark:bg-sea-ink/20 dark:border-sea-ink/40">
        <DialogHeader>
          <DialogTitle className="text-lg font-bold text-white dark:text-white">
            Delete Task
          </DialogTitle>
        </DialogHeader>

        <p className="text-sm text-white font-semibold dark:text-white/90">
          Are you sure you want to delete this task? This action cannot be undone.
        </p>

        <div className="flex justify-end gap-2 mt-4">
          <Button
            variant="outline"
            onClick={() => setOpen(false)}
            className="text-white font-bold dark:bg-slate-700/50 dark:hover:bg-slate-700"
          >
            Cancel
          </Button>

          <Button
            variant="destructive"
            onClick={handleDelete}
            className="text-white font-bold dark:bg-red-600/70 dark:hover:bg-red-600"
          >
            Delete
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};