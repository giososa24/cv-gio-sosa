import React, { FC } from 'react'
import Image from 'next/image'
import { Box, Typography } from '@mui/material'
import { useTranslation } from 'next-i18next'
import classes from './PresentationCard.module.css'
import HelloHand from 'assets/images/hello-hand.png'

const PresentationCard: FC = () => {
  const { t } = useTranslation('index')

  return (
    <Box className={classes.wrapper}>
      <Box className={classes.container}>
        <Box display="flex" flexDirection="row" gap="5px" m="0 -15px 10px">
          <Box className={classes.bullets} style={{ backgroundColor: 'red' }} />
          <Box className={classes.bullets} style={{ backgroundColor: 'yellow' }} />
          <Box className={classes.bullets} style={{ backgroundColor: 'green' }} />
        </Box>
        <Box className={classes['greeting-container']}>
          <Box className={classes['hand-container']}>
            <Image
              src={HelloHand}
              className={classes.handImage}
              alt="hello-hand"
              width="150px"
              height="150px"
              priority
            />
          </Box>
          <Box>
            <Typography component="h1" className={classes.title}>
              {t('Hola, soy Gio Sosa')}
            </Typography>
            <Typography className={classes.info}>
              {t(
                'La programación más que un trabajo es mi hobby, me especializo desarrollando frontend en React pero también cuento con conocimientos de backend y otras tecnologías'
              )}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default PresentationCard
