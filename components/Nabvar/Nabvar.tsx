import { FC, memo, useCallback, useState } from 'react'
import Link from 'next/link'
import { useTranslation } from 'next-i18next'
import { Menu } from '@mui/icons-material'
import { IconButton } from '@mui/material'
import { useResizeDetector } from 'react-resize-detector'
import ActiveLink from './components/ActiveLink'
import Drawer from './components/Drawer'
import ThemeCharger from './components/ThemeCharger'
import classes from './Navbar.module.css'
import LanguageSelector from './components/LanguageSelector'
import ImageLogo from 'assets/images/gio-sosa.svg'

const menuItems = [
  {
    label: 'Inicio',
    href: '/',
  },
  {
    label: 'Sobre mí',
    href: '/about',
  },
  {
    label: 'Contáctame',
    href: '/contact',
  },
]

const Nabvar: FC = () => {
  const { t } = useTranslation('Nabvar')
  const { width, ref } = useResizeDetector()
  const [isOpen, setIsOpen] = useState(false)

  const toggleDrawer = useCallback(
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' || (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return
      }

      setIsOpen(open)
    },
    [],
  )

  return (
    <nav ref={ref} className={classes['nav-container']}>
      {(width ?? 0) <= 675 && (
        <IconButton onClick={toggleDrawer(true)}>
          <Menu />
        </IconButton>
      )}
      <div className={classes['logo-container']}>
        <Link className={classes.logo} href="/">
          <ImageLogo />
        </Link>
      </div>
      {(width ?? 0) > 675 && (
        <div className={classes['items-container']}>
          {menuItems.map(({ label, href }, i) => (
            <ActiveLink key={`${i}-${href}`} link={t(label)} href={href} />
          ))}
        </div>
      )}
      <div className="flex gap-3">
        <ThemeCharger />
        <LanguageSelector />
      </div>
      <Drawer isOpen={isOpen} toggleDrawer={toggleDrawer} />
    </nav>
  )
}

export default memo(Nabvar)
