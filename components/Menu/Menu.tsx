import AppBar from "@mui/material/AppBar"
import Box from "@mui/material/Box"
import Container from "@mui/material/Container"
import Toolbar from "@mui/material/Toolbar"

import Page from "../../types/Page"
import DesktopMenu from "./DesktopMenu"
import MobileMenu from "./MobileMenu"

const pages: Page[] = [
  { name: "Home", href: ""},
  { name: "About us", href: "https://br.linkedin.com/in/yasminteles"},
  { name: "Portfolio", href: "https://github.com/YasminTeles"}
]

const style = {
  mobile: {
    flexGrow: 1,
    display: {
      xs: "flex",
      md: "none",
    },
  },
  desktop: {
    flexGrow: 1,
    display: {
      xs: "none",
      md: "flex"
    },
    justifyContent: "right",
    alignItems: "center"
  },
}

export default function Menu() {
  return (
    <AppBar
      position="static"
      elevation={0}
    >
      <Container maxWidth="xl">
        <Toolbar
          disableGutters
        >
          <Box sx={style.mobile}>
            <MobileMenu
              pages={pages}
            />
          </Box>

          <Box sx={style.desktop}>
            <DesktopMenu
              pages={pages}
            />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
