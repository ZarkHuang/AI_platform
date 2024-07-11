<template>
    <NSpace vertical>
      <SearchInput :searchQuery="searchQuery" @update:searchQuery="val => searchQuery = val" />
      <DataTable :searchQuery="searchQuery" />
    </NSpace>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  import SearchInput from '@/components/common/SearchInput.vue';
  import DataTable from '@/components/common/DataTable.vue';
  
  const searchQuery = ref('');
  </script>
  