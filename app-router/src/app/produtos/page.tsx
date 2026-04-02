"use client";

import { useAuthSession } from "@/src/shared/hooks/use-auth";

export default function Products() {
  const { isAuthenticated } = useAuthSession();
  // isAuthenticated();

  return <h1>página de produtos</h1>;
}
