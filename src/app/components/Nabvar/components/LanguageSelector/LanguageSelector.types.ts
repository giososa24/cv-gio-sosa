export type LanguageType = 'en' | 'es'

export type UseLanguageSelectorType = {
  languages: LanguageType[]
  currentLang: LanguageType
  onChangeLanguage: (lang: LanguageType) => void
}
