import FavoriteIcon from "@mui/icons-material/Favorite"
import { pink } from "@mui/material/colors"

const color = {
  color: pink[500]
}

export default function HeartIcon() {
  return (
    <FavoriteIcon
      fontSize="small"
      sx={color}
    />
  )
}
