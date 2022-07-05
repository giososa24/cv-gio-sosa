import React, { FC, memo } from 'react'
import { Box } from '@mui/material'
import { HashRouter, Route, Routes, Navigate } from 'react-router-dom'
import Home from 'pages/Home'
import NotFound from 'pages/NotFound'
import AppBar from 'components/AppBar'

const AppRouter: FC = memo(() => {
  return (
    <HashRouter>
      <AppBar>
        <Box display="flex" width="100%" height="100%" position="absolute">
          <Routes>
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/home" element={<Home />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Box>
      </AppBar>
    </HashRouter>
  )
})

export default AppRouter
