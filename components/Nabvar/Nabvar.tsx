import { FC, memo, useCallback, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useTranslation } from 'next-i18next'
import { Brightness4, Brightness7, Language } from '@mui/icons-material'
import { FormControl, IconButton, MenuItem, Select, SelectChangeEvent } from '@mui/material'
import { useRouter } from 'next/router'
import useStyles from './Navbar.styles'
import ActiveLink from './components/ActiveLink'
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

const languages = ['en', 'es']

const Nabvar: FC = () => {
  const { t, i18n } = useTranslation('Nabvar')
  const { replace, asPath } = useRouter()
  const { classes, theme } = useStyles()
  const { toggleColorMode } = useThemeContext()
  const [lang, setLang] = useState(i18n.language)

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
    <nav className={classes.container}>
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
      <div className={classes.itemsContainer}>
        {menuItems.map(({ label, href }, i) => (
          <ActiveLink key={`${i}-${href}`} link={t(label)} href={href} />
        ))}
      </div>
      <div className={classes.actionsContainer}>
        <FormControl className={classes.languageContainer}>
          <Language />
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
      </div>
    </nav>
  )
}

export default memo(Nabvar)
