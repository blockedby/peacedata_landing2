import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "peacedata | Software Studio",
  description:
    "Cutting-edge software solutions for businesses and organizations",
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
