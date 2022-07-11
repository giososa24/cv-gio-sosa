import { ComponentType } from 'react'
import 'styles/globals.css'
import type { AppProps } from 'next/app'
import { appWithTranslation } from 'next-i18next'
import { CacheProvider } from '@emotion/react'
import createCache from '@emotion/cache'
import ThemeContextProvider from 'theme/ThemeContext'

export const muiCache = createCache({
  key: 'mui',
  prepend: true,
})

const MyApp: ComponentType<AppProps> = ({ Component, pageProps }: AppProps) => {
  return (
    <CacheProvider value={muiCache}>
      <ThemeContextProvider>
        <Component {...pageProps} />
      </ThemeContextProvider>
    </CacheProvider>
  )
}

export default appWithTranslation(MyApp)
