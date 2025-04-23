"use client";

import { Header, ProtectedPage, Textarea, Button, Task } from "@/components";
import { SessionProvider } from "next-auth/react";
import { SessionType } from "@/types/session.type";
import { twMerge } from "tailwind-merge";

export default function Dashboard({ session }: SessionType) {
  return (
    <SessionProvider session={session}>
      <ProtectedPage>
        <Header />

        <main className={twMerge("bg-bg-black flex flex-col items-center")}>
          <section className="w-[1024px] px-[128px] pb-[36px] ">
            <div>
              <h1
                className={twMerge(
                  "font-bold text-[38px] mt-[32px]",
                  "max-md:text-[30px] max-sm:text-[25px]"
                )}
              >
                Qual sua tarefa?
              </h1>

              <form className="flex flex-col gap-[16px]">
                <div className="flex flex-col gap-[13px]">
                  <label
                    htmlFor="task-field"
                    className={twMerge("max-md:text-[14px] max-sm:text-[12px]")}
                  >
                    Informe a tarefa
                  </label>
                  <Textarea
                    id={"task-field"}
                    rows={8}
                    cols={8}
                    placeholder="Digite sua tarefa..."
                    className="resize-none"
                  />
                </div>

                <div className="flex gap-[13px] items-center">
                  <input
                    type="checkbox"
                    id="public-task"
                    className={twMerge(
                      "w-[18px] h-[18px] cursor-pointer",
                      "max-md:w-[14px] max-md:h-[18px]"
                    )}
                  />
                  <label
                    htmlFor="public-task"
                    className={twMerge(
                      "font-medium",
                      "max-md:text-[14px] max-sm:text-[12px]"
                    )}
                  >
                    Deixar tarefa pública
                  </label>
                </div>

                <Button type="submit" variant="secondary">
                  Registrar
                </Button>
              </form>
            </div>
          </section>

          <section className="bg-white w-full flex flex-col items-center gap-[30px] pb-[60px]">
            <h2
              className={twMerge(
                "text-bg-black font-bold text-[38px] mt-[60px]",
                "max-md:text-[30px] max-sm:text-[25px]"
              )}
            >
              Minhas tarefas
            </h2>

            <div className="w-[1024px] text-bg-black flex flex-col gap-[16px]">
              <Task
                variant="newTask"
                text="Lorem ipsum dolor sit amet consectetur. Elementum pulvinar eget ut in pulvinar enim vestibulum curabitur aenean. Lorem ipsum dolor sit amet consectetur. Elementum pulvinar eget ut in pulvinar enim vestibulum curabitur aenean."
              />
              <Task
                variant="newTask"
                text="Lorem ipsum dolor sit amet consectetur. Elementum pulvinar eget ut in pulvinar enim vestibulum curabitur aenean. Lorem ipsum dolor sit amet consectetur. Elementum pulvinar eget ut in pulvinar enim vestibulum curabitur aenean. Lorem ipsum dolor sit amet consectetur. Elementum pulvinar eget ut in pulvinar enim vestibulum curabitur aenean."
              />
              <Task
                variant="newTask"
                text="Lorem ipsum dolor sit amet consectetur. Elementum pulvinar eget ut in pulvinar enim vestibulum curabitur aenean. Lorem ipsum dolor sit amet consectetur. Elementum pulvinar eget ut in pulvinar enim vestibulum curabitur aenean."
              />
              <Task
                variant="newTask"
                text="Lorem ipsum dolor sit amet consectetur. Elementum pulvinar eget ut in pulvinar enim vestibulum curabitur aenean. Lorem ipsum dolor sit amet consectetur. Elementum pulvinar eget ut in pulvinar enim vestibulum curabitur aenean."
              />
              <Task
                variant="newTask"
                text="Lorem ipsum dolor sit amet consectetur. Elementum pulvinar eget ut in pulvinar enim vestibulum curabitur aenean. Lorem ipsum dolor sit amet consectetur. Elementum pulvinar eget ut in pulvinar enim vestibulum curabitur aenean."
              />
            </div>
          </section>
        </main>
      </ProtectedPage>
    </SessionProvider>
  );
}
