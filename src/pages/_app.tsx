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
          images: [
            {
              url: 'https://cdn.discordapp.com/avatars/679660057717375006/03b1206ec2c915e5da8224048e1a8749.png?size=512',
            },
          ],
        }}
        description="Personal Space on the Internet for some Blogs and somethings about myself"
      />
      <Fonts />
      <Spotify />
      <Component {...pageProps} />
    </ChakraProvider>
  )
}
export default App
