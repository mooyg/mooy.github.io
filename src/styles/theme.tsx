import { extendTheme, theme as baseTheme, ThemeConfig } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
}

const colors = {
  primary: { text: '#EEEEEE' },
}
const styles = {
  global: (props: any) => ({
    body: {
      backgroundColor: mode('#F9F9F9', '#222831')(props),
    },
    _selection: {
      background: mode('#F7DBF0', '#204961')(props),
    },
  }),
}
const components = {
  Heading: {
    color: colors.primary.text,
  },
}
const theme = extendTheme({
  config,
  colors,
  components,
  fonts: {
    body: `Wotfard`,
    heading: `Wotfard Bold`,
  },
  styles,
})
export default theme
