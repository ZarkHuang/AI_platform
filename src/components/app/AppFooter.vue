<script setup lang="ts">
// const currentYear = new Date().getFullYear()
</script>

<template>
  <div :class="$style.footerContainer">
    <NText depth="3" :class="$style.footerItem">
      <a
        href="https://marketplace.everfortuneai.com.tw/"
        target="_blank"
        rel="noopener noreferrer"
        class="text-gray-500 transition-colors duration-300 hover:text-current"
      >
        Marketplace
      </a>
    </NText>

    <!-- <NText depth="3" :class="$style.footerItem">
      &copy; 2018-{{ currentYear }} EverFortune.AI Co., Ltd. All Rights Reserved
    </NText>
     -->
    <div :class="$style.appVersion">
      <AppVersion />
    </div>
  </div>
</template>

<style module lang="scss">
.footerContainer {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 16px;
  height: 100%;
  font-size: 12px;
}

.footerItem {
  font-size: 14px;
  color:aqua
}

.appVersion {
  position: absolute;
  bottom: -2px;
}
</style>
