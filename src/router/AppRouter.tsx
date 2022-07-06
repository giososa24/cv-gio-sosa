import React, { FC, memo } from 'react'
import { HashRouter, Route, Routes, Navigate } from 'react-router-dom'
import Home from 'pages/Home'
import NotFound from 'pages/NotFound'
import AppBar from 'components/AppBar'

const AppRouter: FC = memo(() => {
  return (
    <HashRouter>
      <AppBar>
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AppBar>
    </HashRouter>
  )
})

export default AppRouter
