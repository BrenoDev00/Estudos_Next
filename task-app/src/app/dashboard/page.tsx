"use client";

import { Header, ProtectedPage } from "@/components";
import { SessionProvider } from "next-auth/react";
import { SessionType } from "@/types/session.type";

export default function Dashboard({ session }: SessionType) {
  return (
    <SessionProvider session={session}>
      <ProtectedPage>
        <Header />
        <h1>Olá mundo</h1>
      </ProtectedPage>
    </SessionProvider>
  );
}
