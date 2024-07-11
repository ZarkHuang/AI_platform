<script setup lang="ts">
const currentYear = new Date().getFullYear()
</script>

<template>
  <div :class="$style.footerContainer">
    <NText depth="3">
      &copy; 2018-{{ currentYear }} EverFortune.AI Co., Ltd. All Rights Reserved
    </NText>

    <div :class="$style.appVersion">
      <AppVersion />
    </div>
  </div>
</template>

<style module lang="scss">
.footerContainer {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 16px;
  height: 100%;
  font-size: 12px;
}

.appVersion {
  position: absolute;
  bottom: -2px;
}
</style>
