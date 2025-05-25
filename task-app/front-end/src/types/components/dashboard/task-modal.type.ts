import { ListTasksInterface } from "@/types/task/task.type";

export interface TaskModalProps {
  isOpen: boolean;
  modalMode: "deleteTask" | "editTask" | null;
  taskValues: ListTasksInterface | null;
  onClose: () => void;
  closeModalAfterSubmission: () => void;
  refetch: () => void;
}
