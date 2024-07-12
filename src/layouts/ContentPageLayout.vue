<script setup lang="ts">
</script>

<template>
  <NLayout  position="absolute">
    <NLayoutHeader  position="absolute" style="height: 60px ;">
      <AppHeader />
    </NLayoutHeader>

    <NLayoutContent position="absolute" style="top: 80px; bottom: 32px; padding: 16px">
      <RouterView />
    </NLayoutContent>
    
    <NLayoutFooter position="absolute" style="height:40px">
      <AppFooter />
    </NLayoutFooter>
  </NLayout>
</template>

<style module lang="scss">
</style>
