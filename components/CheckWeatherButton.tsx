import React from "react"

import Button from "@mui/material/Button"

function goToResults() {
  const node = document.getElementById("results")
  if (node) {
    node.scrollIntoView({
      behavior: "smooth"
    })
  }
}

export default function CheckWeatherButton() {
  return (
    <Button
      variant="contained"
      onClick={React.useCallback(
        () => {
          goToResults()
        },
        []
      )}
    >
      Check the weather!
    </Button>
  )
}
