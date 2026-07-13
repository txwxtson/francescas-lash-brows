import type { Metadata, Viewport } from "next";
import { Caveat_Brush, Jost } from "next/font/google";
import "./globals.css";

const caveatBrush = Caveat_Brush({
  variable: "--font-caveat-brush",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Francesca's Lash & Brows | Mobile Lash & Brow Artist, Greater Manchester",
  description:
    "Precision lash and brow artistry that comes to you. Classic, hybrid & volume lashes, brow lamination and tint — mobile across Greater Manchester.",
};

export const viewport: Viewport = {
  themeColor: "#4a342a",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${caveatBrush.variable} ${jost.variable}`}>
      <body className="bg-cream font-body text-espresso antialiased">{children}</body>
    </html>
  );
}
