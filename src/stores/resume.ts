import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useResumeStore = defineStore('resume', () => {
    const resumeDetails = ref([]);

    return {};
});
