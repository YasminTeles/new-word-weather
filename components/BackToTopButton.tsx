import React from "react"

import NavigationIcon from "@mui/icons-material/Navigation"
import Fab from "@mui/material/Fab"

function goToTop() {
  const node = document.getElementById("bannerHero")
  if (node) {
    node.scrollIntoView({
      behavior: "smooth"
    })
  }
}

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
        () => goToTop(),
        []
      )}
    >
      <NavigationIcon />
    </Fab>
  )
}
