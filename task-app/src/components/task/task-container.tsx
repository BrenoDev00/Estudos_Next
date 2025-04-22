import { twMerge } from "tailwind-merge";
import { TaskContainerProps } from "@/types/components";

export const TaskContainer = ({ className }: TaskContainerProps) => {
  return (
    <article
      className={twMerge(
        "border border-dark-gray rounded-[8px]",
        "pt-[10px] pb-[15px] pl-[15px] pr-[20px]",
        className
      )}
    ></article>
  );
};
