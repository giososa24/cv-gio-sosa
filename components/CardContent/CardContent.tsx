import React, { FC } from 'react'
import { Typography } from '@mui/material'
import Image from 'next/image'
import classes from './CardContent.module.css'
import ReactLogo from 'assets/images/react-logo.png'
import AngularLogo from 'assets/images/angular-logo.png'
import ReactNativeLogo from 'assets/images/react-native-logo.png'
import NextJsLogo from 'assets/images/nextjs-logo.png'

const CardContent: FC = () => {
  return (
    <div className={classes['card-content']}>
      <div style={{ width: 'max-content' }}>
        <Typography className={classes.title}>Frontend</Typography>
        <div className={classes['title-line']} />
      </div>
      <div className={classes['logo-container']}>
        <Image src={ReactLogo} alt="react-logo" width="150px" height="120px" />
        <Image src={AngularLogo} alt="angular-logo" width="90px" height="90px" />
        <Image src={ReactNativeLogo} alt="react-native-logo" width="125px" height="125px" />
        <Image src={NextJsLogo} alt="nextjs-logo" width="80px" height="80px" />
      </div>
    </div>
  )
}

export default CardContent
