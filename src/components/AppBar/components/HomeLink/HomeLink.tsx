import React, { FC, memo } from 'react'
import useStyles from 'components/AppBar/AppBar.styles'
import { ListItemButton } from '@mui/material'
import { Link } from 'react-router-dom'

const HomeLink: FC = () => {
  const { classes } = useStyles()

  return (
    <ListItemButton className={classes.homeLinkBtn}>
      <Link to="/">Gio Sosa</Link>
    </ListItemButton>
  )
}

export default memo(HomeLink)
