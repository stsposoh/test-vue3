import { createI18n, LocaleMessages, VueMessageType } from 'vue-i18n'
// locales
import en from "./locales/en.json";
import ru from "./locales/ru.json";

// const messages: LocaleMessages<VueMessageType> = { en, ru }
import messages from "@intlify/unplugin-vue-i18n/messages";

// console.log('messages' )
// console.log(messages)

export const defaultLocale = 'en'

const localStorageLang = localStorage.getItem('lang')


let _i18n

// Initializer
function setup(options = { locale: defaultLocale }) {
  _i18n = createI18n({
    legacy: false,
    locale: options.locale,
    fallbackLocale: defaultLocale,
    messages,
  })
  setLocale(options.locale)
  return _i18n
}
// Sets the active locale.
function setLocale(newLocale) {
  // console.log('newLocale!!!')
  // console.log(newLocale)
  // console.log(_i18n.global.locale.value)

  _i18n.global.locale.value = newLocale
}
// Public interface
export default {
  // Expose the VueI18n instance via a getter
  get vueI18n() {
    return _i18n
  },
  setup,
  setLocale,
}

export const supportedLocales = {
  'en-US': { name: 'English' },
  'ru-RU': { name: 'Rus' },
}



// const i18n = createI18n({
//   // for Composition API
//   legacy: false,
//   // default locale
//   locale: localStorageLang || import.meta.env.VITE_DEFAULT_LOCALE,
//   globalInjection: true,
//   warnHtmlInMessage: 'off',
//   fallbackLocale: import.meta.env.VITE_DEFAULT_LOCALE,
//   availableLocales: ["en", "ru"],
//   messages,
// })
//
// export default i18n

//en-US
//ru-RU
