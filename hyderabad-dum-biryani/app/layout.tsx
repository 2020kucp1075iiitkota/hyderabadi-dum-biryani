import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Hyderabad Dum Biryani",
  description:
    "Centuries of culinary mastery, sealed inside a single pot.",
  keywords: [
    "Hyderabad Biryani",
    "Dum Biryani",
    "Premium Biryani",
    "Indian Cuisine",
    "Luxury Dining",
  ],
  openGraph: {
    title: "Hyderabad Dum Biryani",
    description:
      "Centuries of culinary mastery, sealed inside a single pot.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} antialiased`}>
      <body className="min-h-screen bg-biryani-black text-white">
        {children}
      </body>
    </html>
  );
}
