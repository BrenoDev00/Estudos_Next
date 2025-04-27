import { newTaskSchema } from "@/schemas";
import z from "zod";

export type newTaskSchemaType = z.infer<typeof newTaskSchema>;
