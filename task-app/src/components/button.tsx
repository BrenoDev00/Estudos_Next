"use client";

import { ButtonProps } from "@/types/components";
import { twMerge } from "tailwind-merge";

export const Button = ({ variant, className, type, children, onClick }: ButtonProps) => {
  let buttonStyle: string;

  if (variant === "primary") {
    buttonStyle = twMerge(
      "bg-black rounded-full py-[6px] px-[30px]",
      "border border-white cursor-pointer",
      "hover:bg-white hover:text-bg-black transition duration-300"
    );

    return (
      <button onClick={onClick} type={type} className={twMerge(buttonStyle, className)}>
        {children}
      </button>
    );
  }

  if (variant === "secondary") {
    buttonStyle = twMerge(
      "bg-blue rounded-[8px] py-[6px] px-[30px] cursor-pointer"
    );

    return (
      <button onClick={onClick} type={type} className={twMerge(buttonStyle, className)}>
        {children}
      </button>
    );
  }
};
