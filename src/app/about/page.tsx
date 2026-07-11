import { Metadata } from "next";
import AboutPageClient from "./AboutPageClient";

export const metadata: Metadata = {
  title: "The Legacy | Trishabh Group",
  description: "Learn about Trishabh Group's 25-year legacy of building luxury real estate landmarks in Mumbai with a 100% OC track record.",
};

export default function AboutPage() {
  return <AboutPageClient />;
}
