import { useMutation } from "@tanstack/react-query";
import { AuthService } from "@/src/services/auth-service";

export function useAuth() {
  const authService = new AuthService();

  const { isPending, mutate, data } = useMutation({
    mutationFn: authService.login,
  });

  return {
    isPending,
    data,
    mutate,
  };
}
