import { TaskContainer } from "./task-container";
import { TaskProps } from "@/types/components";
import { FiTrash } from "react-icons/fi";
import { FaShare } from "react-icons/fa";
import { twMerge } from "tailwind-merge";

export const Task = ({ variant, text, isPublic }: TaskProps) => {
  if (variant === "newTask") {
    return (
      <TaskContainer className="flex flex-col gap-[11px]">
        {isPublic && (
          <div className="flex gap-[14px] items-center">
            <span
              className={twMerge(
                "bg-bg-blue py-[5px] px-[11px] rounded-[4px]",
                "text-white text-[12px]",
                "max-sm:text-[10px]"
              )}
            >
              Pública
            </span>

            <div>
              <FaShare
                className={twMerge(
                  "w-[22px] h-[22px] fill-bg-blue cursor-pointer",
                  "max-sm:w-[18px] max-sm:h-[18px]"
                )}
              />
            </div>
          </div>
        )}

        <div className="flex justify-between items-center gap-[15px]">
          <p
            className={twMerge(
              "break-all",
              "max-md:text-[14px] max-sm:text-[12px]"
            )}
          >
            {text}
          </p>

          <div>
            <FiTrash
              className={twMerge(
                "stroke-red w-[25px] h-[25px] cursor-pointer",
                "max-sm:h-[20px] max-sm:w-[20px]"
              )}
            />
          </div>
        </div>
      </TaskContainer>
    );
  }
};
