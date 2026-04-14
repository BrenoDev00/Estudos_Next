"use client";

import { useState } from "react";
import { useAuthSession } from "@/src/shared/hooks/use-auth";
import { useGetAllProducts } from "@/src/shared/hooks/use-product";
import { ProductsTable } from "./components/products-table";
import Error from "../error";
import { SearchBar } from "@/src/shared/components/search-bar";

export default function Products() {
  useAuthSession().isAuthenticated();

  const [searchTerm, setSearchTerm] = useState<string>("");

  const [columnSorting, setColumnSorting] = useState<{
    sortBy: string;
    isAscOrDesc: string;
  }>({
    sortBy: "",
    isAscOrDesc: "",
  });

  const { data, isLoading, isError } = useGetAllProducts(
    searchTerm,
    columnSorting,
  );

  const isEmpty = !data?.products.length;

  if (isError) return <Error />;

  return (
    <main className="flex flex-col gap-4 items-center py-6">
      <h1 className="text-xl text-blue-400">Lista de Produtos</h1>

      <div className="flex flex-col gap-4 items-start">
        <SearchBar onSearch={setSearchTerm} />
        <ProductsTable
          products={data?.products ?? []}
          isLoading={isLoading}
          isEmpty={isEmpty}
          onSortColumn={(sortBy, isAscOrDesc) =>
            setColumnSorting({ sortBy, isAscOrDesc })
          }
        />
      </div>
    </main>
  );
}
