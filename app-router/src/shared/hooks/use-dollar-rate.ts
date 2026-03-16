import { DollarRateData } from "@/src/models/dollar-rate-data";
import { DollarRateService } from "@/src/services/dollar-rate-service";
import { useQuery } from "@tanstack/react-query";

export function useGetDollarRate() {
  const dollarRateService = new DollarRateService();

  const { data, isLoading, isError } = useQuery<DollarRateData>({
    queryKey: ["dollar-rate"],
    queryFn: dollarRateService.getRate,
    refetchOnWindowFocus: false,
  });

  return {
    data,
    isLoading,
    isError,
  };
}
