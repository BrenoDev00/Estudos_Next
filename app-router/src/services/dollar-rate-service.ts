import { DollarRateData } from "../models/dollar-rate-data";
import { awesomeApiUrl } from "../shared/constants";

export class DollarRateService {
  getRate = async (): Promise<DollarRateData> => {
    const response = await fetch(awesomeApiUrl);

    return await response.json();
  };
}
