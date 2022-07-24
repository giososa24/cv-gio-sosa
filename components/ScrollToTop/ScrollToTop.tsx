import React, { FC, useCallback, useEffect, useState } from 'react'
import { Fab, Tooltip } from '@mui/material'
import { ArrowUpward } from '@mui/icons-material'
import { useTranslation } from 'next-i18next'
import classes from './ScrollToTop.module.css'

const ScrollToTop: FC = () => {
  const [isVisible, setIsVisible] = useState(false)
  const { t } = useTranslation('common')

  const onScroll = useCallback(() => {
    if (typeof window !== 'undefined') {
      window.scrollY > 0 ? setIsVisible(true) : setIsVisible(false)
    }
  }, [])

  useEffect(() => {
    document.addEventListener('scroll', onScroll)

    return () => {
      document.removeEventListener('scroll', onScroll)
    }
  }, [onScroll])

  return isVisible ? (
    <Tooltip title={t('Ir a arriba')}>
      <Fab
        className={classes.fab}
        onClick={(): void => {
          window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
        }}
      >
        <ArrowUpward />
      </Fab>
    </Tooltip>
  ) : null
}

export default ScrollToTop
