import { UserData } from "../models/user-data";
import { jsonPlaceholderApiUrl } from "../shared/constants";

export class UserService {
  create = async (userData: UserData): Promise<UserData> => {
    const response = await fetch(jsonPlaceholderApiUrl, {
      method: "POST",
      body: JSON.stringify(userData),
    });

    return await response.json();
  };
}
