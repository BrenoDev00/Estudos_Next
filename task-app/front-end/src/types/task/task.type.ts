import { newTaskSchemaType } from "../schemas";

export interface ListTasksInterface extends newTaskSchemaType {
  taskId: string;
  userEmail: string;
}

export interface NewTaskInterface extends newTaskSchemaType {
  userEmail: string;
}
