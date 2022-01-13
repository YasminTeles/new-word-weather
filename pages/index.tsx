import Head from "next/head"

import Container from "@mui/material/Container"
import Typography from "@mui/material/Typography"
import Grid from "@mui/material/Grid"

import Author from "./components/Author"
import HeartIcon from "./components/HeartIcon"
import Pitch from "./components/Pitch"

export default function Home() {
  return (
    <>
      <Head>
        <title>World Weather</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Menu />

        <Container maxWidth="lg">
          <Grid
            container
            spacing={2}
            height="60vh"
            alignItems="center"
          >
            <Grid
              item
              xs={12}
              md={4}
            >
              <Pitch />
            </Grid>
          </Grid>
        </Container>
      </main>

      <footer>
        <Typography
          variant="h6"
          align="center"
          gutterBottom
        >
          This side project is made with <HeartIcon /> by <Author />
        </Typography>
      </footer>
    </>
  )
}
