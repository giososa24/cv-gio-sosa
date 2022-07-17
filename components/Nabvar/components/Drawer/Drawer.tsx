import React, { FC, memo, useCallback } from 'react'
import {
  Box,
  Drawer as DrawerMui,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material'
import { useTranslation } from 'next-i18next'
import { Home, Email, AccountCircle } from '@mui/icons-material'
import Link from 'next/link'
// import { useRouter } from 'next/router'
import DrawerProps, { MenuItemsType } from './Drawer.types'

const menuItems: MenuItemsType[] = [
  {
    label: 'Inicio',
    icon: 'home',
    href: '/',
  },
  {
    label: 'Sobre mí',
    icon: 'account_circle',
    href: '/about',
  },
  {
    label: 'Contáctame',
    icon: 'email',
    href: '/contact',
  },
]

const Drawer: FC<DrawerProps> = ({ isOpen, toggleDrawer }) => {
  const { t } = useTranslation('Nabvar')
  // const { asPath } = useRouter()

  const renderIcon = useCallback((icon: 'home' | 'account_circle' | 'email'): JSX.Element => {
    switch (icon) {
      case 'home':
        return <Home />
      case 'account_circle':
        return <AccountCircle />
      case 'email':
        return <Email />
      default:
        return <Home />
    }
  }, [])

  return (
    <DrawerMui anchor="top" open={isOpen} onClose={toggleDrawer(false)}>
      <Box
        sx={{ width: 'auto' }}
        role="presentation"
        onClick={toggleDrawer(false)}
        onKeyDown={toggleDrawer(false)}
      >
        <List>
          {menuItems.map(({ label, icon, href }) => (
            <Link key={label} href={href}>
              <a>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>{renderIcon(icon)}</ListItemIcon>
                    <ListItemText primary={t(label)} />
                  </ListItemButton>
                </ListItem>
              </a>
            </Link>
          ))}
        </List>
      </Box>
    </DrawerMui>
  )
}

export default memo(Drawer)
