import { groq } from 'next-sanity'

export const allPostsQuery = groq`
  *[_type == "blogPost"] | order(date desc) {
    _id,
    title,
    slug,
    metaTitle,
    metaDescription,
    excerpt,
    coverImage,
    date,
    readTime,
    category,
    keywords,
    author
  }
`

export const postBySlugQuery = groq`
  *[_type == "blogPost" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    metaTitle,
    metaDescription,
    excerpt,
    coverImage,
    date,
    readTime,
    category,
    keywords,
    author,
    content,
    faq,
    "relatedPosts": relatedPosts[]-> {
      _id,
      title,
      slug,
      coverImage,
      category,
      excerpt,
      date,
      readTime
    }
  }
`

export const postSlugsQuery = groq`
  *[_type == "blogPost"] { "slug": slug.current }
`

export const sitemapPostsQuery = groq`
  *[_type == "blogPost"] {
    "slug": slug.current,
    date,
    _updatedAt
  }
`
