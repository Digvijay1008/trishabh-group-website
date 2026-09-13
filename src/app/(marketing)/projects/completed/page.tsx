import { Metadata } from "next";
import ProjectsPageClient from "../ProjectsPageClient";
import { getProjects } from "@/sanity/lib/queries";

export const metadata: Metadata = {
  title: "Completed Projects | Trishabh Group",
  description: "View our completed luxury residential developments in Mumbai.",
};

export default async function CompletedProjectsPage() {
  const sanityProjects = await getProjects();
  return <ProjectsPageClient category="completed" initialProjects={sanityProjects} />;
}
