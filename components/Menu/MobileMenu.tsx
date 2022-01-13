import React from "react"

import Menu from "@mui/material/Menu"
import MenuItem from "@mui/material/MenuItem"
import Typography from "@mui/material/Typography"
import { isEmpty } from "lodash"

import MenuProps from "../../types/MenuProps"
import MenuIconButton from "./MenuIconButton"

const style = {
  display: {
    xs: "block",
    md: "none"
  },
}

const position = {
  anchor: {
    vertical: "bottom",
    horizontal: "left",
  },
  transform: {
    vertical: "top",
    horizontal: "left",
  }
}

function goToHref(href: string) {
  if (!isEmpty(href)) {
    window.location.href = href
  }
}

export default function MobileMenu({ pages }: MenuProps) {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null)

  const handleCloseNavMenu = (href: string) => {
    return () => {
      goToHref(href)
      setAnchorElNav(null)
    }
  }

  return (
    <>
      <MenuIconButton
        onClick={React.useCallback(
          (event: React.MouseEvent<HTMLElement>) =>  setAnchorElNav(event.currentTarget),
          [setAnchorElNav]
        )}
      />

      <Menu
        id="menu-appBar"
        anchorEl={anchorElNav}
        anchorOrigin={React.useMemo(
          () => position.anchor,
          []
        )}
        keepMounted
        transformOrigin={React.useMemo(
          () => position.transform,
          []
        )}
        open={Boolean(anchorElNav)}
        onClose={React.useCallback(
          () => setAnchorElNav(null),
          [setAnchorElNav]
        )}
        sx={style}
      >
        {pages.map((page) => (
          <MenuItem
            key={page.name}
            onClick={handleCloseNavMenu(page.href)}
          >
            <Typography
              textAlign="center"
            >
              {page.name}
            </Typography>
          </MenuItem>
        ))}
      </Menu>
    </>
  )
}
