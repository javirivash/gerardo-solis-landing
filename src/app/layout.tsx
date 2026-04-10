import type { Metadata } from "next";
import { Cinzel, Josefin_Sans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cinzel",
});

const josefin = Josefin_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-josefin",
});

export const metadata: Metadata = {
  title: "Gerardo Solís — Asesor Inmobiliario Certificado",
  description:
    "Experto en ingeniería financiera patrimonial en Bahía de Banderas y Riviera Nayarit. Te ayudo a convertir tu crédito en un patrimonio real.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={cn("h-full antialiased", cinzel.variable, josefin.variable)}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
