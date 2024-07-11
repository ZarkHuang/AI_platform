<script setup lang="ts">
import { zhTW, dateZhTW, darkTheme } from 'naive-ui'
import { APP_THEME_KEY } from '@/utils/config/keys'
import { VueQueryDevtools } from '@tanstack/vue-query-devtools'

const route = useRoute()

const isDarkTheme = ref(false)
const theme = computed(() => {
  // 調整畫面顏色
  return isDarkTheme.value ? undefined : darkTheme
})

function toggleDarkTheme() {
  isDarkTheme.value = !isDarkTheme.value
}

provide(APP_THEME_KEY, {
  isDarkTheme,
  toggleDarkTheme,
})
</script>

<template>
  <NConfigProvider :locale="zhTW" :date-locale="dateZhTW" :theme="theme">
    <NMessageProvider>
      <component :is="route.meta.layout || 'div'">
        <RouterView />
      </component>
    </NMessageProvider>
  </NConfigProvider>
  <VueQueryDevtools />
</template>

<style module lang="scss"></style>
