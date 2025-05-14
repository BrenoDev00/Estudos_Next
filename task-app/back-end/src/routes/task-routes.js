import { TaskRepository } from "../repositories/task-repository.js";
import { Router } from "express";
import { taskColumnsToInsert } from "../utils/constants/table-columns.js";

export const taskRouter = Router();

taskRouter.get("/", async (request, response) => {
  const result = await new TaskRepository().getTasksByMostRecentDate();

  return response.status(200).send(result);
});

taskRouter.post("/", async (request, response) => {
  const { body } = request;

  const values = taskColumnsToInsert.reduce((acc, columnName) => {
    acc.push(body[columnName]);

    return acc;
  }, []);

  await new TaskRepository().createTask(values);

  return response.status(201).send({ message: "Task criada com sucesso!" });
});
