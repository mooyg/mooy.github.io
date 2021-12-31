import { Link as ChakraLink, LinkProps as ChakraLinkProps } from '@chakra-ui/react'
import NextLink from 'next/link'
import { LinkProps as NextLinkProps } from 'next/dist/client/link'
import React, { PropsWithChildren } from 'react'

type NextChakraLinkProps = PropsWithChildren<NextLinkProps & Omit<ChakraLinkProps, 'as'>>
export const NextChakraLink = ({
  href,
  as,
  replace,
  scroll,
  shallow,
  prefetch,
  children,
  ...chakraProps
}: NextChakraLinkProps) => {
  return (
    <NextLink
      href={href}
      as={as}
      replace={replace}
      scroll={scroll}
      shallow={shallow}
      passHref
      prefetch={prefetch}
    >
      <ChakraLink {...chakraProps}>{children}</ChakraLink>
    </NextLink>
  )
}
