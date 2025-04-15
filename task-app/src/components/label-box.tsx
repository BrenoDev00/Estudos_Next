import { twMerge } from "tailwind-merge";
import { LabelBoxProps } from "@/types/components/label-box.type";

export const LabelBox = ({ children, className }: LabelBoxProps) => {
  return (
    <article
      className={twMerge(
        "font-bold text-[22px] text-bg-black bg-white text-center w-[300px]",
        "py-[14px] px-[44px] rounded-[6px]",
        "max-md:text-[12px] max-sm:text-[10px] max-md:py-[10px] max-md:px-[30px]",
        className
      )}
    >
      {children}
    </article>
  );
};
