import path from 'path'
import fs from 'fs'
import matter from 'gray-matter'
export const BLOGS_PATH = path.join(process.cwd(), 'content')

export const getPostSlugs = () => {
  return fs.readdirSync(BLOGS_PATH)
}

export const getPostBySlug = (slug: string) => {
  const fileContent = fs.readFileSync(path.join(BLOGS_PATH, `${slug}.mdx`), 'utf-8')
  const { data } = matter(fileContent)
  return data
}

export const getAllPosts = () => {
  const slugs = getPostSlugs()
  const posts = slugs.map((slug) => ({
    frontmatter: getPostBySlug(slug.replace(/\.mdx$/, '')),
    slug: slug.replace(/\.mdx$/, ''),
  }))
  return posts
}
