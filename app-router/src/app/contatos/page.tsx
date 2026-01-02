"use client";

import { DollarRateData } from "@/src/models/dollar-rate-data";
import { useDollarRate } from "@/src/shared/hooks/use-dollar-rate";
import { useState, useEffect } from "react";

export default function Contacts() {
  const { getDollarRate } = useDollarRate();

  const [dollarRateData, setDollarRateData] = useState<DollarRateData>();

  useEffect(() => {
    const loadDollarRate = async (): Promise<void> => {
      const dollarRateData = await getDollarRate();

      setDollarRateData(dollarRateData);
    };

    loadDollarRate();
  }, []);

  return (
    <>
      <h1>Página de contatos</h1>;
      <h2 className="mt-4 text-center text-xl">
        {dollarRateData?.USDBRL.name}
      </h2>
      <div className="mt-2 flex flex-col gap-2 items-center">
        <p>Alta: {dollarRateData?.USDBRL.high}</p>
        <p>Mínima: {dollarRateData?.USDBRL.low}</p>
      </div>
    </>
  );
}
