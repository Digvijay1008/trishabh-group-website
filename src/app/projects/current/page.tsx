import { Metadata } from "next";
import ProjectsPageClient from "../ProjectsPageClient";
import { getProjects } from "@/sanity/lib/queries";

export const metadata: Metadata = {
  title: "Current Projects | Trishabh Group",
  description: "Explore our currently under-construction luxury residential developments in Mumbai.",
};

export default async function CurrentProjectsPage() {
  const sanityProjects = await getProjects();
  return <ProjectsPageClient category="current" initialProjects={sanityProjects} />;
}
