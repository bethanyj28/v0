import About from '../components/about'
import Contact from '../components/contact'
import Container from '../components/container'
import Head from 'next/head'
import Hero from '../components/hero'
import NavBar from '../components/navbar'

export default function Home() {
  return (
    <>
      <Head>
        <title>Bethany Janos</title>
        <link rel="icon" href="/meow_photobomb.png" />
      </Head>
      <NavBar />
      <Container>
        <Hero />
        <About />
        <Contact />
      </Container>
    </>
  )
}
