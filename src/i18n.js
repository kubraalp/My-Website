// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import enTranslation from './locales/en/translation.json';
import trTranslation from './locales/tr/translation.json';

const resources = {
  en: {
    translation: enTranslation
  },
  tr: {
    translation: trTranslation
  }
};

// Dil seçimlerini localStorage'dan okuma
const language = localStorage.getItem('language') || 'en';

i18n
  .use(LanguageDetector) // Kullanıcının dilini algılamak için
  .use(initReactI18next) // react-i18next ile entegrasyon
  .init({
    resources,
    lng: language, // Başlangıç dili
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

// Dil değişimi yapıldığında localStorage'a kaydetme
i18n.on('languageChanged', (lng) => {
  localStorage.setItem('language', lng);
});

export default i18n;