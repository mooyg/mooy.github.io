import React, { Children, ReactNode } from 'react'
import { Heading as ChakraHeading, transform } from '@chakra-ui/react'
export const Heading = ({ children }: Record<'children', ReactNode>) => {
  return (
    <ChakraHeading
      transition={'0.5s'}
      my={'4'}
      position={'relative'}
      display={'inline-block'}
      className="blog-heading"
    >
      {children}
    </ChakraHeading>
  )
}
