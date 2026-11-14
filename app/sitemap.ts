import { MetadataRoute } from 'next'
import { cityData } from './(site)/locaties/[city]/data'
import { blogs } from '@/lib/blog'
import { diensten, kostenPaginas } from '@/lib/navigation'
import { indexeerbaar, projecten } from '@/lib/projecten'
import lastmod from '@/data/lastmod.json'

// lastModified = echte laatste inhoudelijke wijziging (data/lastmod.json, bijgewerkt met `node scripts/lastmod.mjs`),
// niet het build-tijdstip. Blogs gebruiken hun eigen datum.
const baseUrl = 'https://schildersbedrijf040.nl'
const datums = lastmod as Record<string, string>
const lm = (route: string) => (datums[route] ? new Date(datums[route]) : undefined)

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const pagina = (route: string, changeFrequency: 'weekly' | 'monthly', priority: number, datumRoute = route) => ({
    url: route === '/' ? baseUrl : `${baseUrl}${route}`,
    lastModified: lm(datumRoute),
    changeFrequency,
    priority,
  })

  const staticPages: MetadataRoute.Sitemap = [
    pagina('/', 'weekly', 1.0),
    pagina('/over-ons', 'monthly', 0.8),
    pagina('/contact', 'monthly', 0.9),
    pagina('/faq', 'monthly', 0.7),
    pagina('/projecten', 'weekly', 0.7),
    pagina('/reviews', 'monthly', 0.7),
  ]

  const dienstenPages: MetadataRoute.Sitemap = [...diensten, ...kostenPaginas].map((d) => pagina(d.href, 'monthly', 0.9))

  const locationPages: MetadataRoute.Sitemap = Object.keys(cityData).map((city) => pagina(`/locaties/${city}`, 'monthly', 0.8, '/locaties'))

  const blogOverview: MetadataRoute.Sitemap = [{ ...pagina('/blog', 'weekly', 0.8), lastModified: new Date(blogs().map((b) => b.updated ?? b.date).sort().reverse()[0]) }]

  const blogPages: MetadataRoute.Sitemap = blogs().map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.updated ?? post.date),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  // Alleen projecten met volledige gegevens (oude Instagram-kaarten staan op noindex)
  const projectPages: MetadataRoute.Sitemap = projecten.filter(indexeerbaar).map((p) => ({
    url: `${baseUrl}/projecten/${p.slug}`,
    lastModified: new Date(p.bijgewerkt),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  return [...staticPages, ...dienstenPages, ...locationPages, ...projectPages, ...blogOverview, ...blogPages]
}
