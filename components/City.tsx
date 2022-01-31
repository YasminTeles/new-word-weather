import Box from "@mui/material/Box"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import CardMedia from "@mui/material/CardMedia"
import Typography from "@mui/material/Typography"

import Celsius from "./Celsius"

const styles = {
  card: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    minWidth: 275
  },
  content: {
    flex: "1 0 auto"
  },
  box: {
    width: "50%",
    height: "160px",
    backgroundColor: "background.paper",
  },
  media: {
    width: 64,
    height: 64
  }
}

export default function City() {
  return (
    <Card
      elevation={2}
      sx={styles.card}
    >
      <CardContent
        sx={styles.content}
      >
        <Typography
          color="secondary.dark"
          variant="body2"
          align='justify'
          display="flex"
          gutterBottom
        >
          Rio de Janeiro
        </Typography>

        <Typography
          variant="h4"
          color="secondary"
          gutterBottom
        >
         25 <Celsius />
        </Typography>

        <Typography
          color="secondary"
          variant="body1"
        >
          34<Celsius /> max
          <br/>
          15<Celsius /> min
        </Typography>

      </CardContent>

      <Box
         sx={styles.box}
         display="flex"
         justifyContent="center"
         alignItems="center"
      >
        <CardMedia
          component="img"
          sx={styles.media}
          image="/images/cloudy.png"
          alt="Live from space album cover"
        />
      </Box>
    </Card>
  )
}
