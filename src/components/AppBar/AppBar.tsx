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
  Select,
  MenuItem,
  FormControl,
  SelectChangeEvent,
} from '@mui/material'
import { useThemeContext } from 'theme'
import { useTranslation } from 'react-i18next'
import useStyles from './AppBar.styles'
import AppBarProps from './AppBar.types'
import HomeLink from './components/HomeLink/HomeLink'
import Drawer from './components/Drawer'

const DRAWER_WIDTH = 240
export const navItems = ['Inicio', 'Sobre mí', 'Contáctame']
const languages = ['en', 'es']

const AppBar: FC<AppBarProps> = ({ children }) => {
  const theme = useTheme()
  const { t, i18n } = useTranslation('AppBar')
  const { toggleColorMode } = useThemeContext()
  const { classes } = useStyles()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [lang, setLang] = useState(localStorage.getItem('i18nextLng') ?? 'es')

  const handleChange = useCallback(
    (event: SelectChangeEvent): void => {
      const language = event.target.value
      setLang(language)
      void i18n.changeLanguage(language)
    },
    [i18n]
  )

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
            <FormControl sx={{ m: 1, minWidth: 45 }}>
              <Select value={lang} variant="standard" onChange={handleChange} autoWidth>
                {languages.map(_lang => (
                  <MenuItem key={_lang} value={_lang}>
                    {_lang}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
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
        <Box width="100%" height="100%">
          <Box padding="15px">{children}</Box>
        </Box>
      </Box>
    </Box>
  )
}

export default memo(AppBar)
