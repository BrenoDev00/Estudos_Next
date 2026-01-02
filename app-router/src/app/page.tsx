"use client";

import { FormEvent, useState } from "react";
import { useDollarRate } from "../shared/hooks/use-dollar-rate";
import { UserData } from "../models/user-data";

export default function Home() {
  const { createUser } = useDollarRate();

  const [formTitle, setFormTitle] = useState<string>("");
  const [formBody, setFormBody] = useState<string>("");
  const [formUserId, setFormUserId] = useState<number>(0);

  const handleFormSubmit = async (event: FormEvent): Promise<void> => {
    event.preventDefault();

    const formData: Omit<UserData, "id"> = {
      title: formTitle,
      body: formBody,
      userId: formUserId,
    };

    const response = await createUser(formData);

    if (response) {
      alert(JSON.stringify(response));
    } else {
      alert("Erro ao submeter formulário");
    }
  };

  return (
    <div className="flex flex-col gap-4 items-center mt-[20%]">
      <form
        onSubmit={handleFormSubmit}
        className="flex flex-col gap-2 border-2 border-gray-500 p-4"
      >
        <input
          onInput={(event) => setFormTitle(event.currentTarget.value)}
          value={formTitle}
          type="text"
          placeholder="title"
          className="p-2 border border-gray-800 "
        />

        <input
          onInput={(event) => setFormBody(event.currentTarget.value)}
          value={formBody}
          type="text"
          placeholder="body"
          className="p-2 border border-gray-800 "
        />

        <input
          onInput={(event) => setFormUserId(Number(event.currentTarget.value))}
          value={formUserId}
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
