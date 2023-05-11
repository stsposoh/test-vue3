import { createI18n, LocaleMessages, VueMessageType } from 'vue-i18n'
// locales
import en from "./locales/en.json";
import ru from "./locales/ru.json";

const messages: LocaleMessages<VueMessageType> = { en, ru }

const localStorageLang = localStorage.getItem('lang')

const i18n = createI18n({
  // for Composition API
  legacy: false,
  // default locale
  // locale: localStorageLang || import.meta.env.VITE_DEFAULT_LOCALE,
  locale: 'en',
  globalInjection: true,
  warnHtmlInMessage: 'off',
  // fallbackLocale: import.meta.env.VITE_DEFAULT_LOCALE,
  fallbackLocale: 'en',
  messages,
})

export default i18n
