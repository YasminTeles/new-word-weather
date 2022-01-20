import Head from "next/head"

import Container from "@mui/material/Container"
import Typography from "@mui/material/Typography"
import Grid from "@mui/material/Grid"
import {
  createTheme,
  ThemeProvider
} from "@mui/material/styles"

import Author from "../components/Author"
import HeartIcon from "../components/HeartIcon"
import Pitch from "../components/Pitch"
import Menu from "../components/Menu/Menu"
import Waves from "../components/Waves"
import World from "../components/World"

const theme = createTheme({
  palette: {
    primary: {
      main: "#FFF",
    },
    secondary: {
      main: "#000",
    },
    text: {
      primary: "#FFF",
      secondary: "#E6E6E6",
      disabled: "rgba(0, 0, 0, 0.38)",
    },
  },
})

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>World Weather</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <section >
          <Menu />

          <Container maxWidth="lg">
            <Grid
              container
              spacing={2}
              alignItems="center"
              justifyContent="center"
            >
              <Grid
                item
                xs={12}
                md={4}
              >
                <Pitch />
              </Grid>

              <Grid
                item
                xs={12}
                md={8}
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <World />
              </Grid>
            </Grid>
          </Container>

          <Waves />

        </section>
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
    </ThemeProvider>
  )
}
