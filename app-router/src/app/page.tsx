"use client";

import { FormEvent, useState } from "react";
import { useAuth } from "../shared/hooks/use-auth";
import { User } from "../models/user-data";
import Loading from "./loading";

export default function Home() {
  const { isPending, mutate, data } = useAuth();

  const [userForm, setUserForm] = useState<User>({
    username: "",
    password: "",
  });

  const handleFormSubmit = (event: FormEvent): void => {
    event.preventDefault();

    mutate(userForm);

    if (data?.ok) {
      alert(JSON.stringify(data));
    }

    if (data?.error && data?.status === 401) {
      alert("Credenciais inválidas");
    }

    if (data?.error && data?.status !== 401) {
      alert("Erro interno, tente novamente");
    }
  };

  if (isPending) return <Loading />;

  return (
    <div className="flex flex-col gap-4 items-center mt-[10%]">
      <h1 className="text-lg">Login</h1>

      <form
        onSubmit={handleFormSubmit}
        className="flex flex-col gap-2 border-2 border-gray-500 p-4"
      >
        <input
          onInput={(event) =>
            setUserForm({ ...userForm, username: event.currentTarget.value })
          }
          required
          value={userForm.username}
          type="text"
          placeholder="name"
          className="p-2 border border-gray-800 "
        />

        <input
          required
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
