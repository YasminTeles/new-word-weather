import Button from '@mui/material/Button'

import MenuProps from '../../types/MenuProps'

export default function MenuBar({ pages }: MenuProps) {
  return (
    <>
      {pages.map((page) => (
        <Button
          key={page.name}
          href={page.href}
          sx={{ my: 2, color: 'white', display: 'block', textTransform: "none" }}
        >
          {page.name}
        </Button>
      ))}
    </>
  )
}
