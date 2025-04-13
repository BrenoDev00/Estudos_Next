import type { Metadata } from "next";
import "../global.css";

export const metadata: Metadata = {
  title: "Contato",
  description: "Página de contato.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className="antialiased">{children}</body>
    </html>
  );
}
