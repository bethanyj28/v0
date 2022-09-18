import About from '../components/About'
import Contact from '../components/Contact'
import Container from '../components/Container'
import Head from 'next/head'
import Hero from '../components/Hero'
import NavBar from '../components/NavBar'

export default function Home() {
  return (
    <>
      <Head>
        <title>Bethany Janos</title>
        <link rel="icon" href="/meow_bongo-keyboard.gif" />
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
