<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <header class="header">
    <nav class="nav">
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
    </nav>
    <section class="auth">
      <RouterLink to="/login">Login</RouterLink>
      <RouterLink to="/register">Register</RouterLink>
    </section>
  </header>
</template>

<style scoped>
  .header {
    height: 80px;
    padding: 0 80px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid var(--primary-border);
  }

  .nav {

  }
  
  .auth {

  }
</style>