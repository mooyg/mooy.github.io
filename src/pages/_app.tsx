import { AppProps } from 'next/app'
import '../styles/global.css'
import { ChakraProvider } from '@chakra-ui/react'
import Fonts from '../styles/Fonts'
import theme from '../styles/theme'
import { Spotify } from '../Components/Spotify/Spotify'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <Spotify />
      <Component {...pageProps} />
    </ChakraProvider>
  )
}
export default App
