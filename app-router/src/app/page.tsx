"use client";

import { FormEvent, useState } from "react";
import { userCreateUser } from "../shared/hooks/use-user";
import { User } from "../models/user-data";
import Loading from "./loading";

export default function Home() {
  const { isPending, isSuccess, mutate, data } = userCreateUser();

  const [userForm, setUserForm] = useState<User>({
    username: "",
    password: "",
  });

  const handleFormSubmit = (event: FormEvent): void => {
    event.preventDefault();

    mutate(userForm);

    if (isSuccess) {
      alert(JSON.stringify(data));
    } else {
      alert("Erro ao submeter formulário");
    }
  };

  if (isPending) return <Loading />;

  return (
    <div className="flex flex-col gap-4 items-center mt-[10%]">
      <h1 className="text-lg text-center">Login</h1>

      <form
        onSubmit={handleFormSubmit}
        className="flex flex-col gap-2 border-2 border-gray-500 p-4"
      >
        <input
          onInput={(event) =>
            setUserForm({ ...userForm, username: event.currentTarget.value })
          }
          value={userForm.username}
          type="text"
          placeholder="name"
          className="p-2 border border-gray-800 "
        />

        <input
          onInput={(event) =>
            setUserForm({ ...userForm, password: event.currentTarget.value })
          }
          value={userForm.password}
          type="password"
          placeholder="password"
          className="p-2 border border-gray-800 "
        />

        <button
          type="submit"
          className="bg-blue-500 rounded-md p-2 border-none cursor-pointer"
        >
          Enviar
        </button>
      </form>
    </div>
  );
}
