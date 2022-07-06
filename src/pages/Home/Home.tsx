import React, { FC, memo } from 'react'
import Typewriter from 'typewriter-effect'
import { Box } from '@mui/material'
import { useTranslation } from 'react-i18next'
import image from 'assets/images/json-code.png'
import useStyles from './Home.styles'
import './Home.styles.css'

const Home: FC = () => {
  const { t } = useTranslation(['Home', 'AppBar'])
  const { classes } = useStyles()
  const jsonText = `
  <span class="tag">"${t('nombre')}"</span>: &nbsp;"Gio Sosa",<br />
  <span class="tag">"${t('puesto')}"</span>: &nbsp;"${t('Desarrollador frontend')}",
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
    </Box>
  )
}

export default memo(Home)
