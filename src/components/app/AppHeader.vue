<script setup lang="ts">
import { inject, Ref } from 'vue';
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
    <div :class="$style.logoTitleContainer">
      <NImage :src="isDarkTheme ? efaiLogoImage : efaiLogoWhiteImage" width="24" preview-disabled />
      <div :class="$style.headerTitle">AI Marketplace</div>
    </div>

    <NSpace align="center" :class="$style.themeTogglerContainer">
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
  background-color: transparent !important;
}

.logoTitleContainer {
  display: flex;
  align-items: center;
  justify-content: center; 
  text-align: center; 
  position: absolute; 
  left: 50%; 
  top: 32px;
  transform: translateX(-50%); 
}

.headerTitle {
  margin-left: 8px;
  font-size: 18px;
  font-weight: 700;
  font-family: 'Outfit', sans-serif;
  letter-spacing: 0.5px;
}

.themeTogglerContainer {
  position: absolute;
  right: 16px;
  top:16px;
}
</style>
