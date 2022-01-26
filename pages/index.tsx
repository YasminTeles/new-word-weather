import Head from "next/head"

import Typography from "@mui/material/Typography"

import Author from "./components/Author"
import HeartIcon from "./components/HeartIcon"

import styles from "@/pages/index.module.css"

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Word Weather</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Typography
          variant="h2"
          align="center"
          color="textPrimary"
          gutterBottom
        >
          Welcome to Word Weather!
        </Typography>

        <Typography
          variant="h6"
          align="center"
          color="textSecondary"
          paragraph
        >
          Get started by finding a city and then check the weather.
        </Typography>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h3>Documentation &rarr;</h3>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h3>Learn &rarr;</h3>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          >
            <h3>Examples &rarr;</h3>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a href="https://vercel.com/new" className={styles.card}>
            <h3>Deploy &rarr;</h3>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer>
        <Typography
          variant='h6'
          align='center'
          gutterBottom
        >
          This side project is made with <HeartIcon /> by <Author />
        </Typography>
      </footer>
    </div>
  )
}
