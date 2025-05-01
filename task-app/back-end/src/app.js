import "dotenv/config";
import express from "express";
import helmet from "helmet";
import { taskRouter } from "./routes/task-routes.js";

const app = express();

app.use(helmet());

app.use(express.json());

app.use("/tasks", taskRouter);

function bootstrap() {
  const port = 3001;

  app.listen(3001, () => console.log("API rodando na porta", port));
}

bootstrap();
