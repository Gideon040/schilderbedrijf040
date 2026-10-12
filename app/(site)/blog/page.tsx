import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { sanityFetch } from '@/sanity/fetch'
import { allPostsQuery } from '@/sanity/queries'
import { SanityImage } from '@/components/blog/sanity-image'
import type { SanityBlogPostCard } from '@/sanity/types'
import { BlogFilter } from '@/components/blog/filter'
import { catKleur } from '@/components/blog/categorie'
import { JsonLd } from '@/components/json-ld'
import { Offerte } from '@/components/site/offerte'
import { Pijl } from '@/components/site/v2'

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

  const [uitgelicht, ...overige] = posts
  const categorieen = posts.map((p) => p.category).filter((c, i, a) => c && a.indexOf(c) === i)
  const datum = (d: string) => new Date(d).toLocaleDateString('nl-NL', { day: 'numeric', month: 'long', year: 'numeric' })

  return (
    <main>
      <JsonLd data={blogSchema} />
      <JsonLd data={breadcrumbSchema} />

      <section className="dp-hero" style={{ padding: 0 }}>
        <div className="wrap blog-hero">
          <nav className="crumbs" aria-label="Kruimelpad">
            <Link href="/">Home</Link>
            <span>/</span>
            <b aria-current="page">Blog</b>
          </nav>
          <h1 className="disp">
            <span className="w">
              <span>Schildertips</span>
            </span>
            <br />
            <span className="w">
              <span>&amp;</span>
            </span>{' '}
            <span className="w">
              <span className="paint">advies</span>
            </span>
          </h1>
          <p className="lead">Praktische handleidingen, tips van een vakman en alles wat je moet weten over schilderwerk.</p>
          <BlogFilter categorieen={categorieen} />
          <div className="blog-hero-foto">
            <Image
              src="https://res.cloudinary.com/dbtaisgda/image/upload/v1743873386/WhatsApp_Image_2025-03-27_at_07.55.12_amqj6v.jpg"
              alt="Schildersbedrijf040 Blog - Tips & Advies"
              fill
              sizes="(max-width: 980px) 100vw, 340px"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section style={{ paddingTop: 24 }}>
        <div className="wrap">
          {uitgelicht && (
            <Link className="feat rv" href={`/blog/${uitgelicht.slug.current}`} data-cat={uitgelicht.category}>
              <div className="img">
                <SanityImage image={uitgelicht.coverImage} alt={uitgelicht.title} fill sizes="(max-width: 980px) 100vw, 680px" priority />
              </div>
              <article className="txt">
                <small>
                  <i style={{ background: catKleur(uitgelicht.category) }} />
                  {uitgelicht.category.toUpperCase()} · <time dateTime={uitgelicht.date}>{datum(uitgelicht.date)}</time> · {uitgelicht.readTime}
                </small>
                <h2>{uitgelicht.title}</h2>
                <p>{uitgelicht.excerpt}</p>
                <span className="btn btn-blue" style={{ alignSelf: 'flex-start' }}>
                  Lees het artikel <Pijl />
                </span>
              </article>
            </Link>
          )}
          <div className="posts">
            {overige.map((post) => (
              <Link key={post._id} className="post rv" href={`/blog/${post.slug.current}`} data-cat={post.category}>
                <div className="img">
                  <SanityImage image={post.coverImage} alt={post.title} fill sizes="(max-width: 980px) 50vw, 300px" />
                </div>
                <small>
                  <i style={{ background: catKleur(post.category) }} />
                  {post.category.toUpperCase()}
                </small>
                <h2 className="post-h">{post.title}</h2>
                <span className="post-meta">
                  <time dateTime={post.date}>{datum(post.date)}</time> · {post.readTime}
                </span>
                <p className="post-p">{post.excerpt}</p>
                <span className="more-l">Lees het artikel →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Offerte
        eyebrow="Gratis offerte"
        titel="Liever uitbesteden?"
        streek="uitbesteden?"
        tekst="Geen tijd of zin om zelf te schilderen? Wij doen het graag voor je. Vraag een vrijblijvende offerte aan en weet binnen 48 uur waar je aan toe bent."
      />
    </main>
  )
}
