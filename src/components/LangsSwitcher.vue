<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
// import { useRoute } from 'vue-router'
import router from "@/router";

// console.log(router)
import { supportedLocales } from '@/i18n'
const { locale, availableLocales } = useI18n({ useScope: 'global' });

const switchLocale = (lang) => {
  console.log(lang)
  locale.value = lang
  localStorage.setItem('lang', lang)
  router.push(`/${lang}`)
  // return `/${lang}${route.path}`
}

console.log(locale.value)
console.log(availableLocales)
// const { locale, availableLocales } = useI18n()

// const selectedLanguage = ref(i18n.locale)
// const supportedLanguages = i18n.availableLocales

// console.log(availableLocales)

const changeLanguage = () => {
  // setLocaleMessage(selectedLanguage.value)
}



</script>

<template>
  <div class="language-switcher">
    <label for="locale">Locale: {{locale}}</label>


    <div>
      <div v-for="(lang, index) in availableLocales" :key="index"  @click="switchLocale(lang)">
        {{ lang }}
      </div>
    </div>

<!--    <ul>-->
<!--      <li-->
<!--          v-for="lang in availableLocales"-->
<!--          :key="lang"-->
<!--          @click="switchLocale(lang)"-->
<!--      >{{ lang }}</li>-->
<!--    </ul>-->




    <!--    <router-link-->
<!--      v-for="lang in availableLocales"-->
<!--      :key="lang"-->
<!--      :to="switchLocale(lang)"-->
<!--      :class="{ 'active': lang === locale }"-->
<!--    >-->
<!--      {{ lang }}-->
<!--    </router-link>-->
  </div>
</template>

<style scoped>
label, select {
  width: 100%;
}
select {
  height: 25px;
}



.language-switcher {
  display: flex;
  gap: 1rem;
}

.language-switcher a {
  text-decoration: none;
  color: inherit;
}

.language-switcher a.active {
  font-weight: bold;
  color: red;
}
</style>
