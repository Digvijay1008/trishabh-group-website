import LenisProvider from "@/components/providers/LenisProvider";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import CustomCursor from "@/components/ui/CustomCursor";
import Preloader from "@/components/ui/Preloader";
import Concierge from "@/components/ui/Concierge";

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Preloader />
      <LenisProvider>
        <Navbar />
        <CustomCursor />
        <main className="min-h-[100dvh]">
          {children}
        </main>
        <WhatsAppButton />
        <Concierge />
        <Footer />
      </LenisProvider>
    </>
  );
}
