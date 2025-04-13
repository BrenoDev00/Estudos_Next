import { ButtonProps } from "@/types/components/button.type";
import { twMerge } from "tailwind-merge";

export const Button = ({ variant, className, type, children }: ButtonProps) => {
  let buttonStyle: string;

  if (variant === "primary") {
    buttonStyle = twMerge(
      "bg-[#0F0F0F] rounded-full py-[6px] px-[30px] border border-white cursor-pointer"
    );

    return (
      <button type={type} className={twMerge(buttonStyle, className)}>
        {children}
      </button>
    );
  }

  if (variant === "secondary") {
    buttonStyle = twMerge(
      "bg-[#3183FF] rounded-[8px] py-[6px] px-[30px] cursor-pointer"
    );

    return (
      <button type={type} className={twMerge(buttonStyle, className)}>
        {children}
      </button>
    );
  }
};
