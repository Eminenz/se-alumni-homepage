import type { Metadata } from "next";
import { Passion_One, Source_Sans_3 } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { clubInfo } from "@/content/club";

const passionOne = Passion_One({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-passion-one",
  display: "swap",
});

const sourceSans = Source_Sans_3({
  weight: ["400", "600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-source-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: clubInfo.name,
  description:
    `Offizielle Website des ${clubInfo.name} – Verbindung pflegen, Deutschlandstipendium fördern und Alumni-Treffen veranstalten.`,
  metadataBase: new URL(clubInfo.siteUrl),
  icons: {
    icon: clubInfo.logoUrl,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className={`${passionOne.variable} ${sourceSans.variable}`}>
      <body className="min-h-screen flex flex-col antialiased">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
