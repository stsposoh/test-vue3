<script setup lang="ts">


import { RouterLink, RouterView } from 'vue-router'
import LangsSwitcher from './components/LangsSwitcher.vue'
import HelloWorld from './components/HelloWorld.vue'
import LocalizedLink from './components/i18n/LocalizedLink.vue'






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
        <LocalizedLink to="/">
          {{ $t('home') }}
        </LocalizedLink>
        <!-- When active locale is ar-EG, renders to
             /ar-EG -->
        <!-- Notice that we point to about not /about -->
        <LocalizedLink to="about">
          {{ $t('about') }}
        </LocalizedLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style lang="stylus">

</style>
