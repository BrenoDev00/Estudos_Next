import { User } from "../models/user-data";
import { signIn, SignInResponse } from "next-auth/react";

export class AuthService {
  login = async (
    userCredentials: User,
  ): Promise<SignInResponse | undefined> => {
    const { username, password } = userCredentials;

    return await signIn("credentials", {
      username,
      password,
      redirect: false,
    });
  };
}
