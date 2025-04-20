"use client";

import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";
import { twMerge } from "tailwind-merge";
import { Button, LabelBox } from "../components";

export const Header = () => {
  const { data: session, status } = useSession();

  return (
    <header
      className={twMerge(
        "flex items-center justify-around p-[10px]",
        "bg-bg-black max-md:justify-between px-[30px]"
      )}
    >
      <nav className="flex items-center gap-[20px] font-normal">
        <Link href={"/"} className="text-[32px]">
          <p className="flex items-center gap">
            Tarefas <span className="text-red font-semibold">+</span>
          </p>
        </Link>

        {session?.user && (
          <Link href={"/dashboard"}>
            <LabelBox className="py-[6px] px-[4px] w-[130px] text-[14px]">
              Meu Painel
            </LabelBox>
          </Link>
        )}
      </nav>

      {status === "loading" ? (
        <Button type="button" variant="primary">
          Carregando...
        </Button>
      ) : session ? (
        <Button type="button" variant="primary" onClick={() => signOut()}>
          Olá {session?.user?.name}
        </Button>
      ) : (
        <Button
          type="button"
          variant="primary"
          onClick={() => signIn("google")}
        >
          Acessar
        </Button>
      )}
    </header>
  );
};
