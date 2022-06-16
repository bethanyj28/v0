import Head from 'next/head'
import Container from '../components/Container'
import NavBar from '../components/NavBar'

export default function Home() {
  return ( 
    <Container>
      <Head>
        <title>Bethany Janos</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
    </Container> 
  )
}
