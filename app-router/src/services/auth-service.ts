import { User } from "../models/user-data";
import { signIn, SignInResponse } from "next-auth/react";

export class AuthService {
  login = async (
    userCredentials: User,
  ): Promise<SignInResponse | undefined> => {
    const { username, password } = userCredentials;

    const response = await signIn("credentials", {
      username,
      password,
      redirect: false,
    });

    return response;
  };
}
