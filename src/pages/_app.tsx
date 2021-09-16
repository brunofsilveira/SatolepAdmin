import SatolepProvider from '@atomic/template/SatolepProvider'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SatolepProvider>
      <Component {...pageProps} />
    </SatolepProvider>
  )
}

export default MyApp
