"use client";

import { useAuthSession } from "@/src/shared/hooks/use-auth";
import { useGetAllProducts } from "@/src/shared/hooks/use-product";
import { ProductsTable } from "./components/products-table";
import Loading from "../loading";
import Error from "../error";

export default function Products() {
  const { isAuthenticated } = useAuthSession();
  // isAuthenticated();
  const { data, isLoading, isError } = useGetAllProducts();

  if (isLoading) return <Loading />;

  if (isError) return <Error />;

  return (
    <main className="flex flex-col gap-4 items-center py-6">
      <h1 className="text-xl text-blue-400">Lista de Produtos</h1>
      <ProductsTable products={data?.products ?? []} />
    </main>
  );
}
