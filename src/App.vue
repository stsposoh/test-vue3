<script setup lang="ts">


import { RouterLink, RouterView } from 'vue-router'
import LangsSwitcher from './components/LangsSwitcher.vue'
import HelloWorld from './components/HelloWorld.vue'






</script>

<template>
  <header>
    <LangsSwitcher />



    {{ $t('main.hello') }}
<!--    {{ t('header.loading') }}-->
<!--    {{ t('showLess') }}-->

    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />

      <nav>
        <RouterLink :to="'/' + $i18n.locale">Home</RouterLink>
        <RouterLink :to="'/' + $i18n.locale + '/about'">About</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style lang="stylus">

</style>
