import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import es from "../messages/es.json";
import en from "../messages/en.json";

i18n.use(initReactI18next).init({
  fallbackLng: "en",
  debug: import.meta.env.DEV,
  resources: {
    en: {
      translation: en,
    },
    es: {
      translation: es,
    },
  },
});
export default i18n;
