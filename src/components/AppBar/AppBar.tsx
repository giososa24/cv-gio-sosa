import React, { FC, memo, useCallback, useState } from 'react'
import { Brightness4, Brightness7, Menu as MenuIcon } from '@mui/icons-material'
import {
  useTheme,
  AppBar as AppBarMui,
  Box,
  Drawer as DrawerMui,
  IconButton,
  Toolbar,
  Button,
} from '@mui/material'
import { useThemeContext } from 'theme'
import { useTranslation } from 'react-i18next'
import useStyles from './AppBar.styles'
import AppBarProps from './AppBar.types'
import HomeLink from './components/HomeLink/HomeLink'
import Drawer from './components/Drawer'

const DRAWER_WIDTH = 240
export const navItems = ['Inicio', 'Sobre mí', 'Contáctame']

const AppBar: FC<AppBarProps> = ({ children }) => {
  const theme = useTheme()
  const { t } = useTranslation('AppBar')
  const { toggleColorMode } = useThemeContext()
  const { classes } = useStyles()
  const [mobileOpen, setMobileOpen] = useState(false)

  const handleDrawerToggle = useCallback((): void => {
    setMobileOpen(!mobileOpen)
  }, [mobileOpen])

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBarMui component="nav" className={classes.navbar}>
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
              <Button key={item} sx={{ color: theme.palette.text.primary }}>
                {t(item)}
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

export default memo(AppBar)
