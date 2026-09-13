import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import MetricsSection from "@/components/sections/MetricsSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import WhySection from "@/components/sections/WhySection";
import ContactSection from "@/components/sections/ContactSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import { client } from "@/sanity/lib/client";

async function getFeaturedProjects() {
  const query = `*[_type == "project"] | order(_createdAt desc)[0...3] {
    title,
    "slug": slug.current,
    status,
    location,
    shortDescription,
    configurations,
    mainImage {
      asset -> { url }
    }
  }`;
  try {
    return await client.fetch(query, {}, { next: { revalidate: 60 } });
  } catch {
    return [];
  }
}

export default async function Home() {
  const sanityProjects = await getFeaturedProjects();

  return (
    <>
      <HeroSection />
      <AboutSection />
      <MetricsSection />
      <ProjectsSection initialProjects={sanityProjects} />
      <WhySection />
      <TestimonialsSection />
      <ContactSection />
    </>
  );
}
