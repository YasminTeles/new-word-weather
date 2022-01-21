import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'

import CheckWeatherButton from './CheckWeatherButton'

export default function Pitch() {
  return (
    <Stack
      direction="column"
      justifyContent="center"
      alignItems="center"
    >
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

      <CheckWeatherButton />
    </Stack>
  )
}
