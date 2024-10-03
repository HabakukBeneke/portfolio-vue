import { defineStore } from 'pinia';

export const useWebsiteStore = defineStore('website', () => {
  const headerOptions = [
    { text: 'Home', route: '/', icon: 'house' },
    { text: 'Blog', route: '/blog', icon: 'blog' },
    { text: 'About me', route: '/about', icon: 'user' },
    { text: 'Portfolio', route: '/portfolio', icon: 'computer' },
    { text: 'Contact', route: '/contact', icon: 'blog' }
  ];

  const websiteOptions = {
    activeRoute: '/'
  };

  return { headerOptions, websiteOptions };
});
