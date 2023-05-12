import { createI18n, LocaleMessages, VueMessageType } from 'vue-i18n'
// rules
import pluralRules from "./rules/pluralization"
import numberFormats from "./rules/numbers.js"
import datetimeFormats from "./rules/datetime.js"
// locales
import en from "./locales/en.json";
import ru from "./locales/ru.json";

const messages: LocaleMessages<VueMessageType> = { en }

const localStorageLang = localStorage.getItem('lang')

const i18n = createI18n({
  // for Composition API
  legacy: false,
  // default locale
  locale: localStorageLang || import.meta.env.VITE_DEFAULT_LOCALE,
  globalInjection: true,
  warnHtmlInMessage: 'off',
  fallbackLocale: import.meta.env.VITE_DEFAULT_LOCALE,
  messages,
  pluralRules,
  numberFormats,
  datetimeFormats
})

export default i18n
