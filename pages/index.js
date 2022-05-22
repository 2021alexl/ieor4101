import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="IEOR 4101 -- waive exam preparation" />
        <p className="description">
          Author: Alex Lan
        </p>
        
        <p>
          IEOR 4101 probability models is a required course, but you have an option to take a waiver exam by August and take the half course (1.5 points) instead
        </p>
      </main>

      <Footer />
    </div>
  )
}
