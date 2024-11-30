import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export default async function BlogList() {
  const postsDirectory = path.join(process.cwd(), 'content/blog')
  const fileNames = fs.readdirSync(postsDirectory)

  const posts = fileNames.map(fileName => {
    const fullPath = path.join(postsDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)
    
    return {
      ...data,
      content,
      slug: fileName.replace(/\.md$/, '')
    }
  })

  return (
    <div>
      {posts.map((post) => (
        <article key={post.slug}>
          <h2>{post.title}</h2>
          <time>{new Date(post.date).toLocaleDateString()}</time>
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </article>
      ))}
    </div>
  )
} 