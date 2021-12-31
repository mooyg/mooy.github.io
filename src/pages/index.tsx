import { Flex, Heading } from '@chakra-ui/react'
import { GetServerSideProps, GetStaticProps } from 'next'
import { Blog } from '../Components/Blog/Blog'
import { Header } from '../Components/Header/Header'
import { Layout } from '../Components/layout/Layout'
import { Me } from '../Components/Me'
import { getAllPosts } from '../util'

type AppProps = {
  posts: {
    frontmatter: {
      [key: string]: any
    }
    slug: string
  }[]
}

const App = ({ posts }: AppProps) => {
  return (
    <Layout>
      <Me />
      <Blog posts={posts} />
    </Layout>
  )
}

export default App

export const getStaticProps: GetStaticProps = (context) => {
  const posts = getAllPosts()
  return {
    props: {
      posts,
    },
  }
}
