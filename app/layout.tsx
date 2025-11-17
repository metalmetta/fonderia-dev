import type { Metadata } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import { Analytics } from '@vercel/analytics/react';
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const cormorant = Cormorant_Garamond({ 
  weight: ["400", "600", "700"],
  subsets: ["latin"], 
  variable: "--font-cormorant" 
});

export const metadata: Metadata = {
  title: "Fonderia - Milan's forge for builders",
  description: "A living space where builders gather, where heat turns into form. Fonderia is the forge of builders.",
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${cormorant.variable} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}

