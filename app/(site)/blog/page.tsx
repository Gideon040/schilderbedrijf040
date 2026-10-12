import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Calendar, Clock, ArrowRight } from 'lucide-react'
import { sanityFetch } from '@/sanity/fetch'
import { allPostsQuery } from '@/sanity/queries'
import { SanityImage } from '@/components/blog/sanity-image'
import type { SanityBlogPostCard } from '@/sanity/types'

export const metadata: Metadata = {
  title: 'Blog | Schildertips & Advies',
  description: 'Praktische tips en advies over schilderwerk. Leer hoe je zelf schildert, welke materialen je nodig hebt en wanneer je een professional inschakelt.',
  keywords: ['schildertips', 'verf advies', 'schilderwerk blog', 'doe het zelf schilderen', 'schilder handleiding'],
  openGraph: {
    title: 'Blog | Schildersbedrijf040',
    description: 'Praktische tips en advies over schilderwerk van een vakman.',
    url: 'https://schildersbedrijf040.nl/blog',
    type: 'website',
  },
  alternates: {
    canonical: 'https://schildersbedrijf040.nl/blog',
  },
}

export default async function BlogPage() {
  const posts = await sanityFetch<SanityBlogPostCard[]>({
    query: allPostsQuery,
    tags: ['blog'],
  })

  const blogSchema = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    '@id': 'https://schildersbedrijf040.nl/blog',
    name: 'Schildersbedrijf040 Blog',
    description: 'Praktische tips en advies over schilderwerk',
    url: 'https://schildersbedrijf040.nl/blog',
    publisher: {
      '@type': 'Organization',
      name: 'Schildersbedrijf040',
      url: 'https://schildersbedrijf040.nl'
    },
    blogPost: posts.map(post => ({
      '@type': 'BlogPosting',
      headline: post.title,
      description: post.excerpt,
      datePublished: post.date,
      url: `https://schildersbedrijf040.nl/blog/${post.slug.current}`,
      author: {
        '@type': 'Person',
        name: post.author?.name || 'Jordy Jacobs'
      }
    }))
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://schildersbedrijf040.nl'
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Blog',
        item: 'https://schildersbedrijf040.nl/blog'
      }
    ]
  }

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Hero Section */}
      <section className="relative min-h-[40vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/buitenschilderwerk-dakkapel-wit-geschilderd.jpg"
            alt="Schildersbedrijf040 Blog - Tips & Advies"
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>

        <div className="container relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              <span className="text-white">Schildertips</span><br />
              <span className="text-[#7FB2FF]">en advies</span>
            </h1>
            <p className="text-gray-200 text-lg leading-relaxed">
              Praktische handleidingen, tips van een vakman en alles wat je moet weten over schilderwerk.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-24">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <article key={post._id} className="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-xl transition-shadow">
                <Link href={`/blog/${post.slug.current}`}>
                  <div className="relative h-48 overflow-hidden">
                    <SanityImage
                      image={post.coverImage}
                      alt={post.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-primary text-white text-xs font-medium px-3 py-1 rounded-full">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {new Date(post.date).toLocaleDateString('nl-NL', {
                          day: 'numeric',
                          month: 'long',
                          year: 'numeric'
                        })}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {post.readTime}
                      </span>
                    </div>

                    <h2 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                      {post.title}
                    </h2>

                    <p className="text-gray-600 mb-4 line-clamp-2">
                      {post.excerpt}
                    </p>

                    <span className="inline-flex items-center text-primary font-medium group-hover:gap-2 transition-all">
                      Lees het artikel
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </span>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary">
        <div className="container text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Liever uitbesteden?
          </h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            Geen tijd of zin om zelf te schilderen? Wij doen het graag voor je.
            Vraag een vrijblijvende offerte aan en weet binnen 48 uur waar je aan toe bent.
          </p>
          <Link href="/contact" className="bg-white text-primary px-8 py-4 rounded-md inline-flex items-center font-bebas text-lg tracking-wider hover:bg-gray-100 transition-colors">
            Gratis offerte aanvragen
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>
    </main>
  )
}
