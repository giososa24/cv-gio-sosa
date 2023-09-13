import { ComponentType, useEffect } from 'react'
import 'styles/globals.css'
import { ThemeProvider } from 'next-themes'
import type { AppProps } from 'next/app'
import { appWithTranslation } from 'next-i18next'
import AOS from 'aos'
import 'aos/dist/aos.css'

const MyApp: ComponentType<AppProps> = ({ Component, pageProps }: AppProps) => {
  useEffect(() => {
    AOS.init()
    AOS.refresh()
  }, [])

  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default appWithTranslation(MyApp)
