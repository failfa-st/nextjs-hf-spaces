import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>nextjs-docker-starter</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          <a href="https://nextjs.org">Next.js</a> in Docker on 🤗 Spaces!
        </h1>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://failfa.st"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/failfast.svg" alt="failfast Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
