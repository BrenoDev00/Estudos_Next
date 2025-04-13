import Link from "next/link";
import { twMerge } from "tailwind-merge";
import { Button } from "./button";

export const Header = () => {
  return (
    <header
      className={twMerge(
        "flex items-center justify-around p-[10px]",
        "bg-[#0F0F0F] max-md:justify-between px-[30px]"
      )}
    >
      <nav>
        <Link href={"/"} className="text-[32px]">
          <h1 className="flex items-center gap">
            Tarefas <span className="text-[#EA3140] font-semibold">+</span>
          </h1>
        </Link>
      </nav>

      <Button type="button" variant="primary">
        Minha Conta
      </Button>
    </header>
  );
};
