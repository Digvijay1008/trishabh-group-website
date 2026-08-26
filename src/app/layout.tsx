import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import LenisProvider from "@/components/providers/LenisProvider";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import CustomCursor from "@/components/ui/CustomCursor";
import Preloader from "@/components/ui/Preloader";
import { GoogleAnalytics } from '@next/third-parties/google';
import Script from "next/script";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
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
      <head>
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', 'YOUR_PIXEL_ID');
            fbq('track', 'PageView');
          `}
        </Script>
      </head>
      <body>
        <GoogleAnalytics gaId="G-YOUR-GA-MEASUREMENT-ID" />
        <Preloader />
        <LenisProvider>
          <Navbar />
          <CustomCursor />
          <main className="min-h-screen" style={{ paddingTop: "clamp(64px, 8vh, 88px)" }}>
            {children}
          </main>
          <WhatsAppButton />
          <Footer />
        </LenisProvider>
      </body>
    </html>
  );
}
