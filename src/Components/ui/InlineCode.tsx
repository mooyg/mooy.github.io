import { Code } from '@chakra-ui/react'
import React, { ReactNode } from 'react'

export const InlineCode = ({ children }: Record<'children', ReactNode>) => {
  return <Code colorScheme={'telegram'}>{children}</Code>
}
