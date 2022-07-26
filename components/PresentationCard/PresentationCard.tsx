import React, { FC, useMemo } from 'react'
import { Box } from '@mui/material'
import Typewriter from 'typewriter-effect'
import { useTranslation } from 'next-i18next'
import classes from './PresentationCard.module.css'

const PresentationCard: FC = () => {
  const { t } = useTranslation('index')

  const jsonText = useMemo(
    () => `
{<br />
&nbsp;&nbsp;&nbsp;&nbsp;<span class="typewriter-tag">"${t(
      'nombre'
    )}"</span>: &nbsp;<span class="typewriter-label">"Gio Sosa"</span>,<br />
&nbsp;&nbsp;&nbsp;&nbsp;<span class="typewriter-tag">"${t(
      'puesto'
    )}"</span>: &nbsp;<span class="typewriter-label">"${t('Desarrollador frontend')}"</span>,<br />
}
`,
    [t]
  )

  return (
    <Box className={classes.container}>
      <Box className={classes['typewritter-container']}>
        <Box display="flex" flexDirection="row" gap="5px" m="0 -15px 10px">
          <Box className={classes.bullets} style={{ backgroundColor: 'red' }} />
          <Box className={classes.bullets} style={{ backgroundColor: 'yellow' }} />
          <Box className={classes.bullets} style={{ backgroundColor: 'green' }} />
        </Box>
        <Typewriter
          onInit={(typewriter): void => {
            typewriter.typeString(jsonText).start()
          }}
          options={{
            autoStart: true,
            loop: true,
            wrapperClassName: classes['type-writter'],
            cursorClassName: classes['type-writter'],
          }}
        />
      </Box>
    </Box>
  )
}

export default PresentationCard
