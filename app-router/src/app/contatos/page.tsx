"use client";

import { useGetDollarRate } from "@/src/shared/hooks/use-dollar-rate";
import Loading from "../loading";
import Error from "../error";
import { useAuthSession } from "@/src/shared/hooks/use-auth";
import { signOut } from "next-auth/react";

export default function Contacts() {
  const { data, isLoading, isError } = useGetDollarRate();

  const { isAuthenticated } = useAuthSession();

  isAuthenticated();

  if (isLoading) return <Loading />;

  if (isError) return <Error />;

  return (
    <>
      <div className="mt-6 ml-6">
        <button
          onClick={() => signOut()}
          type="submit"
          className="bg-blue-500 rounded-md py-2 px-4 border-none cursor-pointer"
        >
          Sair
        </button>
      </div>

      <h2 className="mt-4 text-center text-xl">{data?.USDBRL.name}</h2>

      <div className="mt-2 flex flex-col gap-2 items-center">
        <p>Alta: {data?.USDBRL.high}</p>
        <p>Mínima: {data?.USDBRL.low}</p>
      </div>
    </>
  );
}
