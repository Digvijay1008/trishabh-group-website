import { client } from "./client";

export async function getProjects() {
  const query = `*[_type == "project"] | order(_createdAt desc) {
    "name": title,
    "slug": slug.current,
    status,
    location,
    type,
    price,
    area,
    units,
    completion,
    bgBase,
    towerColor,
    highlight,
    "image": mainImage.asset->url
  }`;
  try {
    return await client.fetch(query, {}, { next: { revalidate: 60 } });
  } catch {
    return [];
  }
}

export async function getProject(slug: string) {
  const query = `*[_type == "project" && slug.current == $slug][0] {
    "name": title,
    "slug": slug.current,
    status,
    location,
    type,
    price,
    area,
    units,
    completion,
    bgBase,
    towerColor,
    highlight,
    vision,
    amenities,
    mahareraNumber,
    "image": mainImage.asset->url,
    seo
  }`;
  try {
    return await client.fetch(query, { slug }, { next: { revalidate: 60 } });
  } catch {
    return null;
  }
}

