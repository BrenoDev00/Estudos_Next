import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contatos",
  description: "Página de contatos.",
};

export default function ContactsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
