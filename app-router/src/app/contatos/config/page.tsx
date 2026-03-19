"use client";

import { useAuthSession } from "@/src/shared/hooks/use-auth";

export default function Config() {
  const { isAuthenticated } = useAuthSession();
  isAuthenticated();

  return (
    <p className="text-center text-xl font-semibold">
      Página config dentro de contatos.
    </p>
  );
}
