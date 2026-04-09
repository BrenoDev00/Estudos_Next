import { Product } from "./product";

export type ProductsListResponse = {
  products: Product[];
  total: number;
};
