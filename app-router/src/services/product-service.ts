import { ProductsListResponse } from "../models/products-list-response";
import { dummyProductsApiUrl } from "../shared/constants";

export class ProductService {
  getAll = async (searchTerm: string): Promise<ProductsListResponse> => {
    const apiUrl = `${dummyProductsApiUrl}/search?q=${searchTerm}`;

    const request = await fetch(apiUrl);
    const response: ProductsListResponse = await request.json();

    return response;
  };
}
