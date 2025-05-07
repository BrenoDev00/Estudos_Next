import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { BASE_API_URL } from "@/utils/base-api-url";
import { NewTaskInterface, ListTasksInterface } from "@/types/task/task.type";

export function useGetTasks() {
  const {
    data: tasks,
    isError,
    isLoading,
  } = useQuery({
    queryKey: ["tasks"],
    queryFn: async (): Promise<ListTasksInterface[]> => {
      return (await axios.get(`${BASE_API_URL}/tasks`)).data;
    },
  });

  return { tasks, isError, isLoading };
}

export function useCreateTask() {
  const createTaskMutation = useMutation({
    mutationFn: async (data: NewTaskInterface) => {
      await axios.post<NewTaskInterface>(`${BASE_API_URL}/tasks`, data, {
        withCredentials: true,
      });
    },
  });

  return { createTaskMutation };
}
