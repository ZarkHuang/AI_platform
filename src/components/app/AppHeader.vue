<script setup lang="ts">
import { inject } from 'vue';
import efaiLogoImage from '@/assets/efai-logo.svg';
import efaiLogoWhiteImage from '@/assets/efai-logo_white.svg';

import { APP_THEME_KEY } from '@/utils/config/keys';

// 獲取主題狀態
const { isDarkTheme } = inject(APP_THEME_KEY) as {
  isDarkTheme: Ref<boolean>;
};
</script>

<template>
  <div :class="$style.headerContainer">
    <NSpace align="center">
      <NImage :src="isDarkTheme ? efaiLogoImage : efaiLogoWhiteImage" width="24" preview-disabled />
      <div :class="$style.headerTitle">AI Marketplace</div>
      <!-- <AppClientSelector /> -->
    </NSpace>

    <NSpace align="center">
      <!-- <AppMessageCount /> -->
      <AppThemeToggler />
      <!-- <AppLogoutButton /> -->
    </NSpace>
  </div>
</template>

<style module lang="scss">
.headerContainer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
  height: 100%;
}

.headerTitle {
  font-size: 16px;
  font-weight: 700;
  font-family: 'Outfit', sans-serif;
}
</style>
