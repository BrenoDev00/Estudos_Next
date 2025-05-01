import { BaseRepository } from "./base-repository.js";
import { taskColumns } from "../utils/constants/table-columns.js";

export class TaskRepository extends BaseRepository {
  async createTask(values) {
    try {
      return await super.insertInto("public.task", taskColumns, values);
    } catch (error) {
      throw error;
    }
  }
}
