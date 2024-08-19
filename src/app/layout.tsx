import type { Metadata } from "next";
import type { ReactNode } from "react";

import "@fontsource/bangers/latin.css";
import "@fontsource/plus-jakarta-sans/latin.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "LUDAHIN!",
  description: "LUDAHIN! - Lapor! Uang di ATM HabIs Nih!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
