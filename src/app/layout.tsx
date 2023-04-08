import Head from "next/head";

export const metadata = {
  title: "Rarjonas - Portfolio",
  description:
    "Descrição de alguns trabalhos realizados e guias de desenvolvimento.",
  icons: {
    icon: "/images/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
