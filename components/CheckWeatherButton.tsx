import Button from '@mui/material/Button'

function goToResults() {
  const node = document.getElementById('results')
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
      onClick={() => goToResults() }
      disabled
    >
      Check the weather!
    </Button>
  )
}
