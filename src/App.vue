<script setup lang="ts">
import { RouterView } from 'vue-router';
import Header from './components/Header.vue';
</script>

<template>
  <Header />
  <RouterView />
</template>

<style scoped>
@media (min-width: 1024px) {
}
</style>
