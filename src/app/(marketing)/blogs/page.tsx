import { Metadata } from "next";
import { client } from "@/sanity/lib/client";
import BlogsPageClient from "./BlogsPageClient";

export const metadata: Metadata = {
  title: "Journal & Insights | Trishabh Group",
  description: "Read the latest news, construction updates, and luxury real estate insights from Trishabh Group.",
};

// Fetch all published blog posts from Sanity
async function getPosts() {
  const query = `*[_type == "post"] | order(publishedAt desc) {
    title,
    "slug": slug.current,
    excerpt,
    category,
    publishedAt,
    mainImage {
      asset -> { url }
    }
  }`;

  try {
    const posts = await client.fetch(query, {}, { next: { revalidate: 60 } });
    return posts;
  } catch {
    return [];
  }
}

export default async function BlogsPage() {
  const posts = await getPosts();
  return <BlogsPageClient posts={posts} />;
}
