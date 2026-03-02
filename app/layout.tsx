import "./globals.css";
import React from "react";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Giovanni Sosa | Fullstack Developer & Software Architect",
  description:
    "Portfolio y CV de Giovanni Abraham Sosa de la Cruz. Maestro en Sistemas Computacionales especializado en .NET, React, Microservicios y Arquitectura de Software.",
  keywords: [
    "Giovanni Sosa",
    "Fullstack Developer",
    "Software Architect",
    ".NET Core",
    "React 18",
    "Microservices",
    "Node.js",
    "Tailwind CSS",
    "Software Engineer Mexico",
  ],
  verification: {
    google: "googleb973d8d8d5f4f602",
  },
  authors: [{ name: "Giovanni Sosa", url: "https://github.com/giososa24" }],
  creator: "Giovanni Sosa",
  publisher: "Giovanni Sosa",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "es_MX",
    url: "https://cv.gio-sosa.com", // Adjust to your actual domain
    title: "Giovanni Sosa | Fullstack Developer & Software Architect",
    description:
      "Explora el CV de Giovanni Sosa: Maestro en Sistemas con amplia experiencia en arquitecturas escalables y desarrollo moderno.",
    siteName: "Giovanni Sosa CV",
    images: [
      {
        url: "/og-image.jpg", // You should generate this image
        width: 1200,
        height: 630,
        alt: "Giovanni Sosa - Software Architect",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Giovanni Sosa | Fullstack Developer & Software Architect",
    description:
      "Software Engineer & Architect specialized in .NET and React ecosystems.",
    creator: "@giososa24",
    images: ["/og-image.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Giovanni Abraham Sosa de la Cruz",
              jobTitle: "Software Architect & Fullstack Developer",
              url: "https://cv.gio-sosa.com",
              sameAs: [
                "https://www.linkedin.com/in/giososa24",
                "https://github.com/giososa24",
              ],
              alumniOf: {
                "@type": "CollegeOrUniversity",
                name: "Instituto Tecnológico Superior de Teziutlán",
              },
              knowsAbout: [
                "Software Architecture",
                ".NET Core",
                "React",
                "Microservices",
                "Node.js",
                "TypeScript",
              ],
            }),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
