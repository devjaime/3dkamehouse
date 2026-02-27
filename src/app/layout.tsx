import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "3D Kame House | Impresiones 3D en Chile",
  description:
    "Empresa chilena de impresión 3D especializada en prototipado rápido, piezas técnicas y productos personalizados. Fabricación aditiva de alta precisión en Santiago, Chile.",
  keywords: [
    "impresión 3D",
    "impresoras 3D Chile",
    "prototipado rápido",
    "fabricación aditiva",
    "piezas 3D Santiago",
    "3D printing Chile",
    "3D Kame House",
  ],
  authors: [{ name: "Jaime Hernández" }],
  creator: "3D Kame House",
  openGraph: {
    title: "3D Kame House | Impresiones 3D de Alta Precisión",
    description:
      "Prototipado rápido, piezas técnicas y productos personalizados. Santiago, Chile.",
    type: "website",
    locale: "es_CL",
    siteName: "3D Kame House",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;600;700;800;900&family=Inter:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
