import type { Metadata } from "next";
import { Playfair_Display, Source_Sans_3 } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-source-sans",
});

export const metadata: Metadata = {
  title: "Van'Africa Travel Hub",
  description: "Votre compagnon de voyage sur la Garden Route",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${playfair.variable} ${sourceSans.variable} font-sans antialiased bg-gray-100`}>
  <div className="max-w-md mx-auto bg-white min-h-screen shadow-xl">
    {children}
  </div>
</body>
    </html>
  );
}