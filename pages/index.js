import Head from 'next/head'
import Container from '../components/Container'
import DarkModeToggle from '../components/DarkModeToggle'

export default function Home() {
  return (
    <Container>
      <Head>
        <title>Bethany Janos</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <DarkModeToggle />
    </Container>
  )
}
