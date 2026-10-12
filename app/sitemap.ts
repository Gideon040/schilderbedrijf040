import { MetadataRoute } from 'next'
import { cityData } from './(site)/locaties/[city]/data'
import { sanityFetch } from '@/sanity/fetch'
import { sitemapPostsQuery } from '@/sanity/queries'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://schildersbedrijf040.nl'

  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/over-ons`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/faq`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/projecten`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    },
  ]

  // Diensten pages
  const diensten = [
    'binnenschilderwerk',
    'buitenschilderwerk',
    'behangen',
    'houtrot-sanering',
    'lakwerk',
    'latex-spuiten',
    'winterschilder',
  ]

  const dienstenPages: MetadataRoute.Sitemap = diensten.map((dienst) => ({
    url: `${baseUrl}/diensten/${dienst}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.9,
  }))

  // Location pages (dynamic from data)
  const locationPages: MetadataRoute.Sitemap = Object.keys(cityData).map((city) => ({
    url: `${baseUrl}/locaties/${city}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  // Blog pages (from Sanity)
  const blogOverview: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
  ]

  const posts = await sanityFetch<{ slug: string; date: string; _updatedAt: string }[]>({
    query: sitemapPostsQuery,
    tags: ['blog'],
  })

  const blogPages: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post._updatedAt || post.date),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  return [
    ...staticPages,
    ...dienstenPages,
    ...locationPages,
    ...blogOverview,
    ...blogPages,
  ]
}
