import { Box, CircularProgress } from '@mui/material'
import React, { FC, memo } from 'react'

const Loader: FC = () => {
  return (
    <Box display="flex" width="100vw" height="100vh" justifyContent="center" alignItems="center">
      <CircularProgress color="primary" />
    </Box>
  )
}

export default memo(Loader)
