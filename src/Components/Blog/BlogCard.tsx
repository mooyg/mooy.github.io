import React, { useState } from 'react'
import { useRouter } from 'next/router'
import { Box, Container, Flex, Heading, HStack, Image, Tag, Text, VStack } from '@chakra-ui/react'
import { format } from 'date-fns'
import { NextChakraLink } from '../ui/NextChakraLink'

type Props = {
  frontmatter: {
    [key: string]: any
  }
  slug: string
}
export const BlogCard = ({ frontmatter, slug }: Props) => {
  return (
    <NextChakraLink href={`/blog/${slug}`}>
      <Flex
        transition={'0.6s'}
        _hover={{ textDecor: 'none', transform: 'translate(0px,-10px)' }}
        p="4"
        direction="column"
        justify="space-between"
      >
        <Box>
          <HStack justify="space-between" spacing={'10'}>
            <Text
              fontSize="large"
              fontWeight="semibold"
              transition={'0.6s'}
              _hover={{ textDecor: 'underline' }}
            >
              {frontmatter.title}
            </Text>
            <Text fontSize="sm" color="gray.400">
              {format(new Date(frontmatter.date), 'MMMM dd, yyyy')}
            </Text>
          </HStack>
          <Text fontSize="sm" color="gray.400" mb="2">
            {frontmatter.summary}
          </Text>
          <Flex flexWrap="wrap">
            {frontmatter.tags.split(',').map((item: string, index: number) => (
              <Tag mx={'2'} my={'1'} key={index}>
                {item}
              </Tag>
            ))}
          </Flex>
        </Box>
      </Flex>
    </NextChakraLink>
  )
}
