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
import { useRouter } from 'next/router'
import DrawerProps, { MenuItemsType } from './Drawer.types'
import useStyles from 'components/Nabvar/components/ActiveLink/ActiveLink.styles'

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
  const { asPath } = useRouter()
  const { classes } = useStyles()

  const renderIcon = useCallback(
    (icon: 'home' | 'account_circle' | 'email', isSelected: boolean): JSX.Element => {
      switch (icon) {
        case 'home':
          return <Home className={isSelected ? classes.linkActive : classes.link} />
        case 'account_circle':
          return <AccountCircle className={isSelected ? classes.linkActive : classes.link} />
        case 'email':
          return <Email className={isSelected ? classes.linkActive : classes.link} />
        default:
          return <Home className={isSelected ? classes.linkActive : classes.link} />
      }
    },
    [classes.link, classes.linkActive]
  )

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
                    <ListItemIcon>{renderIcon(icon, asPath === href)}</ListItemIcon>
                    <ListItemText
                      className={asPath === href ? classes.linkActive : classes.link}
                      primary={t(label)}
                    />
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
