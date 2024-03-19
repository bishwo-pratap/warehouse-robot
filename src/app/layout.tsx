import type { Metadata } from "next";
import React from 'react';
import '../styles/globals.css';


export const metadata: Metadata = {
  title: "Warehouse Robot",
  description: "Lyka's Coding Test",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-sky-300">{children}</body>
    </html >
  );
}
