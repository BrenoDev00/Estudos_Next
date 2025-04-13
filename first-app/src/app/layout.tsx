import type { Metadata } from "next";
import "./global.css";

export const metadata: Metadata = {
  title: "App Next",
  description: "Primeiro app com Next.js.",
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
