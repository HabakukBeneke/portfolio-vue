import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useWebsiteStore = defineStore('website', () => {
  const websiteDetails = ref([]);

  async function getWebsiteDetails() {}

  return {};
});
