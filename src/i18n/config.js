import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import en from './en.json'
import es from './es.json'
import pt from './pt.json'
import ja from './ja.json'
import zh from './zh.json'
import it from './it.json'

i18n
    .use(initReactI18next)
    .init({
        resources: {
            en: { translation: en },
            es: { translation: es },
            pt: { translation: pt },
            ja: { translation: ja },
            zh: { translation: zh },
            it: { translation: it },
        },
        lng: 'en',
        fallbackLng: 'en',
        interpolation: { escapeValue: false },
    })

export default i18n
