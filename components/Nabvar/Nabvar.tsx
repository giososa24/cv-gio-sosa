import { FC } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useTranslation } from 'next-i18next'
import { Brightness4, Brightness7 } from '@mui/icons-material'
import { IconButton } from '@mui/material'
import styles from './Nabvar.module.css'
import useStyles from './Navbar.styles'
import ActiveLink from 'components/ActiveLink'
import image from 'assets/images/gio-sosa-logo.png'
import { useThemeContext } from 'theme/ThemeContext'

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
  const { classes, theme } = useStyles()
  const { toggleColorMode } = useThemeContext()

  return (
    <nav className={styles['menu-container']}>
      <div>
        <Link href="/">
          <a>
            <Image
              width="100%"
              height="40%"
              src={image}
              title="Page not found"
              alt="Page not found"
            />
          </a>
        </Link>
      </div>
      <div>
        {menuItems.map(({ label, href }, i) => (
          <ActiveLink key={`${i}-${href}`} link={t(label)} href={href} />
        ))}
      </div>
      <div>
        <IconButton sx={{ ml: 1 }} onClick={toggleColorMode} color="inherit">
          {theme.palette.mode === 'dark' ? (
            <Brightness7 className={classes.icon} />
          ) : (
            <Brightness4 className={classes.icon} />
          )}
        </IconButton>
      </div>
    </nav>
  )
}

export default Nabvar
