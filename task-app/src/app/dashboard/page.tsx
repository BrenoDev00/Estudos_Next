"use client";

import { Header } from "@/components";
import { SessionProvider } from "next-auth/react";
import { SessionType } from "@/types/session.type";

export default function Dashboard({ session }: SessionType) {
  return (
    <SessionProvider session={session}>
      <Header />
      <h1>Olá mundo</h1>
    </SessionProvider>
  );
}
