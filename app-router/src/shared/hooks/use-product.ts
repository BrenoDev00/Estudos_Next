import { useQuery } from "@tanstack/react-query";
import { ProductService } from "@/src/services/product-service";
import { ProductsListResponse } from "@/src/models/products-list-response";

export function useGetAllProducts(searchTerm: string) {
  const productService = new ProductService();

  const { data, isLoading, isError } = useQuery<ProductsListResponse>({
    queryKey: ["products-list", searchTerm],
    queryFn: () => productService.getAll(searchTerm),
    refetchOnWindowFocus: false,
  });

  return {
    data,
    isLoading,
    isError,
  };
}
