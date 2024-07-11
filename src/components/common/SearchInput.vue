<!-- eslint-disable @typescript-eslint/no-unused-vars -->
<template>
    <div class="mb-3 flex justify-center">
        <NInput :value="searchQuery" @input="handleInput" placeholder="type keywords for researching" clearable
            class="rounded-full pl-2" style="width: 30%; height: 48px; line-height: 48px;">
            <template #prefix>
                <SvgIcon :icon="'MagnifyingGlass'" size="14px" class="mr-5" style="cursor: pointer" />
            </template>
        </NInput>
    </div>
</template>

<script setup lang="ts">
 defineProps<{
    searchQuery: string;
}>();

const emits = defineEmits<{
    (e: 'update:searchQuery', value: string): void;
}>();

const handleInput = (value: string) => {
    emits('update:searchQuery', value);
};
</script>