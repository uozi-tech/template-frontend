<script setup lang="ts">
import {useDark} from '@vueuse/core';
import ToggleTheme from '~/components/ToggleTheme.vue';
import {dark, light} from '~/config/theme';

const isDark = useDark()
</script>

<template>
  <AConfigProvider
    :theme="isDark ? dark : light"
  >

    <div class="min-h-100vh bg-base dark:bg-dark dark:text-white">
      <RouterView />
      <ToggleTheme />
    </div>
  </AConfigProvider>
</template>

<style scoped></style>
