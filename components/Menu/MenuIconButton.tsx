import MenuIcon from "@mui/icons-material/Menu"
import IconButton from "@mui/material/IconButton"

import MenuIconButtonProps from "../../types/MenuIconButtonProps"

export default function MenuIconButton({ onClick }: MenuIconButtonProps) {
  return (
    <IconButton
      size="large"
      aria-label="account of current user"
      aria-controls="menu-appBar"
      aria-haspopup="true"
      onClick={onClick}
      color="inherit"
    >
      <MenuIcon />
    </IconButton>
  )
}
