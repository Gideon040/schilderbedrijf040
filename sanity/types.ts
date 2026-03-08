import type { PortableTextBlock, Image } from 'sanity'

export type SanityBlogPost = {
  _id: string
  title: string
  slug: { current: string }
  metaTitle: string
  metaDescription: string
  excerpt: string
  coverImage: Image
  date: string
  readTime: string
  category: string
  keywords: string[]
  author: {
    name: string
    role: string
  }
  content: PortableTextBlock[]
  faq: {
    question: string
    answer: string
  }[]
  relatedPosts?: SanityBlogPostCard[]
}

export type SanityBlogPostCard = {
  _id: string
  title: string
  slug: { current: string }
  coverImage: Image
  category: string
  excerpt: string
  date: string
  readTime: string
  author?: {
    name: string
    role: string
  }
}
