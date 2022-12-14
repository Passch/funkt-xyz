import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>funkt()</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Hello, it's funkt()" />
        <p className="description">
        We will be celebrating the lauch of our new site very soon! 
        </p>
      </main>

      <Footer />
    </div>
  )
}
