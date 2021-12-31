import { GetStaticPaths, GetStaticProps } from 'next'
import { BLOGS_PATH, getAllPosts } from '../../util'
import path from 'node:path'
import fs from 'node:fs'
import matter from 'gray-matter'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeSlug from 'rehype-slug'
import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote'
import { Code } from '../../Components/ui/Code'
import {
  Box,
  Center,
  Container,
  Flex,
  HStack,
  Image,
  Tag,
  Text,
  Code as ChakraCode,
} from '@chakra-ui/react'
import { Layout } from '../../Components/layout/Layout'
import { NextChakraLink } from '../../Components/ui/NextChakraLink'
import { Heading } from '../../Components/ui/Heading'
import { format } from 'date-fns'
import { InlineCode } from '../../Components/ui/InlineCode'

const components = {
  code: Code,
  h2: Heading,
  inlineCode: InlineCode,
}
const BlogPage = ({ source, frontMatter }: any) => {
  console.log(frontMatter)
  return (
    <Layout>
      <Container maxW={'container.lg'}>
        <article>
          <Center flexDir={'column'}>
            <Heading>{frontMatter.title}</Heading>
            <Text my="2">{frontMatter.summary}</Text>
            <Text fontSize="sm" color="gray.400">
              {format(new Date(frontMatter.date), 'MMMM dd, yyyy')}
            </Text>
            <Flex flexWrap="wrap">
              {frontMatter.tags.split(',').map((item: string, index: number) => (
                <Tag mx={'2'} my={'1'} key={index}>
                  {item}
                </Tag>
              ))}
            </Flex>
            <Image src={frontMatter.headerURL} />
          </Center>
          <MDXRemote {...source} components={components} />
        </article>
      </Container>
    </Layout>
  )
}
export default BlogPage

export const getStaticPaths: GetStaticPaths = async (context) => {
  const posts = getAllPosts().map((post) => ({
    params: {
      slug: post.slug,
    },
  }))
  return {
    paths: posts,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const blogFilePath = path.join(BLOGS_PATH, `${params.slug}.mdx`)
  const source = fs.readFileSync(blogFilePath)
  const { content, data } = matter(source)
  const mdxSource = await serialize(content, {
    // Optionally pass remark/rehype plugins
    mdxOptions: {
      remarkPlugins: [require('remark-code-titles')],
      rehypePlugins: [rehypeSlug, rehypeAutolinkHeadings],
    },
    scope: data,
  })
  console.log(mdxSource)
  return {
    props: {
      frontMatter: data,
      source: mdxSource,
    },
  }
}
