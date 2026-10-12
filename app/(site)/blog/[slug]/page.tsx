import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { sanityFetch } from '@/sanity/fetch'
import { postBySlugQuery, postSlugsQuery } from '@/sanity/queries'
import { urlForImage } from '@/sanity/image'
import { SanityImage } from '@/components/blog/sanity-image'
import { PortableTextRenderer, anker, blokTekst } from '@/components/blog/portable-text'
import { ArtikelVoortgang } from '@/components/blog/artikel-voortgang'
import { catKleur } from '@/components/blog/categorie'
import { JsonLd } from '@/components/json-ld'
import { Offerte } from '@/components/site/offerte'
import { Eyebrow, Pijl, Streek } from '@/components/site/v2'
import { site } from '@/lib/site'
import type { SanityBlogPost } from '@/sanity/types'

export async function generateStaticParams() {
  const slugs = await sanityFetch<{ slug: string }[]>({
    query: postSlugsQuery,
    tags: ['blog'],
  })
  return slugs.map((s) => ({ slug: s.slug }))
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = await sanityFetch<SanityBlogPost | null>({
    query: postBySlugQuery,
    params: { slug: params.slug },
    tags: ['blog'],
  })

  if (!post) {
    return { title: 'Artikel niet gevonden' }
  }

  const imageUrl = urlForImage(post.coverImage)?.width(1200).height(630).url()

  return {
    title: post.metaTitle,
    description: post.metaDescription,
    keywords: post.keywords,
    authors: [{ name: post.author.name }],
    openGraph: {
      title: post.metaTitle,
      description: post.metaDescription,
      url: `https://schildersbedrijf040.nl/blog/${post.slug.current}`,
      type: 'article',
      publishedTime: post.date,
      modifiedTime: post.date,
      authors: [post.author.name],
      images: imageUrl ? [{ url: imageUrl, width: 1200, height: 630, alt: post.title }] : [],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.metaTitle,
      description: post.metaDescription,
      images: imageUrl ? [imageUrl] : [],
    },
    alternates: {
      canonical: `https://schildersbedrijf040.nl/blog/${post.slug.current}`,
    },
  }
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = await sanityFetch<SanityBlogPost | null>({
    query: postBySlugQuery,
    params: { slug: params.slug },
    tags: ['blog'],
  })

  if (!post) {
    notFound()
  }

  const coverImageUrl = urlForImage(post.coverImage)?.url()

  // Article schema for rich snippets
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    '@id': `https://schildersbedrijf040.nl/blog/${post.slug.current}`,
    headline: post.title,
    description: post.excerpt,
    image: coverImageUrl,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      '@type': 'Person',
      name: post.author.name,
      jobTitle: post.author.role,
      worksFor: {
        '@type': 'Organization',
        '@id': 'https://schildersbedrijf040.nl/#organization',
        name: 'Schildersbedrijf040'
      }
    },
    publisher: {
      '@type': 'Organization',
      '@id': 'https://schildersbedrijf040.nl/#organization',
      name: 'Schildersbedrijf040',
      url: 'https://schildersbedrijf040.nl',
      logo: {
        '@type': 'ImageObject',
        url: 'https://schildersbedrijf040.nl/images/schildersbedrijf040-logo.png'
      }
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://schildersbedrijf040.nl/blog/${post.slug.current}`
    },
    keywords: post.keywords?.join(', ')
  }

  // FAQ schema for rich snippets
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: post.faq?.map(item => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer
      }
    })) || []
  }

  // Breadcrumb schema
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
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: post.title,
        item: `https://schildersbedrijf040.nl/blog/${post.slug.current}`
      }
    ]
  }

  const relatedPosts = post.relatedPosts || []
  const inhoud = (post.content || []).filter((b) => (b as { style?: string }).style === 'h2').map((b) => blokTekst(b))
  const woorden = post.title.split(' ')
  const datum = new Date(post.date).toLocaleDateString('nl-NL', { day: 'numeric', month: 'long', year: 'numeric' })

  return (
    <main>
      <JsonLd data={articleSchema} />
      <JsonLd data={faqSchema} />
      <JsonLd data={breadcrumbSchema} />
      <ArtikelVoortgang />

      <section className="art-hero" style={{ padding: 0 }}>
        <div className="wrap">
          <nav className="crumbs" aria-label="Kruimelpad">
            <Link href="/">Home</Link>
            <span>/</span>
            <Link href="/blog">Blog</Link>
            <span>/</span>
            <b>{post.category}</b>
          </nav>
          <div className="art-cat">
            <i style={{ background: catKleur(post.category) }} />
            {post.category.toUpperCase()}
          </div>
          <h1 className="disp">
            {woorden.slice(0, -1).join(' ')} <span className="paint">{woorden[woorden.length - 1]}</span>
          </h1>
          <p className="lead">{post.excerpt}</p>
          <div className="meta">
            <Image src="/images/jordy-jacobs-schildersbedrijf040-op-ladder.jpg" alt="Jordy Jacobs, Schildersbedrijf040" width={52} height={52} />
            <div>
              <b>{post.author.name}</b>
              <span>
                {post.author.role} · <time dateTime={post.date}>{datum}</time> · {post.readTime} leestijd
              </span>
            </div>
            <span className="meta-score">
              <span className="stars" aria-hidden="true">
                ★★★★★
              </span>{' '}
              5,0 · 4,9
            </span>
          </div>
        </div>
      </section>

      <section style={{ paddingTop: 56 }}>
        <div className="wrap art-grid">
          <article className="prose">
            <PortableTextRenderer content={post.content} />

            <div className="art-cta">
              <div>
                <h3 className="art-cta-h">Hulp nodig bij uw project?</h3>
                <span>Neem vrijblijvend contact op voor persoonlijk advies of een offerte op maat.</span>
              </div>
              <div className="art-cta-knoppen">
                <Link className="btn btn-blue" href="/contact">
                  Gratis offerte aanvragen <Pijl />
                </Link>
                <a className="btn btn-line on-ink" href={site.phoneHref}>
                  Bel {site.phone}
                </a>
              </div>
            </div>

            {post.faq && post.faq.length > 0 && (
              <div className="art-faq">
                <Eyebrow>Veelgestelde vragen</Eyebrow>
                <h2 id="veelgestelde-vragen">FAQ: {post.category}</h2>
                {post.faq.map((item, i) => (
                  <details key={item.question} open={i === 0}>
                    <summary>
                      <h3>{item.question}</h3>
                    </summary>
                    <p>{item.answer}</p>
                  </details>
                ))}
              </div>
            )}
          </article>

          <aside className="art-side">
            {inhoud.length > 0 && (
              <nav className="toc" aria-label="In dit artikel">
                <small>IN DIT ARTIKEL</small>
                {inhoud.map((t, i) => (
                  <a key={t} href={`#${anker(t)}`} className={i === 0 ? 'on' : undefined}>
                    {t}
                  </a>
                ))}
              </nav>
            )}
            <div className="author">
              <Image
                src="/images/jordy-jacobs-schildersbedrijf040-op-ladder.jpg"
                alt="Jordy Jacobs op een trap, eigenaar Schildersbedrijf040"
                width={640}
                height={480}
                sizes="320px"
              />
              <small className="au-l">Geschreven door</small>
              <h3 className="au-h">{post.author.name}</h3>
              <span>{post.author.role} · Schildersbedrijf040</span>
              <span>Met meer dan 5 jaar ervaring in het schildersvak deel ik graag mijn kennis en tips voor het beste resultaat.</span>
            </div>
            <div className="help">
              <h3 className="help-h">Hulp nodig?</h3>
              <span>Neem vrijblijvend contact op voor advies of een offerte op maat.</span>
              <Link className="btn btn-blue" href="/contact" style={{ justifyContent: 'center' }}>
                Gratis offerte aanvragen <Pijl />
              </Link>
              <a className="ph-n" href={site.phoneHref}>
                Bel {site.phone}
              </a>
              <span className="help-score">
                <span className="stars" aria-hidden="true">
                  ★★★★★
                </span>{' '}
                5,0 uit 41 reviews
              </span>
            </div>
          </aside>
        </div>
      </section>

      {relatedPosts.length > 0 && (
        <section style={{ background: 'var(--paper-2)' }}>
          <div className="wrap">
            <div className="head rv">
              <div>
                <Eyebrow>Meer lezen</Eyebrow>
                <h2 id="gerelateerde-artikelen" className="disp">
                  Gerelateerde <Streek>artikelen</Streek>
                </h2>
              </div>
            </div>
            <div className="posts">
              {relatedPosts.map((r) => (
                <Link key={r._id} className="post rv" href={`/blog/${r.slug.current}`}>
                  <div className="img">
                    <SanityImage image={r.coverImage} alt={r.title} fill sizes="(max-width: 980px) 50vw, 300px" />
                  </div>
                  <small>
                    <i style={{ background: catKleur(r.category) }} />
                    {r.category.toUpperCase()}
                  </small>
                  <h3>{r.title}</h3>
                  <span className="more-l">Lees het artikel →</span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <div className="wrap terug">
        <Link href="/blog">← Terug naar alle artikelen</Link>
      </div>

      <Offerte />
    </main>
  )
}
