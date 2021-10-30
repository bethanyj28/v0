import Head from 'next/head'
import Container from '../components/Container'
import DarkModeToggle from '../components/DarkModeToggle'
import Hero from '../components/Hero'

export default function Home() {
  return (
    <Container>
      <Head>
        <title>Bethany Janos</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <DarkModeToggle />
      <Hero />
    </Container>
  )
}
