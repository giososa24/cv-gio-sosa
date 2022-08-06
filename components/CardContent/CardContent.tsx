import React, { FC } from 'react'
import { Typography } from '@mui/material'
import Image from 'next/image'
import { useTranslation } from 'next-i18next'
import classes from './CardContent.module.css'
import CardContentProps from './CardContent.types'

const CardContent: FC<CardContentProps> = ({ collection }) => {
  const { title, items } = collection
  const { t } = useTranslation('common')

  return (
    <div className={classes['card-content']}>
      <div style={{ width: 'max-content' }}>
        <Typography className={classes.title}>{t(title)}</Typography>
        <div className={classes['title-line']} />
      </div>
      <div className={classes['logo-container']}>
        {items.map(({ element, alt, width, heigth }, i) => (
          <Image key={`${alt}-${i}`} src={element} alt={alt} width={width} height={heigth} />
        ))}
      </div>
    </div>
  )
}

export default CardContent
