export interface TaskProps {
  variant: "newTask" | "publicTask";
  text: string;
  isPublic: boolean;
  id: string;
  handleTaskShare: (taksId: string) => void;
}
