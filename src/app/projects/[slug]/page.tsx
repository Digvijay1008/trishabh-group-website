import { Metadata } from "next";
import ProjectDetailClient from "./ProjectDetailClient";
import { getProject } from "@/sanity/lib/queries";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const p = await params;
  const sanityProject = await getProject(p.slug);
  
  if (sanityProject && sanityProject.seo) {
    return {
      title: sanityProject.seo.metaTitle || `${sanityProject.title} | Trishabh Group`,
      description: sanityProject.seo.metaDescription || sanityProject.shortDescription,
    };
  }
  
  const name = p.slug.split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");
  return {
    title: `${name} | Trishabh Group`,
    description: `Discover ${name}, a premium luxury residential masterpiece by Trishabh Group in Mumbai.`,
  };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const p = await params;
  const sanityProject = await getProject(p.slug);
  
  return <ProjectDetailClient slug={p.slug} initialProject={sanityProject} />;
}
