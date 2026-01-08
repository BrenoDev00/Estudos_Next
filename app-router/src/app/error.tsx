"use client";

import Link from "next/link";

export default function Error() {
  return (
    <main className="flex flex-col gap-4 justify-center items-center">
      <h1 className="text-xl text-blue-800">Ops, algo deu errado.</h1>
      <Link href={"/"} className="bg-blue-600 text-white rounded-sm p-2">
        Voltar para Home
      </Link>
    </main>
  );
}
