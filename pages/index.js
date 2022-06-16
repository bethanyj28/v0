import Container from '../components/Container'
import Head from 'next/head'
import Hero from '../components/Hero'
import NavBar from '../components/NavBar'

export default function Home() {
  return ( 
    <>
      <Head>
        <title>Bethany Janos</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <Container>
        <Hero />
      </Container> 
    </>
  )
}
