import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import LenisProvider from "@/components/providers/LenisProvider";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Trishabh Group | Luxury Real Estate Mumbai",
  description:
    "Trishabh Group builds luxury real estate landmarks across Mumbai with 25+ years of trust, 100% OC delivery, and precision engineering.",
  keywords: ["Trishabh Group", "luxury real estate", "Mumbai", "premium homes", "Chembur", "Powai", "Thane"],
  openGraph: {
    title: "Trishabh Group | Luxury Real Estate Mumbai",
    description: "Trishabh Group builds luxury real estate landmarks across Mumbai.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable}`}>
      <body>
        <LenisProvider>
          <Navbar />
          <main className="min-h-screen" style={{ paddingTop: "clamp(64px, 8vh, 88px)" }}>
            {children}
          </main>
          <Footer />
        </LenisProvider>
      </body>
    </html>
  );
}
