import Head from "next/head";
import styles from "@/styles/Home.module.css";

export default function Home() {
  return (
    <>
      <div className={styles.container}>
        <Head>
          <title>nextjs-docker-starter</title>
          <link rel="icon" href="/favicon.ico" />
          <meta name="description" content="Next.js in Docker on 🤗 Spaces" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>

        <main className={styles.main}>
          <h1 className={styles.title}>
            <a
              href="https://nextjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Next.js
            </a>{" "}
            in{" "}
            <a
              href="https://www.docker.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Docker
            </a>{" "}
            on 🤗{" "}
            <a
              href="https://huggingface.co/spaces"
              target="_blank"
              rel="noopener noreferrer"
            >
              Spaces
            </a>
            !
          </h1>
        </main>

        <footer className={styles.footer}>
          <a href="https://failfa.st" target="_blank" rel="noopener noreferrer">
            Powered by{" "}
            <img
              src="/failfast.svg"
              alt="failfast Logo"
              className={styles.logo}
            />
          </a>
          <a
            href="https://github.com/failfa-st/nextjs-docker-starter"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            Contribute on GitHub
          </a>
        </footer>
      </div>
    </>
  );
}
