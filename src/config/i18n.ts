import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import Backend from 'i18next-http-backend'
import LanguageDetector from 'i18next-browser-languagedetector'

// eslint-disable-next-line import/no-named-as-default-member
void i18n
  .use(Backend)
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    interpolation: {
      escapeValue: false,
    },
    supportedLngs: ['es', 'en'],
    fallbackLng: 'es',
    keySeparator: false,
    backend: {
      loadPath: '/cv-gio-sosa/locales/{{lng}}/{{ns}}.json',
    },
  })

export default i18n
