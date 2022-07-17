import React, { FC, useCallback, useEffect, useState } from 'react'
import { Brightness7 } from '@mui/icons-material'
import { IconButton } from '@mui/material'
import { useTheme } from 'next-themes'

const ThemeCharger: FC = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => setMounted(true), [])

  const handleOnTheme = useCallback(() => {
    theme === 'light' ? setTheme('dark') : setTheme('light')
  }, [setTheme, theme])

  if (!mounted) {
    return null
  }

  return (
    <IconButton sx={{ ml: 1 }} onClick={handleOnTheme} color="inherit">
      <Brightness7 />
    </IconButton>
  )
}

export default ThemeCharger
