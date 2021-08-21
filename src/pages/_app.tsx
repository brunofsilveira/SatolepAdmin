import Admin from '@atomic/template/AdminTemplate'
import { ChakraProvider } from '@chakra-ui/react'
import theme from '@common/theme'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme} resetCSS>
      <Admin>
        <Component {...pageProps} />
      </Admin>
    </ChakraProvider>
  )
}

export default MyApp
