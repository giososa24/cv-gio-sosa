import React, { FC } from 'react'
import { Brightness4, Brightness7, Menu as MenuIcon } from '@mui/icons-material'
import {
  useTheme,
  AppBar as AppBarMui,
  Box,
  Divider,
  Drawer as DrawerMui,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Button,
} from '@mui/material'
import { useThemeContext } from 'theme'
import { Link } from 'react-router-dom'
import useStyles from './AppBar.styles'
import AppBarProps from './AppBar.types'

const DRAWER_WIDTH = 240
const navItems = ['Home', 'About', 'Contact']

const HomeLink = (): JSX.Element => {
  const { classes } = useStyles()

  return (
    <ListItemButton className={classes.homeLinkBtn}>
      <Link to="/">Gio Sosa</Link>
    </ListItemButton>
  )
}

const Drawer: FC<{ handleDrawerToggle: VoidFunction }> = ({ handleDrawerToggle }): JSX.Element => {
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

const AppBar: FC<AppBarProps> = ({ children }) => {
  const theme = useTheme()
  const { toggleColorMode } = useThemeContext()
  const { classes } = useStyles()
  const [mobileOpen, setMobileOpen] = React.useState(false)

  const handleDrawerToggle = (): void => {
    setMobileOpen(!mobileOpen)
  }

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBarMui component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}>
            <HomeLink />
          </Box>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map(item => (
              <Button key={item} sx={{ color: theme.palette.background.default }}>
                {item}
              </Button>
            ))}
          </Box>
          <Box className={classes.iconThemeContainer}>
            <IconButton sx={{ ml: 1 }} onClick={toggleColorMode} color="inherit">
              {theme.palette.mode === 'dark' ? (
                <Brightness7 className={classes.icon} />
              ) : (
                <Brightness4 className={classes.icon} />
              )}
            </IconButton>
          </Box>
        </Toolbar>
      </AppBarMui>
      <Box component="nav">
        <DrawerMui
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: DRAWER_WIDTH,
            },
          }}
        >
          <Drawer handleDrawerToggle={handleDrawerToggle} />
        </DrawerMui>
      </Box>
      <Box component="main" className={classes.contentContainer}>
        {children}
      </Box>
    </Box>
  )
}

export default AppBar
