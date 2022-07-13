import { ComponentType } from 'react'
import 'styles/globals.css'
import type { AppProps } from 'next/app'
import { appWithTranslation } from 'next-i18next'
import { CacheProvider } from '@emotion/react'
import createCache, { EmotionCache } from '@emotion/cache'
import { CssBaseline } from '@mui/material'
import ThemeContextProvider from 'theme/ThemeContext'

let muiCache: EmotionCache | undefined = undefined

export const createMuiCache = (): EmotionCache =>
  (muiCache = createCache({
    key: 'mui',
    prepend: true,
  }))

const MyApp: ComponentType<AppProps> = ({ Component, pageProps }: AppProps) => {
  return (
    <CacheProvider value={muiCache ?? createMuiCache()}>
      <ThemeContextProvider>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeContextProvider>
    </CacheProvider>
  )
}

export default appWithTranslation(MyApp)
