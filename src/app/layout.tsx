import type { Metadata } from "next";
import { Cinzel, Josefin_Sans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import {
  GERARDO_PHONE_TEL,
  INSTAGRAM_URL,
} from "@/lib/constants";

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

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://gerardosolis.mx";
const TITLE = "Gerardo Solís — Asesor Inmobiliario Certificado";
const DESCRIPTION =
  "Experto en ingeniería financiera patrimonial en Bahía de Banderas y Riviera Nayarit. Te ayudo a convertir tu crédito en un patrimonio real.";
const OG_IMAGE = "/hero-image-2.jpg";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    url: "/",
    siteName: "Gerardo Solís",
    title: TITLE,
    description: DESCRIPTION,
    locale: "es_MX",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Gerardo Solís — Asesor Inmobiliario Certificado",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: [OG_IMAGE],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "RealEstateAgent",
  name: "Gerardo Solís",
  description: DESCRIPTION,
  url: SITE_URL,
  telephone: GERARDO_PHONE_TEL,
  areaServed: [
    { "@type": "Place", name: "Bahía de Banderas" },
    { "@type": "Place", name: "Riviera Nayarit" },
  ],
  address: {
    "@type": "PostalAddress",
    addressRegion: "Nayarit",
    addressCountry: "MX",
  },
  sameAs: [INSTAGRAM_URL],
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
      <body className="min-h-full flex flex-col">
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
