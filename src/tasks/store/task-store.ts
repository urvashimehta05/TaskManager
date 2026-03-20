import { create } from "zustand"
import { persist } from "zustand/middleware"
import type { Task } from "../types/task"

interface TaskState {
  tasks: Task[]

  search: string
  statusFilter: string
  priorityFilter: string

  addTask: (task: Omit<Task, "id" | "createdAt">) => void
  updateTask: (task: Task) => void
  deleteTask: (id: string) => void

  setSearch: (value: string) => void
  setStatusFilter: (value: string) => void
  setPriorityFilter: (value: string) => void
}

export const useTaskStore = create<TaskState>()(
  persist(
    (set) => ({
      tasks: [
        {
          id: crypto.randomUUID(),
          title: "Cook breakfast",
          description: "Prepare a healthy breakfast",
          status: "todo",
          priority: "high",
          createdAt: new Date().toISOString(),
        },
      ],

      search: "",
      statusFilter: "all",
      priorityFilter: "all",

      addTask: (taskData) =>
        set((state) => ({
          tasks: [
            ...state.tasks,
            {
              id: crypto.randomUUID(),
              createdAt: new Date().toISOString(),
              ...taskData,
            },
          ],
        })),

      updateTask: (updatedTask) =>
        set((state) => ({
          tasks: state.tasks.map((t) =>
            t.id === updatedTask.id ? updatedTask : t
          ),
        })),

      deleteTask: (id) =>
        set((state) => ({
          tasks: state.tasks.filter((t) => t.id !== id),
        })),

      setSearch: (value) => set({ search: value }),
      setStatusFilter: (value) => set({ statusFilter: value }),
      setPriorityFilter: (value) => set({ priorityFilter: value }),
    }),
    {
      name: "task-storage", 
    }
  )
)