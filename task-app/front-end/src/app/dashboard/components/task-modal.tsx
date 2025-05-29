"use client";

import { useEffect, useState, FormEvent } from "react";
import { useForm } from "react-hook-form";
import {
  ModalBackground,
  Button,
  Textarea,
  FormFieldErrorMessage,
  SuccessModal,
  ErrorModal,
} from "@/components";
import Loading from "@/app/loading";
import { twMerge } from "tailwind-merge";
import { TaskModalProps } from "@/types/components";
import { useDeleteTask } from "@/hooks";

export const TaskModal = ({
  modalMode,
  isOpen,
  taskValues,
  onClose,
  closeModalAfterSubmission,
  refetch,
}: TaskModalProps) => {
  const {
    register,
    formState: { errors },
    setValue,
  } = useForm();

  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState<boolean>(false);

  const [isErrorModalOpen, setIsErrorModalOpen] = useState<boolean>(false);

  useEffect(() => {
    setValue("isPublic", taskValues?.isPublic);
    setValue("task", taskValues?.task);
  }, [setValue, taskValues?.isPublic, taskValues?.task]);

  const { deleteTaskMutation } = useDeleteTask();

  function handleTaskRemove(): void {
    deleteTaskMutation.mutate(taskValues?.id as string);
  }

  useEffect(() => {
    if (deleteTaskMutation.isSuccess) setIsSuccessModalOpen(true);

    if (deleteTaskMutation.isError) setIsErrorModalOpen(true);

    refetch();
  }, [refetch, deleteTaskMutation.isSuccess, deleteTaskMutation.isError]);

  if (deleteTaskMutation.isPending) return <Loading />;

  return (
    <>
      <SuccessModal
        message="Tarefa removida com sucesso!"
        isOpen={isSuccessModalOpen}
        onClose={() => setIsSuccessModalOpen(false)}
      />

      <ErrorModal
        message="Não foi possível excluir a tarefa. Tente novamente."
        isOpen={isErrorModalOpen}
        onClose={() => setIsErrorModalOpen(false)}
      />

      <ModalBackground isOpen={isOpen}>
        <article
          className={twMerge(
            "bg-black px-[50px] py-[30px] rounded-[8px]",
            "max-sm:px-[30px] max-sm:py-[20px]"
          )}
        >
          <form
            onSubmit={(event: FormEvent<HTMLFormElement>) => {
              event.preventDefault();
            }}
            className="flex flex-col gap-[16px]"
          >
            <div className="flex flex-col gap-[13px]">
              <label
                htmlFor="task-field"
                className={twMerge(
                  "text-white text-[18px] font-semibold",
                  "max-md:text-[14px] max-sm:text-[12px]"
                )}
              >
                {modalMode == "deleteTask" ? "Excluir tarefa" : "Editar tarefa"}
              </label>
              <Textarea
                id={"task-field"}
                rows={5}
                cols={35}
                placeholder="Digite sua tarefa..."
                className={twMerge(
                  "resize-none",
                  modalMode == "deleteTask" && "cursor-not-allowed"
                )}
                disabled={modalMode == "deleteTask"}
                register={register("task")}
              />
              {errors.task && (
                <FormFieldErrorMessage
                  message={errors.task.message as string}
                />
              )}
            </div>

            <div className="flex gap-[13px] items-center">
              <input
                type="checkbox"
                id="public-task"
                className={twMerge(
                  "w-[18px] h-[18px] cursor-pointer",
                  "max-md:w-[14px] max-md:h-[18px]",
                  modalMode == "deleteTask" && "cursor-not-allowed"
                )}
                disabled={modalMode == "deleteTask"}
                {...register("isPublic")}
              />
              <label
                htmlFor="public-task"
                className={twMerge(
                  "font-medium text-white",
                  "max-md:text-[14px] max-sm:text-[12px]"
                )}
              >
                Deixar tarefa pública
              </label>
            </div>

            <div
              className={twMerge(
                "flex gap-4 flex-wrap",
                "max-sm:flex-col max-sm:flex-col-reverse"
              )}
            >
              <Button
                onClick={onClose}
                type="button"
                variant="secondary"
                className={twMerge(
                  "grow bg-white text-bg-blue",
                  "border border-bg-blue border-[2px] hover:text-white"
                )}
              >
                Cancelar
              </Button>

              <Button
                type="submit"
                variant="secondary"
                className="grow"
                onClick={() => {
                  if (modalMode == "deleteTask") handleTaskRemove();
                  closeModalAfterSubmission();
                }}
              >
                {modalMode == "deleteTask" ? "Excluir" : "Editar"} tarefa
              </Button>
            </div>
          </form>
        </article>
      </ModalBackground>
    </>
  );
};
