import { ProductsListResponse } from "../models/products-list-response";
import { dummyProductsApiUrl } from "../shared/constants";

export class ProductService {
  getAll = async (
    searchTerm: string,
    columnSorting: { sortBy: string; isAscOrDesc: string },
  ): Promise<ProductsListResponse> => {
    const { sortBy, isAscOrDesc } = columnSorting;

    const apiUrl = `${dummyProductsApiUrl}/search?q=${searchTerm}&sortBy=${sortBy}&order=${isAscOrDesc}&limit=0`;

    const request = await fetch(apiUrl);
    const response: ProductsListResponse = await request.json();

    return response;
  };
}
