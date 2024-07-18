import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enTranslation from "./locales/en/translation.json";
import trTranslation from "./locales/tr/translation.json";

// i18n yapılandırması
i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: enTranslation },
      tr: { translation: trTranslation },
    },
    lng: "en", // Varsayılan dil
    fallbackLng: "en", // Dil bulunamazsa varsayılan dil
    interpolation: { escapeValue: false }, // XSS koruma ayarı, React zaten bu korumayı sağlar
  });

export default i18n;