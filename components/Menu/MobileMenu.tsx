import React from 'react'

import MenuIcon from '@mui/icons-material/Menu'
import IconButton from '@mui/material/IconButton'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Typography from '@mui/material/Typography'
import { isEmpty } from 'lodash'

import MenuProps from '../../types/MenuProps'

export default function MobileMenu({ pages }: MenuProps) {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null)

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget)
  }

  const handleCloseNavMenu = (href: string) => {
    return () => {
      if (!isEmpty(href)) {
        window.location.href = href
      }

      setAnchorElNav(null)
    }
  }

  return (
    <>
      <IconButton
        size="large"
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleOpenNavMenu}
        color="primary"
      >
        <MenuIcon />
      </IconButton>

      <Menu
        id="menu-appbar"
        anchorEl={anchorElNav}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        open={Boolean(anchorElNav)}
        onClose={handleCloseNavMenu}
        sx={{
          display: { xs: 'block', md: 'none' },
        }}
      >
        {pages.map((page) => (
          <MenuItem
            key={page.name}
            onClick={handleCloseNavMenu(page.href)}
          >
            <Typography
              color="secondary"
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
