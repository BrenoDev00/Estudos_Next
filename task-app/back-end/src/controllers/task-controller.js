import { TaskRepository } from "../repositories/task-repository.js";
import { taskSchema } from "../schemas/task-schema.js";
import { uuidSchema } from "../schemas/uuid-schema.js";
import { taskColumnsToInsert } from "../utils/constants/table-columns.js";
import snakeCaseKeys from "snakecase-keys";

export class TaskController {
  async getTasksByMostRecentDate(request, response) {
    const result = await new TaskRepository().getTasksByMostRecentDate();

    return response.status(200).send(result);
  }

  async createTask(request, response) {
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

    return response
      .status(201)
      .send({ message: "Tarefa adicionada com sucesso!" });
  }

  async removeTaskById(request, response) {
    const { id } = request.params;

    const idValidation = uuidSchema.safeParse(id);

    if (!idValidation.success)
      return response.status(400).send(idValidation.error.errors);

    const searchedId = await new TaskRepository().getTaskById(id);

    if (!searchedId.length)
      return response.status(404).send({ message: "Tarefa não encontrada." });

    await new TaskRepository().removeTaskById(id);

    return response
      .status(200)
      .send({ message: "Tarefa removida com sucesso!" });
  }
}
