import {
  Box,
  Flex,
  Heading,
  Image,
  ListItem,
  OrderedList,
  Spacer,
  Text,
  UnorderedList,
} from '@chakra-ui/react'
import React from 'react'

export const Me = () => {
  return (
    <Box maxW={'3xl'} m={'5'}>
      <Image
        boxSize={'48'}
        m="2"
        mb="6"
        draggable={'false'}
        rounded={'2xl'}
        src="https://cdn.discordapp.com/avatars/679660057717375006/03b1206ec2c915e5da8224048e1a8749.png?size=512"
      />
      <Flex size={'xl'} mb="2">
        <Image
          draggable={'false'}
          boxSize={'10'}
          src='https://i.ibb.co/Qf8WPrv/waving-hand-1f44b.png" alt="waving-hand-1f44b'
          alt="Hand Wave"
        />
        <Heading p="1">Hi, I'm mooy</Heading>
      </Flex>
      <Box>
        <Text fontSize="md">
          I'm a FullStack Developer interested in learning new things. Currently experienced with
          ReactJS, NodeJS, GraphQL, PostgreSQL, MongoDB. Familiar with a few backend frameworks.
          Very much interested in writing Rust a lot more.
        </Text>

        <Text fontSize="x-large" fontWeight={'extrabold'}>
          Stuff I am trying as of now
        </Text>
        <UnorderedList fontWeight="semibold" fontSize="md">
          <ListItem>Fastify</ListItem>
          <ListItem>React Native</ListItem>
        </UnorderedList>
      </Box>
    </Box>
  )
}
