import React, { FC, useEffect, useState } from 'react'
import { Brightness7 as Brightness7Icon, DarkMode as DarkModeIcon } from '@mui/icons-material'
import { IconButton } from '@mui/material'
import { useTheme } from 'next-themes'
import classes from './ThemeCharger.module.css'

const ThemeCharger: FC = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => setMounted(true), [])

  if (!mounted) {
    return null
  }

  return (
    <IconButton
      sx={{ ml: 1 }}
      disableRipple
      onClick={(): void => setTheme(theme === 'light' ? 'dark' : 'light')}
      color="inherit"
    >
      {theme === 'light' ? (
        <Brightness7Icon className={classes['sun-icon']} />
      ) : (
        <DarkModeIcon className={classes['moon-icon']} />
      )}
    </IconButton>
  )
}

export default ThemeCharger
