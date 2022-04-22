import Head from 'next/head'
import Container from '../components/Container'
import DarkModeToggle from '../components/DarkModeToggle'
import Hero from '../components/Hero'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'

export default function Home() {
  return (
    <Container>
      <Head>
        <title>Bethany Janos</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <DarkModeToggle />
      <Parallax pages={2} style={{ top: '0', left: '0' }}>
        <ParallaxLayer
          offset={0}
          speed={2.5}>
          <Hero />
        </ParallaxLayer>
      </Parallax>
    </Container>
  )
}
