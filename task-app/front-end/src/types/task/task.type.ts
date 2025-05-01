import { newTaskSchemaType } from "../schemas";

export interface NewTaskInterface extends newTaskSchemaType {
  userEmail: string;
}
