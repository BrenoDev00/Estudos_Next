import { DollarRateData } from "@/src/models/dollar-rate-data";
import { awesomeApiUrl, jsonPlaceholderApiUrl } from "../constants";
import { UserData } from "@/src/models/user-data";

export function useDollarRate() {
  const getDollarRate = async (): Promise<DollarRateData | undefined> => {
    try {
      const request = await fetch(awesomeApiUrl);

      const response: DollarRateData = await request.json();

      return response;
    } catch (error) {
      console.error(error);
    }
  };

  const createUser = async (
    userData: Omit<UserData, "id">
  ): Promise<UserData | undefined> => {
    try {
      const request = await fetch(jsonPlaceholderApiUrl, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      const response: UserData = await request.json();

      return response;
    } catch (error) {
      console.error(error);
    }
  };

  return { getDollarRate, createUser };
}
