import { DollarRateData } from "@/src/models/dollar-rate-data";
import { apiUrl } from "../constants";

export function useDollarRate() {
  const getDollarRate = async (): Promise<DollarRateData | undefined> => {
    try {
      const request = await fetch(apiUrl);

      const response: DollarRateData = await request.json();

      return response;
    } catch (error) {
      console.error(error);
    }
  };

  return { getDollarRate };
}
