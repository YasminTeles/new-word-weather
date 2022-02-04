import React from "react"

import NavigationIcon from "@mui/icons-material/Navigation"
import Fab from "@mui/material/Fab"

import scrollTo from "../utils/scrollTo"

const styles = {
  position: "fixed",
  right: "10px",
  bottom: "10px",
}

export default function BackToTopButton() {
  return (
    <Fab
      color="primary"
      aria-label="backToTop"
      sx={styles}
      onClick={React.useCallback(
        () => scrollTo("bannerHero"),
        []
      )}
    >
      <NavigationIcon />
    </Fab>
  )
}
