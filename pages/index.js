import Head from 'next/head'
import DarkModeToggle from '../components/DarkModeToggle'

export default function Home() {
  return (
    <div className="dark:bg-gray-700 h-screen w-screen">
      <Head>
        <title>Bethany Janos</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <DarkModeToggle />
    </div>
  )
}
