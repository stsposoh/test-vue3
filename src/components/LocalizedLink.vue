<script setup lang="ts">
import { defineProps } from 'vue'
import { RouterLink } from 'vue-router'
import Tr from "@/i18n/translation"

interface linkValues {
  to: string
  name: string | number
}

const props = defineProps<linkValues>()
</script>

<template>
  <RouterLink :to="Tr.i18nRoute({ name: $props.to })"> {{ $props.name }}</RouterLink>
</template>
