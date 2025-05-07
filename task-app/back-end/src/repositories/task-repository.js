import { BaseRepository } from "./base-repository.js";
import {
  taskColumnsToInsert,
  taskColumnsToGet,
} from "../utils/constants/table-columns.js";

export class TaskRepository extends BaseRepository {
  async getTasks() {
    try {
      return await super.selectFrom(taskColumnsToGet, "public.task");
    } catch (error) {
      throw error;
    }
  }

  async createTask(values) {
    try {
      return await super.insertInto("public.task", taskColumnsToInsert, values);
    } catch (error) {
      throw error;
    }
  }
}
