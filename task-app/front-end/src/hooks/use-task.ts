import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { BASE_API_URL } from "@/utils/base-api-url";
import { NewTaskInterface } from "@/types/task/task.type";

export function useCreateTask() {
  const createTaskMutation = useMutation({
    mutationFn: async (data: NewTaskInterface) => {
      await axios.post<NewTaskInterface>(`${BASE_API_URL}/tasks`, data);
    },
  });

  return { createTaskMutation };
}
