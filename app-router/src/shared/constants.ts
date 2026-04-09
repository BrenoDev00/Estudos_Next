import { RouteData } from "../models/route-data";

export const routesList: RouteData[] = [
  { name: "Home", href: "/" },
  { name: "Contatos", href: "/contatos" },
  { name: "Produtos", href: "/produtos" },
];

export const awesomeApiUrl = "https://economia.awesomeapi.com.br/last/USD-BRL";

export const dummyLoginApiUrl = "https://dummyjson.com/auth/login";

export const dummyProductsApiUrl = "https://dummyjson.com/products";

export const productsTableHeader: string[] = [
  "Nome",
  "Categoria",
  "Preço",
  "Quant. Estoque",
];
