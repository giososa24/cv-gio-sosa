import React, { FC, memo } from 'react'
import {
  Box,
  Drawer as DrawerMui,
  Icon,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material'
import { useTranslation } from 'next-i18next'
import Link from 'next/link'
import { DrawerProps } from './Drawer.types'

const menuItems = [
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
                    <ListItemIcon>
                      <Icon>{icon}</Icon>
                    </ListItemIcon>
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
