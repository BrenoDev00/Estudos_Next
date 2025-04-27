import { UseFormRegisterReturn } from "react-hook-form";

export interface TextareaProps {
  id: string;
  rows: number;
  cols: number;
  className?: string;
  placeholder?: string;
  register: UseFormRegisterReturn;
}
