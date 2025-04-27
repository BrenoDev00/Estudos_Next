"use client";

import { useEffect } from "react";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { ProtectedPageProps } from "@/types/components";

export const ProtectedPage = ({ children }: ProtectedPageProps) => {
  const { status } = useSession();

  useEffect(() => {
    if (status === "unauthenticated") {
      redirect("/");
    }
  }, [status]);

  return <>{children}</>;
};
