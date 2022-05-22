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
        
        <p>
        Recommended textbook: Introduction to Probability & Statistics for Engineers and Scientist (5th)
        </p>
        
        <p>
        Topics:
        </p>
        
        <p>
        Probability: Discrete & Continuous Distribution, Independence & Conditioning, Bayes Rule, Expectation & Variance, Law of Large Number, Central Limit Theorem
        </p>
        
        <p>
        Simulation: Basic Methods as Inverse Transform, Acceptence-Rejection, etc.
        </p>
        
        <p>
        Statistics: Points and Interval Estimation, Hypothesis Testing, Regression
        </p>
        
        <p>
        </p>
        
        <p>
        </p>
        
        <p>
        </p>
      </main>

      <Footer />
    </div>
  )
}
