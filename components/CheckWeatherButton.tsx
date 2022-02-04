import React from "react"

import Button from "@mui/material/Button"

import scrollTo from "../utils/scrollTo"

export default function CheckWeatherButton() {
  return (
    <Button
      variant="contained"
      onClick={React.useCallback(
        () => {
          scrollTo("results")
        },
        []
      )}
    >
      Check the weather!
    </Button>
  )
}
