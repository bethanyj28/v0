import { ThemeProvider } from 'next-themes'
import { GlobalStyles } from '../styles/globalstyles'

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
