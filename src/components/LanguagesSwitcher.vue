<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { useRouter } from "vue-router"
import Tr from '@/i18n/translation'

const { locale } = useI18n({ useScope: 'global' })
const supportedLocales = Tr.supportedLocales
const router = useRouter()

const switchLanguage = async (event) => {
  const newLocale = event.target.value
  await Tr.switchLanguage(newLocale)

  try {
    await router.replace({ params: { locale: newLocale } })
  } catch(e) {
    console.log(e)
    await router.push("/")
  }
}






// const { locale } = useI18n({ useScope: 'global' });



// import { ref } from 'vue'
// import { useI18n } from 'vue-i18n'
//

// const switchLocale = (lang) => {
//   console.log(lang)
//   locale.value = lang
//   localStorage.setItem('lang', lang)
//   // return `/${lang}${route.path}`
// }
//
// console.log(locale.value)
// console.log(availableLocales)
// const { locale, availableLocales } = useI18n()

// const selectedLanguage = ref(i18n.locale)
// const supportedLanguages = i18n.availableLocales

// console.log(availableLocales)

// const changeLanguage = () => {
//   // setLocaleMessage(selectedLanguage.value)
// }



</script>

<template>
  <select @change="switchLanguage">
    <option
      v-for="sLocale in supportedLocales"
      :key="`locale-${sLocale}`"
      :value="sLocale"
      :selected="locale === sLocale"
    >
      {{ $t(`locale.${sLocale}`) }}
    </option>
  </select>
</template>

<style scoped>

</style>
