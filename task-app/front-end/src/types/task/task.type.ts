import { newTaskSchemaType } from "../schemas";

export interface ListTasksInterface extends newTaskSchemaType {
  id: string;
  userEmail: string;
}

export interface NewTaskInterface extends newTaskSchemaType {
  userEmail: string;
}
