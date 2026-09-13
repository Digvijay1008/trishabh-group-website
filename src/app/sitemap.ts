import type { MetadataRoute } from 'next'
import { client } from '@/sanity/lib/client'

const SITE_URL = 'https://trishabhgroup.vercel.app'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${SITE_URL}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/projects`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/projects/current`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/projects/upcoming`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/projects/completed`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/redevelopment`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/gallery`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${SITE_URL}/careers`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${SITE_URL}/blogs`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ]

  // Dynamic project pages from hardcoded slugs
  const projectSlugs = [
    'trishabh-miraya',
    'trishabh-aura',
    'trishabh-greens',
    'tulsi-meadows',
    'trishabh-signet',
    'tulsi-classic',
    'tulsi-majestic',
  ]

  const projectPages: MetadataRoute.Sitemap = projectSlugs.map((slug) => ({
    url: `${SITE_URL}/projects/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))

  // Dynamic blog posts from Sanity
  let blogPages: MetadataRoute.Sitemap = []
  try {
    const posts = await client.fetch<{ slug: string; _updatedAt: string }[]>(
      `*[_type == "post"]{ "slug": slug.current, _updatedAt }`,
      {},
      { next: { revalidate: 3600 } }
    )
    blogPages = posts.map((post) => ({
      url: `${SITE_URL}/blogs/${post.slug}`,
      lastModified: new Date(post._updatedAt),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    }))
  } catch {
    // Sanity might not be configured yet — that's ok
  }

  // Dynamic project pages from Sanity (if any exist beyond hardcoded)
  let sanityProjectPages: MetadataRoute.Sitemap = []
  try {
    const sanityProjects = await client.fetch<{ slug: string; _updatedAt: string }[]>(
      `*[_type == "project"]{ "slug": slug.current, _updatedAt }`,
      {},
      { next: { revalidate: 3600 } }
    )
    sanityProjectPages = sanityProjects
      .filter((p) => !projectSlugs.includes(p.slug))
      .map((p) => ({
        url: `${SITE_URL}/projects/${p.slug}`,
        lastModified: new Date(p._updatedAt),
        changeFrequency: 'weekly' as const,
        priority: 0.8,
      }))
  } catch {
    // Sanity might not be configured yet — that's ok
  }

  return [...staticPages, ...projectPages, ...blogPages, ...sanityProjectPages]
}
