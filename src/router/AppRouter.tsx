import React, { FC } from 'react'
import { Box } from '@mui/material'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import Home from 'pages/Home'
import NotFound from 'pages/NotFound'
import AppBar from 'components/AppBar'

const AppRouter: FC = () => {
  return (
    <BrowserRouter>
      <AppBar>
        <Box display="flex" width="100%" height="100%" position="absolute">
          <Routes>
            <Route path="/" element={<Navigate to="/cv-gio-sosa" />} />
            <Route path="/cv-gio-sosa" element={<Home />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Box>
      </AppBar>
    </BrowserRouter>
  )
}

export default AppRouter
