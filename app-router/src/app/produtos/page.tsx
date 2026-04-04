"use client";

import { useState } from "react";
import { useAuthSession } from "@/src/shared/hooks/use-auth";
import { useGetAllProducts } from "@/src/shared/hooks/use-product";
import { ProductsTable } from "./components/products-table";
import Loading from "../loading";
import Error from "../error";
import { SearchBar } from "@/src/shared/components/search-bar";

export default function Products() {
  const { isAuthenticated } = useAuthSession();
  // isAuthenticated();
  const [searchTerm, setSearchTerm] = useState<string>("");

  const { data, isLoading, isError } = useGetAllProducts(searchTerm);

  if (isError) return <Error />;

  return (
    <main className="flex flex-col gap-4 items-center py-6">
      <h1 className="text-xl text-blue-400">Lista de Produtos</h1>

      <div className="flex flex-col gap-4 items-start">
        <SearchBar onSearch={setSearchTerm} />
        <ProductsTable products={data?.products ?? []} />
      </div>
    </main>
  );
}
