import Button from "@mui/material/Button"

import MenuProps from "../../types/MenuProps"

const style = {
  my: 2,
  color: "white",
  display: "block",
  textTransform: "none",
}

export default function DesktopMenu({ pages }: MenuProps) {
  return (
    <>
      {pages.map((page) => (
        <Button
          key={page.name}
          href={page.href}
          sx={style}
        >
          {page.name}
        </Button>
      ))}
    </>
  )
}
