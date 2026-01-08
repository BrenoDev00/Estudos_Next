import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex flex-col gap-2 justify-center items-center">
      <p className="text-xl text-gray-800 font-semibold">
        Página não encontrada...
      </p>

      <Link href={"/"} className="bg-blue-600 text-white rounded-sm p-2">
        Voltar para Home
      </Link>
    </main>
  );
}
