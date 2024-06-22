import i18next from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { Translation, initReactI18next } from "react-i18next";
import { fr } from "@/data/locales/fr";
import { en } from "@/data/locales/en";
i18next
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: "en",
    resources: {
      en: {
        translation: en,
      },
      fr: {
        translation: fr,
      },
    },
  });
