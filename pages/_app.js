import { ThemeProvider } from 'next-themes'
import { GlobalStyles } from '../styles/globalstyles'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'

config.autoAddCss = false

function Home({ Component, pageProps }) {
  return (
    <>
    <GlobalStyles />
    <ThemeProvider defaultTheme="system">
      <Component {...pageProps} />
    </ThemeProvider>
    </>
  )
}

export default Home
