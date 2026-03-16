"use client";

import { useGetDollarRate } from "@/src/shared/hooks/use-dollar-rate";
import Loading from "../loading";
import Error from "../error";

export default function Contacts() {
  const { data, isLoading, isError } = useGetDollarRate();

  if (isLoading) return <Loading />;

  if (isError) return <Error />;

  return (
    <>
      <h2 className="mt-4 text-center text-xl">{data?.USDBRL.name}</h2>

      <div className="mt-2 flex flex-col gap-2 items-center">
        <p>Alta: {data?.USDBRL.high}</p>
        <p>Mínima: {data?.USDBRL.low}</p>
      </div>
    </>
  );
}
