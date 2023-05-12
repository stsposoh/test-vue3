<script setup lang="ts">


import { RouterLink, RouterView } from 'vue-router'
import LanguagesSwitcher from './components/LanguagesSwitcher.vue'
import LocalizedLink from './components/LocalizedLink.vue'







</script>

<template>
  <header>
    <LanguagesSwitcher />
    <hr>

    {{ $t('main.hello') }}
    <h3>{{ $t('main.num_visits', 5) }}</h3>
    <p>{{ $t("main.donations", { donations: $n(1456, "currencyFormat") }) }}</p>
    <p>{{ $d(new Date(), "longFormat") }}</p>
    <p>{{ $d(new Date(), "shortFormat") }}</p>
<!--    {{ t('header.loading') }}-->
<!--    {{ t('showLess') }}-->

    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">


      <nav>
        <ul>
          <li>
            <LocalizedLink to="home" name="Home" />

          </li>
          <li>
            <LocalizedLink to="about" name="About" />
<!--            <RouterLink :to="Tr.i18nRoute({ name: 'about' })">About</RouterLink>-->
          </li>
        </ul>
      </nav>

    </div>
  </header>

  <RouterView />
</template>

<style lang="stylus">

</style>
