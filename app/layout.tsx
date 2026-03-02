import "./globals.css";
import React from "react";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Giovanni Sosa - CV",
  description:
    "Curriculum Vitae de Giovanni Abraham Sosa de la Cruz - Maestro en Sistemas Computacionales",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
