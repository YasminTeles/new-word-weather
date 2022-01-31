import Head from "next/head"

import Container from "@mui/material/Container"
import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography"

import Author from "../components/Author"
import BackToTopButton from "../components/BackToTopButton"
import Cities from "../components/Cities"
import HeartIcon from "../components/HeartIcon"
import Menu from "../components/Menu/Menu"
import Pitch from "../components/Pitch"

export default function Home() {
  return (
    <>
      <Head>
        <title>World Weather</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Menu />

        <Container
          maxWidth="lg"
          id="bannerHero"
        >
          <Grid
            container
            spacing={2}
            // height="60vh"
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

        <Container
          maxWidth="lg"
          id="results"
        >
          <Grid
            container
            spacing={4}
          >
            <Cities />
          </Grid>
        </Container>

        <BackToTopButton />

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
