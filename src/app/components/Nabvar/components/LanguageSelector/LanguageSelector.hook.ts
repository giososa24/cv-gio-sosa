import { useState } from 'react'
import { useRouter } from 'next/router'
import { i18n } from 'next-i18next'
import { LanguageType, UseLanguageSelectorType } from './LanguageSelector.types'

const languages: LanguageType[] = ['es', 'en']

const useLanguageSelector = (): UseLanguageSelectorType => {
  const [currentLang, setCurrentLang] = useState<LanguageType>((i18n?.language ?? 'es') as LanguageType)
  const { replace, asPath } = useRouter()

  const onChangeLanguage = (lang: LanguageType): void => {
    setCurrentLang(lang)
    void i18n?.changeLanguage(lang)
    void replace(asPath, asPath, { locale: lang })
  }

  return {
    languages,
    currentLang,
    onChangeLanguage,
  }
}

export default useLanguageSelector
