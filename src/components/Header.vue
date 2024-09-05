<script>
import { computed, ref } from 'vue';
import { useWebsiteStore } from '@/stores/website';

export default {
  name: 'HeaderComponent',
  setup() {
    const store = useWebsiteStore();
    const isRouteActive = (route) => computed(() => store.websiteOptions.activeRoute === route);
    const hoveredOption = ref(null);

    return {
      isRouteActive,
      hoveredOption,
      headerOptions: store.headerOptions
    };
  }
};
</script>

<template>
  <header class="header">
    <nav class="header__nav">
      <ul class="header__list">
        <li
          v-for="option in headerOptions"
          :key="option.route"
          class="header__item"
          @mouseover="hoveredOption = option.route"
          @mouseleave="hoveredOption = null"
        >
          <a :href="option.route" class="header__link">
            <i :class="`icon-${option.icon}${isRouteActive(option.route).value ? '' : '-t'}`"></i>
            <div class="header__text">
              {{ option.text }}
            </div>
          </a>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style scoped lang="scss">
.header {
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;

  &__list {
    list-style: none;
    display: flex;
    gap: 1.5rem;
  }

  &__content {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  &__item {
    flex: 1 1 auto;

    i {
      font-size: $icon-m;
      margin-bottom: 0.5rem;
    }

    a {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-decoration: none;
      color: $nav-color;
      width: 100%;
    }
  }
}
</style>
