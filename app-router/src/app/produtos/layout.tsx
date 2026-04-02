import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Produtos",
  description: "Página de produtos.",
};

export default function ProductsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
