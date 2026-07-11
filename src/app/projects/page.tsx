import { Metadata } from "next";
import { client } from "@/sanity/lib/client";
import ProjectsPageClient from "./ProjectsPageClient";

export const metadata: Metadata = {
  title: "Portfolio | Trishabh Group",
  description: "Explore the curated collection of premium luxury residences by Trishabh Group in Mumbai.",
};

async function getProjects() {
  const query = `*[_type == "project"] | order(_createdAt desc) {
    title,
    "slug": slug.current,
    status,
    location,
    shortDescription,
    configurations,
    "area": configurations,
    "units": configurations,
    "completion": configurations,
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

export default async function ProjectsPage() {
  const sanityProjects = await getProjects();
  return <ProjectsPageClient initialProjects={sanityProjects} />;
}
