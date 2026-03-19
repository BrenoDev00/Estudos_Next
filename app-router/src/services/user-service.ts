import { User } from "../models/user-data";
import { jsonPlaceholderApiUrl } from "../shared/constants";

export class UserService {
  create = async (userData: User): Promise<User> => {
    const response = await fetch(jsonPlaceholderApiUrl, {
      method: "POST",
      body: JSON.stringify(userData),
    });

    return await response.json();
  };
}
