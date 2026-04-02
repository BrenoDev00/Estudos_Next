import { ProductsListResponse } from "../models/products-list-response";
import { dummyProductsApiUrl } from "../shared/constants";

export class ProductService {
  getAll = async (): Promise<ProductsListResponse> => {
    const request = await fetch(dummyProductsApiUrl);
    const response: ProductsListResponse = await request.json();

    return response;
  };
}
