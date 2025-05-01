import { TaskRepository } from "../repositories/task-repository.js";
import { Router } from "express";
import { taskColumns } from "../utils/constants/table-columns.js";

export const taskRouter = Router();

taskRouter.post("/", async (request, response) => {
  const { body } = request;

  const values = taskColumns.reduce((acc, columnName) => {
    acc.push(body[columnName]);

    return acc;
  }, []);

  await new TaskRepository().createTask(values);

  return response.status(201).send({ message: "Task criada com sucesso!" });
});
