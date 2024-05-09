import i18n from "i18next" // [1]
import { initReactI18next } from "react-i18next" // [2]
import detector from "i18next-browser-languagedetector"
import translationGB from "./locales/en/translation.json"
import translationIN from "./locales/in/translation.json"
import translationPK from "./locales/pk/translation.json"
import translationBD from "./locales/bd/translation.json"
import translationCN from "./locales/cn/translation.json"




// the translations
const resources = {
  GB: {
    translation: translationGB,
  },
  IN: {
    translation: translationIN,
  },
  PK: {
    translation: translationPK,
  },
  BD: {
    translation: translationBD,
  },
  CN: {
    translation: translationCN,
  },
}

i18n
.use(detector)
.use(initReactI18next).init({
  resources,
  lng: localStorage.getItem("i18nextLng") || "GB",
  fallbackLng: 'GB', // Fallback language if a translation is missing
  interpolation: {
    escapeValue: false,
  },
});

export default i18n

// [1] i18next. (n.d.). i18next. Retrieved from https://www.i18next.com/
// [2] react-i18next. (n.d.). react-i18next. Retrieved from https://react.i18next.com/