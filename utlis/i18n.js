import i18next from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import {Translation, initReactI18next} from "react-i18next";
import {th} from "@/data/locales/th";
import {en} from "@/data/locales/en";
import {ja} from "@/data/locales/ja";
import {zh} from "@/data/locales/zh";

i18next
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        debug: true,
        fallbackLng: "en",
        returnObjects: true,
        resources: {
            en: {
                translation: en,
            },
            th: {
                translation: th,
            },
            ja: {
                translation: ja,
            },
            zh: {
                translation: zh,
            },
        },
    });
