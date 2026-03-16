import { useMutation } from "@tanstack/react-query";
import { UserService } from "@/src/services/user-service";

export function userCreateUser() {
  const userService = new UserService();

  const { isPending, isSuccess, mutate, data } = useMutation({
    mutationFn: userService.create,
  });

  return {
    isPending,
    isSuccess,
    data,
    mutate,
  };
}
