import type { Metadata, Viewport } from "next";
import "@fontsource-variable/inter";
import "@fontsource-variable/fraunces/opsz.css";
import "@fontsource-variable/fraunces/opsz-italic.css";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const title = "Atelier Zélium — Menuisier & agencement sur mesure à Bordeaux";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  title: { default: title, template: "%s | Atelier Zélium" },
  description:
    "Atelier de menuiserie et d'agencement sur mesure au cœur de Bordeaux : cuisines, bibliothèques, escaliers, mobilier. Atelier partagé et coworking à la demande. Devis gratuit.",
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: "Atelier Zélium",
    title,
    description:
      "Cuisines, bibliothèques, escaliers, agencements : un atelier de menuiserie au cœur de Bordeaux, et des établis ouverts à ceux qui veulent travailler le bois.",
    images: ["/images/atelier.jpg"], // TODO : remplacer par l'image OG d'origine
  },
  twitter: { card: "summary_large_image" },
};

export const viewport: Viewport = {
  themeColor: "#1C1A17",
  viewportFit: "cover",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
