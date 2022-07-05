import React, { FC, memo } from 'react'
import useStyles from 'components/AppBar/AppBar.styles'
import { Box, Divider, List, ListItem, ListItemButton, ListItemText } from '@mui/material'
import HomeLink from 'components/AppBar/components/HomeLink'
import { navItems } from 'components/AppBar/AppBar'

type DrawerProps = {
  handleDrawerToggle: VoidFunction
}

const Drawer: FC<DrawerProps> = ({ handleDrawerToggle }) => {
  const { classes } = useStyles()

  return (
    <Box onClick={handleDrawerToggle} className={classes.drawerContainer}>
      <Box sx={{ my: 2, display: 'flex', justifyContent: 'center' }}>
        <HomeLink />
      </Box>
      <Divider />
      <List>
        {navItems.map(item => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'left' }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  )
}

export default memo(Drawer)
