import React, { FC } from 'react'
import { Button } from '@mui/material'
import cx from 'classnames'
import classes from './LanguageSelector.module.css'
import useLanguageSelector from './LanguageSelector.hook'

const LanguageSelector: FC = () => {
  const { currentLang, languages, onChangeLanguage } = useLanguageSelector()

  return (
    <div className={classes['language-container']}>
      {languages.map(lang => (
        <Button
          key={lang}
          disableRipple
          className={cx(classes['lang-button'], { [classes['lang-button-selected']]: currentLang === lang })}
          onClick={(): void => onChangeLanguage(lang)}
        >
          {lang}
        </Button>
      ))}
    </div>
  )
}

export default LanguageSelector
