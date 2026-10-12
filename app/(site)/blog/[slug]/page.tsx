import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Header } from '@/components/layout/header'
import Link from 'next/link'
import Image from 'next/image'
import { Calendar, Clock, ArrowLeft, ArrowRight, User, Phone, ChevronDown } from 'lucide-react'
import { sanityFetch } from '@/sanity/fetch'
import { postBySlugQuery, postSlugsQuery } from '@/sanity/queries'
import { urlForImage } from '@/sanity/image'
import { SanityImage } from '@/components/blog/sanity-image'
import { PortableTextRenderer } from '@/components/blog/portable-text'
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

// Google logo SVG
function GoogleLogo() {
  return (
    <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4" />
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
    </svg>
  )
}

// Star SVG component
function StarIcon({ className = 'w-3.5 h-3.5' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="#FACC15" stroke="none">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  )
}

// Werkspot logo SVG
function WerkspotLogo() {
  return (
    <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="11" fill="#FF6A00" />
      <path d="M7 12.5l3.5 3.5 7-7" stroke="white" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
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
        name: 'Schildersbedrijf040'
      }
    },
    publisher: {
      '@type': 'Organization',
      name: 'Schildersbedrijf040',
      url: 'https://schildersbedrijf040.nl',
      logo: {
        '@type': 'ImageObject',
        url: 'https://res.cloudinary.com/dbtaisgda/image/upload/v1743873386/schildersbedrijf040_logo_aqxhxr.png'
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

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <Header />

      {/* ── Hero Section ── */}
      <section className="relative min-h-[60vh] flex items-center bg-[#001B32] overflow-hidden">
        {/* Background cover image */}
        <div className="absolute inset-0 z-0 opacity-25">
          <SanityImage
            image={post.coverImage}
            alt={post.title}
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
        </div>
        {/* Gradient overlay */}
        <div className="absolute inset-0 z-[1] bg-gradient-to-br from-[#001B32]/95 via-[#001B32]/60 to-[#0088FF]/15" />
        {/* Decorative glow */}
        <div className="absolute -right-20 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(0,136,255,0.12)_0%,transparent_70%)] rounded-full blur-[60px]" />

        <div className="container relative z-10 pt-28 pb-16">
          <div className="max-w-3xl">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-sm text-gray-400 mb-6 animate-fade-in-up">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
              <span>/</span>
              <span className="text-gray-300">{post.category}</span>
            </nav>

            <span className="inline-block bg-[#0088FF] text-white text-sm font-semibold px-4 py-1.5 rounded-full mb-5 animate-fade-in-up">
              {post.category}
            </span>

            <h1 className="font-bebas text-[clamp(2.8rem,6vw,4.5rem)] leading-[0.95] mb-6 animate-fade-in-up animation-delay-150">
              <span className="text-white">{post.title}</span>
            </h1>

            <p className="text-gray-200 text-lg leading-relaxed max-w-[600px] mb-8 animate-fade-in-up animation-delay-300">
              {post.excerpt}
            </p>

            <div className="flex flex-wrap items-center gap-6 text-gray-300 animate-fade-in-up animation-delay-300">
              <div className="flex items-center gap-2">
                <User className="w-5 h-5 text-[#0088FF]" />
                <span>{post.author.name}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-[#0088FF]" />
                <time dateTime={post.date}>
                  {new Date(post.date).toLocaleDateString('nl-NL', {
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric'
                  })}
                </time>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-[#0088FF]" />
                <span>{post.readTime} leestijd</span>
              </div>
            </div>

            {/* Social proof strip */}
            <div className="flex items-center gap-6 mt-8 animate-fade-in-up animation-delay-600">
              <div className="flex items-center gap-2.5">
                <GoogleLogo />
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon key={i} />
                  ))}
                </div>
                <span className="text-sm text-gray-300 font-medium">5.0</span>
              </div>
              <div className="w-px h-7 bg-white/15" />
              <div className="flex items-center gap-2.5">
                <WerkspotLogo />
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon key={i} />
                  ))}
                </div>
                <span className="text-sm text-gray-300 font-medium">4.9</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Article Content + Sidebar ── */}
      <section className="py-20 bg-[#F7F8FA]">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-12 items-start">

            {/* Main Content Column */}
            <article className="bg-white rounded-2xl shadow-[0_2px_24px_rgba(0,0,0,0.06)] p-6 md:p-12">

              {/* Mobile Author Byline */}
              <div className="lg:hidden flex items-center gap-4 mb-8 pb-8 border-b border-gray-200">
                <div className="relative w-14 h-14 rounded-full overflow-hidden flex-shrink-0 ring-2 ring-[#0088FF]/20">
                  <Image
                    src="https://res.cloudinary.com/dbtaisgda/image/upload/v1739556938/d46oqzht95tblkswur6p.jpg"
                    alt="Jordy Jacobs, eigenaar van Schildersbedrijf040"
                    fill
                    sizes="56px"
                    className="object-cover object-top"
                  />
                </div>
                <div>
                  <p className="font-bold text-[0.95rem]">{post.author.name}</p>
                  <p className="text-sm text-[#0088FF] font-medium">{post.author.role}</p>
                </div>
              </div>

              {/* Portable Text Content */}
              <PortableTextRenderer content={post.content} />

              {/* Mobile Inline CTA */}
              <div className="lg:hidden mt-10 rounded-2xl overflow-hidden bg-gradient-to-br from-[#001B32] to-[#002B4F] p-7">
                <div className="flex items-center gap-3 mb-4">
                  <div className="relative w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                    <Image
                      src="https://res.cloudinary.com/dbtaisgda/image/upload/v1739556938/d46oqzht95tblkswur6p.jpg"
                      alt="Jordy Jacobs"
                      fill
                      sizes="40px"
                      className="object-cover object-top"
                    />
                  </div>
                  <div>
                    <p className="text-white font-bold text-sm">{post.author.name}</p>
                    <p className="text-gray-400 text-xs">{post.author.role}</p>
                  </div>
                </div>
                <h3 className="font-bebas text-2xl text-white mb-2">Hulp Nodig Bij Uw Project?</h3>
                <p className="text-gray-300 text-sm leading-relaxed mb-5">
                  Neem vrijblijvend contact op voor persoonlijk advies of een offerte op maat.
                </p>
                <Link
                  href="/contact"
                  className="bg-[#0088FF] text-white px-6 py-3.5 rounded-lg inline-flex items-center gap-2 font-bebas text-base tracking-wider hover:bg-[#006ACC] transition-all duration-250 shadow-[0_4px_24px_rgba(0,136,255,0.3)] w-full justify-center"
                >
                  GRATIS OFFERTE AANVRAGEN
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href="tel:+31638903004"
                  className="mt-3 border border-white/20 bg-white/[0.04] text-white px-6 py-3.5 rounded-lg inline-flex items-center gap-2 font-bebas text-base tracking-wider hover:border-white/40 hover:bg-white/[0.08] transition-all duration-250 w-full justify-center"
                >
                  <Phone className="w-4 h-4" />
                  06-38903004
                </a>
              </div>

              {/* FAQ Section */}
              {post.faq && post.faq.length > 0 && (
                <div className="mt-16 pt-12 border-t border-gray-200">
                  <span className="inline-block font-bebas text-sm tracking-[0.15em] text-[#0088FF] mb-3 uppercase">
                    Veelgestelde Vragen
                  </span>
                  <h2 className="font-bebas text-[clamp(2rem,4vw,3rem)] leading-tight mb-8">
                    FAQ: {post.category}
                  </h2>
                  <div className="flex flex-col gap-2">
                    {post.faq.map((item, index) => (
                      <details
                        key={index}
                        className="group border border-gray-200 rounded-xl overflow-hidden transition-all duration-300 open:border-[#0088FF] open:shadow-[0_4px_24px_rgba(0,136,255,0.06)]"
                      >
                        <summary className="relative flex items-center justify-between cursor-pointer px-7 py-[22px] font-semibold text-[1.05rem] hover:bg-[#F7F8FA] transition-colors list-none [&::-webkit-details-marker]:hidden">
                          <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-[#0088FF] opacity-0 group-open:opacity-100 transition-opacity duration-300" />
                          <span>{item.question}</span>
                          <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0 ml-4 transition-transform duration-300 group-open:rotate-180" />
                        </summary>
                        <div className="px-7 pb-6">
                          <p className="text-gray-600 text-[0.95rem] leading-relaxed">{item.answer}</p>
                        </div>
                      </details>
                    ))}
                  </div>
                </div>
              )}
            </article>

            {/* Sticky Sidebar */}
            <aside className="hidden lg:flex flex-col gap-5 sticky top-28">
              {/* Author / Jordy Card */}
              <div className="rounded-2xl overflow-hidden border border-gray-200 bg-white shadow-[0_2px_24px_rgba(0,0,0,0.06)]">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src="https://res.cloudinary.com/dbtaisgda/image/upload/v1739556938/d46oqzht95tblkswur6p.jpg"
                    alt="Jordy Jacobs op een trap, eigenaar Schildersbedrijf040"
                    fill
                    sizes="340px"
                    className="object-cover object-center"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-1.5 mb-2">
                    <span className="text-xs font-semibold text-[#0088FF] uppercase tracking-wide">Geschreven door</span>
                  </div>
                  <h3 className="font-bebas text-xl mb-1">{post.author.name}</h3>
                  <p className="text-sm text-[#0088FF] font-medium mb-3">{post.author.role} bij Schildersbedrijf040</p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Met meer dan 5 jaar ervaring in het schildersvak deel ik graag mijn kennis en tips voor het beste resultaat.
                  </p>
                </div>
              </div>

              {/* CTA Card */}
              <div className="rounded-2xl overflow-hidden bg-gradient-to-br from-[#001B32] to-[#002B4F] p-7">
                <h3 className="font-bebas text-2xl text-white mb-3">Hulp Nodig?</h3>
                <p className="text-gray-300 text-sm leading-relaxed mb-5">
                  Neem vrijblijvend contact op voor advies of een offerte op maat.
                </p>
                <Link
                  href="/contact"
                  className="bg-[#0088FF] text-white px-6 py-3 rounded-lg inline-flex items-center gap-2 font-bebas text-base tracking-wider hover:bg-[#006ACC] transition-all duration-250 shadow-[0_4px_24px_rgba(0,136,255,0.3)] w-full justify-center"
                >
                  GRATIS OFFERTE
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href="tel:+31638903004"
                  className="mt-3 border border-white/20 bg-white/[0.04] text-white px-6 py-3 rounded-lg inline-flex items-center gap-2 font-bebas text-base tracking-wider hover:border-white/40 hover:bg-white/[0.08] transition-all duration-250 w-full justify-center"
                >
                  <Phone className="w-4 h-4" />
                  06-38903004
                </a>
              </div>

              {/* Rating Cards */}
              <div className="rounded-2xl border border-gray-200 bg-white p-6 hover:border-[#0088FF] hover:shadow-[0_8px_40px_rgba(0,136,255,0.08)] transition-all duration-300">
                <div className="flex gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon key={i} className="w-4 h-4" />
                  ))}
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-gray-400 uppercase tracking-wide">
                  <GoogleLogo />
                  5,0 uit 41 reviews
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* ── Related Posts ── */}
      {relatedPosts.length > 0 && (
        <section className="py-20">
          <div className="container">
            <div className="text-center mb-12">
              <span className="inline-block font-bebas text-sm tracking-[0.15em] text-[#0088FF] mb-3 uppercase">
                Meer Lezen
              </span>
              <h2 className="font-bebas text-[clamp(2rem,4vw,3rem)] leading-tight">
                Gerelateerde Artikelen
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0.5 rounded-2xl overflow-hidden max-w-5xl mx-auto">
              {relatedPosts.map((relatedPost, index) => (
                <Link
                  key={relatedPost._id}
                  href={`/blog/${relatedPost.slug.current}`}
                  className="group relative bg-white p-0 transition-all duration-350 hover:bg-[#001B32] overflow-hidden"
                >
                  <div className="relative h-48 overflow-hidden">
                    <SanityImage
                      image={relatedPost.coverImage}
                      alt={relatedPost.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <span className="text-xs text-[#0088FF] font-semibold uppercase tracking-wide">
                      {relatedPost.category}
                    </span>
                    <h3 className="font-bebas text-xl mt-2 transition-colors duration-350 group-hover:text-white line-clamp-2">
                      {relatedPost.title}
                    </h3>
                    <span className="inline-flex items-center gap-2 text-[#0088FF] font-semibold text-sm mt-4 transition-transform duration-300 group-hover:translate-x-1.5">
                      Lees het artikel
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Back to Blog ── */}
      <section className="py-8 border-t border-gray-200">
        <div className="container">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-[#0088FF] font-semibold hover:translate-x-[-4px] transition-transform duration-300"
          >
            <ArrowLeft className="w-4 h-4" />
            Terug naar alle artikelen
          </Link>
        </div>
      </section>
    </main>
  )
}
