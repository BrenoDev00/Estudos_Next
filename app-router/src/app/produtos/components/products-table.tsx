import { Product } from "@/src/models/product";
import { Table } from "@/src/shared/components/table";
import { productsTableHeader } from "@/src/shared/constants";

export const ProductsTable = ({ products }: { products: Product[] }) => {
  return (
    <table>
      <Table.Thead>
        <Table.Tr>
          {productsTableHeader.map((name, index) => {
            return <Table.Th key={index}>{name}</Table.Th>;
          })}
        </Table.Tr>
      </Table.Thead>

      <Table.Tbody>
        {products.map((product) => {
          return (
            <Table.Tr key={product.id}>
              <Table.Td>{product.title}</Table.Td>
              <Table.Td>{product.category}</Table.Td>
              <Table.Td>{product.price}</Table.Td>
              <Table.Td>{product.stock}</Table.Td>
            </Table.Tr>
          );
        })}
      </Table.Tbody>
    </table>
  );
};
