import React, { Suspense, FC, memo, createElement } from 'react'
import Loader from 'components/Loader'
import AppRouter from 'router/AppRouter'
import ThemeContextProvider from './theme'

const App: FC = () => {
  return (
    <Suspense fallback={createElement(Loader)}>
      <ThemeContextProvider>
        <AppRouter />
      </ThemeContextProvider>
    </Suspense>
  )
}

export default memo(App)
