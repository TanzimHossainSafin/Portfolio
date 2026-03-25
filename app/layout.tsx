import type { ReactNode } from "react";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tanzim Hossain Safin | Portfolio",
  description:
    "Portfolio of Tanzim Hossain Safin, a backend engineer focused on AI systems, scalable APIs, and blockchain development.",
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
