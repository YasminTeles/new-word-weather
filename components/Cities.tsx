import Grid from '@mui/material/Grid'

import City from './City'

const cities = [1, 2, 3, 4, 5, 6, 7, 8, 9]

export default function Cities() {
  return (
    <>
      {cities.map((city) => (
        <Grid
          item
          xs={12}
          // ms={6}
          md={4}
          key={city}
        >
          <City
          />
        </Grid>
      ))}
    </>
  )
}
