import { FC, memo, useCallback, useState } from 'react'
import Link from 'next/link'
import { useTranslation } from 'next-i18next'
import { Language, Menu } from '@mui/icons-material'
import { IconButton, MenuItem, Select, SelectChangeEvent } from '@mui/material'
import { useResizeDetector } from 'react-resize-detector'
import { useRouter } from 'next/router'
import ActiveLink from './components/ActiveLink'
import Drawer from './components/Drawer'
import ThemeCharger from './components/ThemeCharger'
import classes from './Navbar.module.css'
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

const languages = ['en', 'es']

const Nabvar: FC = () => {
  const { t, i18n } = useTranslation('Nabvar')
  const { width, ref } = useResizeDetector()
  const { replace, asPath } = useRouter()
  const [lang, setLang] = useState(i18n.language)
  const [isOpen, setIsOpen] = useState(false)

  const toggleDrawer = useCallback(
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return
      }

      setIsOpen(open)
    },
    []
  )

  const handleChange = useCallback(
    (event: SelectChangeEvent): void => {
      const language = event.target.value
      setLang(language)
      void i18n.changeLanguage(language)
      void replace(asPath, asPath, { locale: language })
    },
    [asPath, i18n, replace]
  )

  return (
    <nav ref={ref} className={classes['nav-container']}>
      {(width ?? 0) <= 675 && (
        <IconButton onClick={toggleDrawer(true)}>
          <Menu />
        </IconButton>
      )}
      <div className={classes['logo-container']}>
        <Link href="/">
          <a className={classes.logo}>
            <ImageLogo />
          </a>
        </Link>
      </div>
      {(width ?? 0) > 675 && (
        <div className={classes['items-container']}>
          {menuItems.map(({ label, href }, i) => (
            <ActiveLink key={`${i}-${href}`} link={t(label)} href={href} />
          ))}
        </div>
      )}
      <div className="flex">
        <div className={classes['language-container']}>
          <Language />
          <Select value={lang} variant="standard" onChange={handleChange} autoWidth>
            {languages.map(_lang => (
              <MenuItem key={_lang} value={_lang}>
                {_lang}
              </MenuItem>
            ))}
          </Select>
        </div>
        <ThemeCharger />
      </div>
      <Drawer isOpen={isOpen} toggleDrawer={toggleDrawer} />
    </nav>
  )
}

export default memo(Nabvar)
