import { Box, Typography } from '@mui/material'
import { TFunction } from 'i18next'
import React, { FC, memo } from 'react'
import { useTranslation } from 'react-i18next'

const Home: FC = () => {
  const { i18n, t } = useTranslation(['Foo'])

  return (
    <Box maxWidth="900px" margin="auto">
      <Typography>Idioma de la app : {i18n.language}</Typography>
      <Typography>{t('Hola mundo')}</Typography>
      {/* eslint-disable-next-line @typescript-eslint/no-misused-promises */}
      <button onClick={async (): Promise<TFunction> => await i18n.changeLanguage('es')}>ES</button>
      {/* eslint-disable-next-line @typescript-eslint/no-misused-promises */}
      <button onClick={async (): Promise<TFunction> => await i18n.changeLanguage('en')}>EN</button>
    </Box>
  )
}

export default memo(Home)
