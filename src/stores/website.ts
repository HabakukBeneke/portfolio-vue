import { defineStore } from 'pinia';
import { ref } from 'vue';
import type { Ref } from 'vue';

interface HeaderOption {
  text: string;
  route: string;
  icon: string;
}

interface WebsiteOptions {
  activeRoute: string;
}

export const useWebsiteStore = defineStore('website', () => {
<<<<<<< Updated upstream
  const headerOptions = [
=======
<<<<<<< Updated upstream
  return {};
=======
  const headerOptions: Ref<HeaderOption[]> = ref([
>>>>>>> Stashed changes
    { text: 'Home', route: '/', icon: 'house' },
    { text: 'Blog', route: '/blog', icon: 'blog' },
    { text: 'About me', route: '/about', icon: 'user' },
    { text: 'Portfolio', route: '/portfolio', icon: 'computer' },
    { text: 'Contact', route: '/contact', icon: 'blog' }
<<<<<<< Updated upstream
  ];

  const websiteOptions = {
    activeRoute: '/'
  };

  return { headerOptions, websiteOptions };
=======
  ]);

  const websiteOptions: Ref<WebsiteOptions> = ref({
    activeRoute: '/'
  });

  return { headerOptions, websiteOptions };
>>>>>>> Stashed changes
>>>>>>> Stashed changes
});
