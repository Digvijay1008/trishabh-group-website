import { Metadata } from "next";
import ContactPageClient from "./ContactPageClient";

export const metadata: Metadata = {
  title: "Contact Us | Trishabh Group",
  description: "Get in touch with Trishabh Group for inquiries, private viewings, and real estate consultations in Mumbai.",
};

export default function ContactPage() {
  return <ContactPageClient />;
}
