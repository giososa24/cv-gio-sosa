import React, { Suspense, FC, memo } from 'react'
import AppRouter from 'router/AppRouter'
import ThemeContextProvider from './theme'

const App: FC = () => {
  return (
    <Suspense fallback="loading...">
      <ThemeContextProvider>
        <AppRouter />
      </ThemeContextProvider>
    </Suspense>
  )
}

export default memo(App)
