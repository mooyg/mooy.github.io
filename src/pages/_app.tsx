import { AppProps } from 'next/app'
import '../styles/global.css'
import { ChakraProvider } from '@chakra-ui/react'
import Fonts from '../styles/Fonts'
import theme from '../styles/theme'
import { Spotify } from '../Components/Spotify/Spotify'
import { DefaultSeo } from 'next-seo'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ChakraProvider theme={theme}>
      <DefaultSeo
        defaultTitle="mooy"
        openGraph={{
          type: 'website',
          locale: 'en_IE',
          url: 'https://mooy.vercel.app',
          site_name: 'mooy',
        }}
      />
      <Fonts />
      <Spotify />
      <Component {...pageProps} />
    </ChakraProvider>
  )
}
export default App
