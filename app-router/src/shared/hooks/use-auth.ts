import { useMutation } from "@tanstack/react-query";
import { AuthService } from "@/src/services/auth-service";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

export function useGetAuth() {
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

export function useAuthSession() {
  const { status } = useSession();

  const isAuthenticated = () => {
    if (status === "unauthenticated") {
      redirect("/");
    }
  };

  return { isAuthenticated };
}
