import Highlight, { defaultProps, Prism } from 'prism-react-renderer'
import React from 'react'
import { chakra } from '@chakra-ui/system'
import githubTheme from 'prism-react-renderer/themes/github'
import nightOwl from 'prism-react-renderer/themes/nightOwl'
import { useColorModeValue } from '@chakra-ui/react'

export const Code = (props: any): JSX.Element => {
  const bg = useColorModeValue('#ffffff', '#2E3440')
  const theme = useColorModeValue(githubTheme, nightOwl)
  console.log(props)
  return (
    <Highlight
      Prism={Prism}
      code={props.children}
      language={props.className ? props.className.split('-')[1] : 'tsx'}
      theme={theme}
    >
      {({ tokens, getLineProps, getTokenProps, className, style }) => {
        tokens.pop()
        return (
          <chakra.pre
            bg={bg}
            overflowX="auto"
            className={className}
            w="full"
            fontSize="sm"
            border="1px solid #3B4252"
            my="1.75rem !important"
            fontFamily={'JetBrains'}
          >
            {tokens.map((line, i) => (
              <chakra.div
                key={i}
                {...getLineProps({ line, key: i })}
                d="table-row"
                lineHeight="taller"
              >
                <chakra.span
                  d="table-cell"
                  textAlign="right"
                  pr={4}
                  userSelect="none"
                  opacity={0.5}
                >
                  {i + 1}
                </chakra.span>
                {line.map((token, key) => (
                  <chakra.span key={key} {...getTokenProps({ token, key })} />
                ))}
              </chakra.div>
            ))}
          </chakra.pre>
        )
      }}
    </Highlight>
  )
}
