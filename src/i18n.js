import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Импортируем переводы для всех языков
import enTranslation from './assets/locales/en/translation.json';
import ruTranslation from './assets/locales/ru/translation.json';
import zhTranslation from './assets/locales/zh/translation.json';
import trTranslation from './assets/locales/tr/translation.json';

// Настройки определения языка
const languageDetectorOptions = {
  order: ['localStorage', 'navigator'],
  caches: ['localStorage']
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: enTranslation },  // Английский
      ru: { translation: ruTranslation },  // Русский
      zh: { translation: zhTranslation },  // Китайский
      tr: { translation: trTranslation }   // Турецкий
    },
    detection: languageDetectorOptions,
    fallbackLng: 'en',
    supportedLngs: ['en', 'ru', 'zh', 'tr'], // Явное указание поддерживаемых языков
    interpolation: {
      escapeValue: false,
    },
    pluralization: {
      ru: {
        pluralRule: function (count) {
          if (count % 10 === 1 && count % 100 !== 11) return 'one';
          if ([2, 3, 4].includes(count % 10) && ![12, 13, 14].includes(count % 100)) return 'few';
          return 'many';
        }
      },
      en: {
        pluralRule: function (count) {
          return count === 1 ? 'one' : 'other';
        }
      },
      // Добавьте правила для других языков при необходимости
    }
  });

export default i18n;