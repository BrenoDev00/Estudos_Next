import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { BASE_API_URL } from "@/utils/base-api-url";
import { NewTaskInterface, ListTasksInterface } from "@/types/task/task.type";

export function useGetTasks() {
  const {
    data: tasks,
    isError,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["tasks"],
    queryFn: async (): Promise<ListTasksInterface[]> => {
      return (await axios.get<ListTasksInterface[]>(`${BASE_API_URL}/tasks`))
        .data;
    },
    refetchOnWindowFocus: false,
  });

  return { tasks, isError, isLoading, refetch };
}

export function useCreateTask() {
  const createTaskMutation = useMutation({
    mutationFn: async (data: NewTaskInterface): Promise<void> => {
      await axios.post<NewTaskInterface>(`${BASE_API_URL}/tasks`, data, {
        withCredentials: true,
      });
    },
    retry: false,
  });

  return { createTaskMutation };
}

export function useRemoveTask() {
  const removeTaskMutation = useMutation({
    mutationFn: async (taskId: string): Promise<void> => {
      await axios.delete(`${BASE_API_URL}/tasks/${taskId}`, {
        withCredentials: true,
      });
    },
    retry: false,
  });

  return { removeTaskMutation };
}
