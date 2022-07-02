import React, { Suspense, FC } from 'react'
import './App.css'
import AppBar from './components/AppBar/AppBar'
import ThemeContextProvider from './theme'

const App: FC = () => {
  return (
    <Suspense fallback="loading...">
      <ThemeContextProvider>
        <AppBar />
      </ThemeContextProvider>
    </Suspense>
  )
}

export default App
