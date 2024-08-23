<script setup lang="ts"></script>

<template>
  <header class="header">
    <nav class="header__nav">
      <ul class="header__list">
        <li class="header__item">
          <a href="home" class="header__link"><i class="icon-house"></i></a>
        </li>
        <li class="header__item">
          <a href="blog" class="header__link"><i class="icon-blog"></i></a>
        </li>
        <li class="header__item">
          <a href="about-me" class="header__link"><i class="icon-user"></i></a>
        </li>
        <li class="header__item">
          <a href="portfolio" class="header__link"><i class="icon-computer"></i></a>
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
  }

  &__item {
    margin-right: 1rem;
    i {
      font-size: $icon-m;
    }
  }
}
</style>
