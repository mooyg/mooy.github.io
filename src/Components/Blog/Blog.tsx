import { Box, Heading } from '@chakra-ui/react'
import { BlogCard } from './BlogCard'

type BlogProps = {
  posts: {
    frontmatter: {
      [key: string]: any
    }
    slug: string
  }[]
}

export const Blog = ({ posts }: BlogProps) => {
  return (
    <>
      <Box>
        <Heading p="4">Blog Posts</Heading>
        {posts.map((post, index) => {
          return <BlogCard key={index} frontmatter={post.frontmatter} slug={post.slug} />
        })}
      </Box>
    </>
  )
}
