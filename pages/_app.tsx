import { ComponentType } from 'react'
import 'styles/globals.css'
import type { AppProps } from 'next/app'
import { appWithTranslation } from 'next-i18next'
import ThemeContextProvider from 'theme/ThemeContext'

const MyApp: ComponentType<AppProps> = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeContextProvider>
      <Component {...pageProps} />
    </ThemeContextProvider>
  )
}

export default appWithTranslation(MyApp)
