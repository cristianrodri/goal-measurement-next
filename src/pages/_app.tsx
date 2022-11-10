import '../styles/styles.css'
import type { AppProps } from 'next/app'
import { ThemeMuiProvider } from './../context/ThemeMuiProvider'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeMuiProvider>
      <Component {...pageProps} />
    </ThemeMuiProvider>
  )
}

export default MyApp
