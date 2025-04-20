"use client";

import { Header, ProtectedPage, Textarea, Button } from "@/components";
import { SessionProvider } from "next-auth/react";
import { SessionType } from "@/types/session.type";
import { twMerge } from "tailwind-merge";

export default function Dashboard({ session }: SessionType) {
  return (
    <SessionProvider session={session}>
      <ProtectedPage>
        <Header />

        <main
          className={twMerge("bg-bg-black flex items-center justify-center")}
        >
          <section className="grow max-w-[1024px] px-[128px]">
            <div>
              <h1 className="font-bold text-[38px] mt-[32px]">
                Qual sua tarefa?
              </h1>

              <form className="flex flex-col gap-[16px]">
                <div className="flex flex-col gap-[13px]">
                  <label htmlFor="task-field">Informe a tarefa</label>
                  <Textarea
                    id={"task-field"}
                    rows={8}
                    cols={8}
                    placeholder="Digite sua tarefa..."
                    className="resize-none"
                  />
                </div>

                <div className="flex gap-[13px]">
                  <input
                    type="checkbox"
                    id="public-task"
                    className="w-[18px] h-[18px] cursor-pointer"
                  />
                  <label htmlFor="public-task" className="font-medium">
                    Deixar tarefa pública
                  </label>
                </div>

                <Button type="submit" variant="secondary">
                  Registrar
                </Button>
              </form>
            </div>
          </section>
        </main>
      </ProtectedPage>
    </SessionProvider>
  );
}
