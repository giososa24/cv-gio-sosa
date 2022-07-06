import React, { FC, memo } from 'react'
import Typewriter from 'typewriter-effect'
import { Box, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'
import image from 'assets/images/json-code.png'
import useStyles from './Home.styles'
import './Home.styles.css'

const Home: FC = () => {
  const { t } = useTranslation('Home')
  const { classes } = useStyles()
  const jsonText = `
  <span class="tag">"${t('nombre')}"</span>: &nbsp;"Gio Sosa",<br />
  <span class="tag">"${t('puesto')}"</span>: &nbsp;"Frontend developer",
`

  return (
    <Box maxWidth="900px" margin="auto">
      <Box position="relative" className={classes.typeWritterContainer}>
        <img src={image} title="json-code" alt="json-code" />
        <Typewriter
          onInit={(typewriter): void => {
            typewriter.typeString(jsonText).start()
          }}
          options={{
            autoStart: true,
            loop: true,
            wrapperClassName: classes.typeWritter,
            cursorClassName: classes.typeWritter,
          }}
        />
      </Box>
      {/* <Typography>Idioma de la app : {i18n.language}</Typography> */}
      <Typography>{t('Hola mundo')}</Typography>
      {/* eslint-disable-next-line @typescript-eslint/no-misused-promises */}
      {/* <button onClick={async (): Promise<TFunction> => await i18n.changeLanguage('es')}>ES</button> */}
      {/* eslint-disable-next-line @typescript-eslint/no-misused-promises */}
      {/* <button onClick={async (): Promise<TFunction> => await i18n.changeLanguage('en')}>EN</button> */}
    </Box>
  )
}

export default memo(Home)
