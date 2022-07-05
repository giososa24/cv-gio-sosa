import React, { FC, memo } from 'react'
import { Box } from '@mui/material'
import image from 'assets/images/Error_404.png'

const NotFound: FC = () => {
  return (
    <Box width="100%" height="100%" display="flex" justifyContent="center" alignItems="center">
      <img style={{ width: '50%' }} src={image} title="Page not found" alt="Page not found" />
    </Box>
  )
}

export default memo(NotFound)
