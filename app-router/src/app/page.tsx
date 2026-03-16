"use client";

import { FormEvent, useState } from "react";
import { userCreateUser } from "../shared/hooks/use-user";
import { UserData } from "../models/user-data";
import Loading from "./loading";

export default function Home() {
  const { isPending, isSuccess, mutate, data } = userCreateUser();

  const [userForm, setUserForm] = useState<UserData>({
    title: "",
    body: "",
    userId: 0,
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
    <div className="flex flex-col gap-4 items-center mt-[20%]">
      <form
        onSubmit={handleFormSubmit}
        className="flex flex-col gap-2 border-2 border-gray-500 p-4"
      >
        <input
          onInput={(event) =>
            setUserForm({ ...userForm, title: event.currentTarget.value })
          }
          value={userForm.title}
          type="text"
          placeholder="title"
          className="p-2 border border-gray-800 "
        />

        <input
          onInput={(event) =>
            setUserForm({ ...userForm, body: event.currentTarget.value })
          }
          value={userForm.body}
          type="text"
          placeholder="body"
          className="p-2 border border-gray-800 "
        />

        <input
          onInput={(event) =>
            setUserForm({
              ...userForm,
              userId: Number(event.currentTarget.value),
            })
          }
          value={userForm.userId}
          type="number"
          placeholder="userId"
          className="p-2 border border-gray-800 "
        />

        <button
          type="submit"
          className="bg-blue-500 rounded-md p-2 border-none"
        >
          Enviar
        </button>
      </form>
    </div>
  );
}
