import { useState } from "react";
import { Product } from "@/src/models/product";
import { Table } from "@/src/shared/components/table";
import { productsTableHeader } from "@/src/shared/constants";

export const ProductsTable = ({
  products,
  isLoading,
  isEmpty,
  onSortColumn,
}: {
  products: Product[];
  isLoading: boolean;
  isEmpty: boolean;
  onSortColumn: (
    sortBy: "title" | "price",
    isAscOrDesc: "asc" | "desc",
  ) => void;
}) => {
  const [isAscOrDesc, setIsAscOrDesc] = useState<"asc" | "desc">("asc");

  const handleSortColumn = (sortBy: "title" | "price"): void => {
    setIsAscOrDesc(isAscOrDesc === "asc" ? "desc" : "asc");
    onSortColumn(sortBy, isAscOrDesc);
  };

  const formatProductPrice = (price: number): string => {
    return price.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  };

  if (isLoading) {
    return (
      <p className="text-blue-500 text-center font-semibold text-xl">
        Carregando...
      </p>
    );
  }

  if (isEmpty)
    return (
      <p className="text-blue-500 text-center font-semibold text-xl">
        Nenhum produto encontrado.
      </p>
    );

  return (
    <table>
      <Table.Thead>
        <Table.Tr>
          {productsTableHeader.map((column, index) => {
            return (
              <Table.Th key={index}>
                <div className="flex items-center gap-2">
                  {column.name}

                  {column.sortBy && (
                    <button
                      className="cursor-pointer"
                      onClick={() =>
                        handleSortColumn(column.sortBy as "title" | "price")
                      }
                    >
                      <img src="/sort-icon.svg" className="w-4" />
                    </button>
                  )}
                </div>
              </Table.Th>
            );
          })}
        </Table.Tr>
      </Table.Thead>

      <Table.Tbody>
        {products.map((product) => {
          return (
            <Table.Tr key={product.id}>
              <Table.Td>{product.title}</Table.Td>
              <Table.Td>{product.category}</Table.Td>
              <Table.Td>{formatProductPrice(product.price)}</Table.Td>
              <Table.Td>{product.stock}</Table.Td>
            </Table.Tr>
          );
        })}
      </Table.Tbody>
    </table>
  );
};
