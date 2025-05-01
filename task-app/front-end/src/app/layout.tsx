import type { Metadata } from "next";
import "./globals.css";
import { ReactQueryProvider, AuthSessionProvider } from "@/providers";

export const metadata: Metadata = {
  title: "Home",
  description: "Página de início.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body>
        <AuthSessionProvider>
          <ReactQueryProvider>{children}</ReactQueryProvider>
        </AuthSessionProvider>
      </body>
    </html>
  );
}
