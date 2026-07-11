import { Metadata } from "next";
import { client } from "@/sanity/lib/client";
import BlogDetailClient from "./BlogDetailClient";
import { notFound } from "next/navigation";

async function getPost(slug: string) {
  const query = `*[_type == "post" && slug.current == $slug][0] {
    title,
    "slug": slug.current,
    excerpt,
    category,
    publishedAt,
    body,
    mainImage {
      asset -> { url }
    }
  }`;
  try {
    return await client.fetch(query, { slug }, { next: { revalidate: 60 } });
  } catch {
    return null;
  }
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = await getPost(params.slug);
  return {
    title: post ? `${post.title} | Trishabh Group` : "Blog | Trishabh Group",
    description: post?.excerpt ?? "",
  };
}

export default async function BlogDetailPage({ params }: { params: { slug: string } }) {
  const post = await getPost(params.slug);
  if (!post) notFound();
  return <BlogDetailClient post={post} />;
}
