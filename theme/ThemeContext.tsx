import React, { createContext, FC, useContext, useMemo, useState } from 'react'
import { createTheme, Theme, ThemeProvider } from '@mui/material/styles'
import { paletteLight, paletteDark } from './Palette'
import ThemeContextProviderProps from './ThemeContext.types'
import { nextLocalStorage } from 'utils/nextLocalStorage'

type ModeType = 'light' | 'dark'

type ContextConfigType = {
  toggleColorMode: VoidFunction
  mode: ModeType
  theme: Theme | undefined
}

const Context = createContext<ContextConfigType>({
  toggleColorMode: () => {
    return
  },
  mode: 'light',
  theme: undefined,
})

export const useThemeContext = (): ContextConfigType => {
  const { toggleColorMode, mode, theme } = useContext(Context)

  return {
    toggleColorMode,
    mode,
    theme,
  }
}

const ThemeContextProvider: FC<ThemeContextProviderProps> = ({ children }) => {
  const initialMode = nextLocalStorage()?.getItem('theme') ?? 'light'
  const [mode, setMode] = useState<ModeType>(initialMode as ModeType)

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          ...(mode === 'light' ? paletteLight : paletteDark),
        },
        components: {
          MuiTextField: {
            defaultProps: {
              variant: 'standard',
              autoComplete: 'off',
            },
            styleOverrides: {
              root: {
                width: '100%',
                marginBottom: '1em',
              },
            },
          },
        },
      }),
    [mode]
  )

  const colorMode = useMemo(
    () => ({
      toggleColorMode: (): void => {
        setMode(prevMode => (prevMode === 'light' ? 'dark' : 'light'))
        nextLocalStorage()?.setItem('theme', mode === 'light' ? 'dark' : 'light')
      },
      mode,
      theme,
    }),
    [mode, theme]
  )

  return (
    <Context.Provider value={colorMode}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </Context.Provider>
  )
}

export default ThemeContextProvider
