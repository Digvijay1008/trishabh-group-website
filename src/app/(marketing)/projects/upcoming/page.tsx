import { Metadata } from "next";
import ProjectsPageClient from "../ProjectsPageClient";
import { getProjects } from "@/sanity/lib/queries";

export const metadata: Metadata = {
  title: "Upcoming Projects | Trishabh Group",
  description: "Discover our upcoming luxury residential developments in Mumbai.",
};

export default async function UpcomingProjectsPage() {
  const sanityProjects = await getProjects();
  return <ProjectsPageClient category="upcoming" initialProjects={sanityProjects} />;
}
