import { Badge, Flex, Heading, HStack, IconButton, useColorMode } from '@chakra-ui/react'
import { SunIcon as LightModeIcon } from '@modulz/radix-icons'
import { NextChakraLink } from '../ui/NextChakraLink'
import { MoonIcon as DarkModeIcon } from '@modulz/radix-icons'
export const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <header>
      <Flex flex={'1'} p="2" justifyContent={'space-between'} alignItems={'center'}>
        <HStack justify={'center'} alignItems={'center'}>
          <NextChakraLink href="/">
            <Heading size={'md'}>mooy</Heading>
          </NextChakraLink>
          <Badge colorScheme={'green'}>Now Available</Badge>
        </HStack>
        <IconButton aria-label="LightMode Icon" variant={'ghost'} onClick={toggleColorMode}>
          {colorMode === 'dark' ? (
            <LightModeIcon width={'24px'} height={'24px'} />
          ) : (
            <DarkModeIcon width={'24px'} height={'24px'} />
          )}
        </IconButton>
      </Flex>
    </header>
  )
}
