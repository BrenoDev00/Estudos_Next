import { TaskRepository } from "../repositories/task-repository.js";
import { Router } from "express";
import { taskColumnsToInsert } from "../utils/constants/table-columns.js";
import snakeCaseKeys from "snakecase-keys";
import { taskSchema } from "../schemas/task-schema.js";

export const taskRouter = Router();

taskRouter.get("/", async (request, response) => {
  const result = await new TaskRepository().getTasksByMostRecentDate();

  return response.status(200).send(result);
});

taskRouter.post("/", async (request, response) => {
  const { body } = request;

  const bodyValidation = taskSchema.safeParse(body);

  if (!bodyValidation.success)
    return response.status(400).send(bodyValidation.error.errors);

  const formatedBody = snakeCaseKeys(body);

  const values = taskColumnsToInsert.reduce((acc, columnName) => {
    acc.push(formatedBody[columnName]);

    return acc;
  }, []);

  await new TaskRepository().createTask(values);

  return response.status(201).send({ message: "Tarefa criada com sucesso!" });
});
