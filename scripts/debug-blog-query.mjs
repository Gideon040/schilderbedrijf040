import { createClient } from 'next-sanity'

const client = createClient({
  projectId: 'lrd4dy39',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: false,
})

const posts = await client.fetch('*[_type == "blogPost"] | order(date desc) { _id, title, slug, excerpt, coverImage, date, readTime, category, author }')

console.log('Posts found:', posts.length)
posts.forEach(p => {
  console.log('-', p.title)
  console.log('  slug:', p.slug?.current)
  console.log('  coverImage:', p.coverImage ? 'YES' : 'NO')
  console.log('  date:', p.date)
})
