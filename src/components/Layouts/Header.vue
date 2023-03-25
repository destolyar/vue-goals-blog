<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <header :class=$style.header>
    <nav>
    <RouterLink :class=$style.link to="/">Home</RouterLink>
    <RouterLink :class=$style.link to="/about">About</RouterLink>
  </nav>
    <!-- <section :class=$style.auth>
        <RouterLink :class=$style.login to="/login">Login</RouterLink>
        <RouterLink :class=$style.register to="/register">Register</RouterLink>
      </section> -->
  </header>
</template>

<style module lang="scss">
@import "../../assets/colors.scss";
@import "../../assets/breakpoints.scss";

.header {
  height: 80px;
  padding: 0 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid $primary-border;

  @include laptop {
    padding: 0 20px;
  }

  @include tablets {
    height: 50px;
  }

  @include phones {
    padding: 0 10px;
  }
}

.link {
  margin-right: 20px;
  text-decoration: none;
  color: $primary-text-color;
  transition: .2s;

  &:hover {
    color: $primary-color;
  }
}

.auth {
  display: flex;
  align-items: center;
}

.login,
.register {
  height: 38px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 6px 12px;
  border: 1px solid $primary-color;
  border-radius: 5px;
  color: $primary-text-color;
  text-decoration: none;
  transition: .2s;

  &:hover {
    transform: scale(1.05);
  }
}

.register {
  height: 48px;
  padding: 10px 20px;
  margin-left: 20px;
  border: 1px solid $secondary-color;
  color: $secondary-text-color;
  background-color: $secondary-color;
}

.login:hover {
  color: $secondary-text-color;
  background-color: $primary-color;
}
</style>