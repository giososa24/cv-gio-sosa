import React, { FC } from 'react'
import { Typography } from '@mui/material'
import Image from 'next/image'
import { Trans, useTranslation } from 'next-i18next'
import classes from './CardContent.module.css'
import CardContentProps from './CardContent.types'

const CardContent: FC<CardContentProps> = ({ collection, variant }) => {
  const { title, items, keyDescription } = collection
  const { t } = useTranslation('cardContent')

  return (
    <div
      className={`w-full lg:w-10/12 mt-16 ${variant === 'left' ? 'ml-0' : 'ml-0 lg:ml-[16.67%]'}`}
    >
      <div
        className={`${classes['title-container']} ${
          variant === 'right' ? classes['title-container-right'] : classes['title-container-left']
        }`}
      >
        <Typography className={classes.title}>{t(title)}</Typography>
      </div>
      <div
        className={`${classes['items-container']} ${
          variant === 'right' ? classes['items-container-right'] : ''
        }`}
      >
        <div className="p-3">
          <Typography fontStyle="italic" className="text-base md:text-lg">
            <Trans
              i18nKey={t(keyDescription)}
              components={{
                a: (
                  <a
                    style={{ textDecoration: 'underline' }}
                    target="_blank"
                    href="https://github.com/giososa24/cv-gio-sosa"
                    rel="noreferrer"
                  />
                ),
              }}
            />
          </Typography>
        </div>
        <div className={classes['logo-container']}>
          {items.map(({ element, alt, width, heigth }, i) => (
            <Image
              key={`${alt}-${i}`}
              src={element}
              alt={alt}
              width={width}
              height={heigth}
              priority
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default CardContent
