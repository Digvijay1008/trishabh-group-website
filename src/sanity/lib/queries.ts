import { client } from "./client";

export async function getProjects() {
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

export async function getProject(slug: string) {
  const query = `*[_type == "project" && slug.current == $slug][0] {
    title,
    "slug": slug.current,
    status,
    location,
    shortDescription,
    fullDescription,
    configurations,
    amenities,
    mahareraNumber,
    "area": configurations,
    "units": configurations,
    "completion": configurations,
    "price": "Price on Request",
    mainImage {
      asset -> { url }
    },
    gallery[] {
      asset -> { url }
    },
    seo
  }`;
  try {
    return await client.fetch(query, { slug }, { next: { revalidate: 60 } });
  } catch {
    return null;
  }
}

