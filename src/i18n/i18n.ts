import i18n, { type InitOptions } from "i18next";
import { initReactI18next } from "react-i18next";
import es from "@/i18n/messages/es.json";
import en from "@/i18n/messages/en.json";

i18n.use(initReactI18next).init<InitOptions>({
  fallbackLng: "es",
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
