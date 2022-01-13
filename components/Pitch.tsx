import Button from "@mui/material/Button"
import Card from "@mui/material/Card"
import CardActions from "@mui/material/CardActions"
import CardContent from "@mui/material/CardContent"
import Typography from "@mui/material/Typography"

const styles = {
  card: {
    padding: "0px 16px 16px"
  },
  action: {
    justifyContent: "center"
  }
}

export default function Pitch() {
  return (
    <Card
      sx={styles.card}
    >
      <CardContent>
        <Typography
          variant="h2"
          align="center"
          color="textPrimary"
          gutterBottom
          >
          Welcome to World Weather!
        </Typography>

        <Typography
          variant="h6"
          align="center"
          color="textSecondary"
          paragraph
          >
          Get started by finding a city and then check the weather.
        </Typography>
      </CardContent>

      <CardActions
        sx={styles.action}
      >
        <Button
          variant="contained"
        >
          Check the weather!
        </Button>
      </CardActions>
    </Card>
  )
}
