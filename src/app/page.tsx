import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import VisionSection from "@/components/sections/VisionSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import AmenitiesSection from "@/components/sections/AmenitiesSection";
import MetricsSection from "@/components/sections/MetricsSection";
import WhySection from "@/components/sections/WhySection";
import NeighborhoodsSection from "@/components/sections/NeighborhoodsSection";
import ContactSection from "@/components/sections/ContactSection";
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
      <VisionSection />
      <ProjectsSection initialProjects={sanityProjects} />
      <AmenitiesSection />
      <MetricsSection />
      <WhySection />
      <NeighborhoodsSection />
      <ContactSection />
    </>
  );
}
