"use client";

import {
  Header,
  ProtectedPage,
  Textarea,
  Button,
  Task,
  FormFieldErrorMessage,
} from "@/components";
import { twMerge } from "tailwind-merge";
import { useForm } from "react-hook-form";
import { newTaskSchemaType } from "@/types/schemas";
import { newTaskSchema } from "@/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { useCreateTask } from "@/hooks";
import { useSession } from "next-auth/react";

export default function Dashboard() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<newTaskSchemaType>({
    resolver: zodResolver(newTaskSchema),
  });

  const { createTaskMutation } = useCreateTask();

  const { data: currentSession } = useSession();

  function handleCreateTask(data: newTaskSchemaType) {
    const result = {
      ...data,
      userEmail: currentSession?.user?.email as string,
    };

    createTaskMutation.mutate(result);
  }

  // if (createTaskMutation.isError) alert("Erro!");

  return (
    <ProtectedPage>
      <Header />

      <main className={twMerge("bg-bg-black flex flex-col items-center")}>
        <section
          className={twMerge(
            "w-[1024px] px-[128px] pb-[36px]",
            "max-md:w-[800px] max-sm:w-[600px]"
          )}
        >
          <div>
            <h1
              className={twMerge(
                "font-bold text-[38px] mt-[32px]",
                "max-md:text-[30px] max-sm:text-[25px]"
              )}
            >
              Qual sua tarefa?
            </h1>

            <form
              onSubmit={handleSubmit(handleCreateTask)}
              className="flex flex-col gap-[16px]"
            >
              <div className="flex flex-col gap-[13px]">
                <label
                  htmlFor="task-field"
                  className={twMerge("max-md:text-[14px] max-sm:text-[12px]")}
                >
                  Informe a tarefa
                </label>
                <Textarea
                  id={"task-field"}
                  rows={5}
                  cols={8}
                  placeholder="Digite sua tarefa..."
                  className="resize-none"
                  register={register("task")}
                />
                {errors.task && (
                  <FormFieldErrorMessage message={errors.task.message!} />
                )}
              </div>

              <div className="flex gap-[13px] items-center">
                <input
                  type="checkbox"
                  id="public-task"
                  className={twMerge(
                    "w-[18px] h-[18px] cursor-pointer",
                    "max-md:w-[14px] max-md:h-[18px]"
                  )}
                  {...register("isPublic")}
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

        <section className="bg-white w-full flex flex-col items-center gap-[30px] pb-[60px] px-[20px]">
          <h2
            className={twMerge(
              "text-bg-black font-bold text-[38px] mt-[60px]",
              "max-md:text-[30px] max-sm:text-[25px]"
            )}
          >
            Minhas tarefas
          </h2>

          <div className="max-w-[1024px] text-bg-black flex flex-col gap-[16px]">
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
  );
}
