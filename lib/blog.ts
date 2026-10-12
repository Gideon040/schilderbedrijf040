// Blogs staan als lokale bestanden in data/blog (de site gebruikt geen CMS meer).
// Nieuwe blog: JSON-bestand in data/blog toevoegen en importeren in data/blog/index.ts.
import type { PortableTextBlock } from '@portabletext/types'
import { alleBlogs } from '@/data/blog'

export type BlogAfbeelding = { src: string; width: number; height: number }

export type BlogPost = {
  slug: string
  title: string
  metaTitle: string
  metaDescription: string
  excerpt: string
  cover: BlogAfbeelding
  date: string
  readTime: string
  category: string
  keywords: string[]
  author: { name: string; role: string }
  content: PortableTextBlock[]
  faq: { question: string; answer: string }[]
  related: string[]
}

// Nieuwste eerst
export function blogs(): BlogPost[] {
  return [...alleBlogs].sort((a, b) => b.date.localeCompare(a.date))
}

export function blog(slug: string): BlogPost | undefined {
  return alleBlogs.find((b) => b.slug === slug)
}

export function gerelateerd(post: BlogPost): BlogPost[] {
  return post.related.map((s) => blog(s)).filter((b): b is BlogPost => !!b)
}
