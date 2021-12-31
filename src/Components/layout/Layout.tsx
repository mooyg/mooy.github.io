import { Flex } from '@chakra-ui/react'
import React, { ReactNode } from 'react'
import { Header } from '../Header/Header'

type Layout = {
  children: ReactNode
}
export const Layout = ({ children }: Layout) => {
  return (
    <Flex minHeight={'100vh'} flexDirection={'column'}>
      <Header />
      <Flex flexDirection={['column', 'column', 'row', 'row']}>{children}</Flex>
    </Flex>
  )
}
