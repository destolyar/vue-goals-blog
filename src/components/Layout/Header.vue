<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <header class="header">
    <nav class="nav">
      <RouterLink class="link" to="/">Home</RouterLink>
      <RouterLink class="link" to="/about">About</RouterLink>
    </nav>
    <section class="auth">
      <RouterLink class="login" to="/login">Login</RouterLink>
      <RouterLink class="register" to="/register">Register</RouterLink>
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

.link {
  margin-right: 20px;
  text-decoration: none;
  color: var(--primary-text-color);
  transition: .2s;
}

.link:hover {
  color: var(--primary-color);
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
  border: 1px solid var(--primary-color);
  border-radius: 5px;
  color: var(--primary-text-color);
  text-decoration: none;
  transition: .2s;
}

.register {
  height: 48px;
  padding: 10px 20px;
  margin-left: 20px;
  border: 1px solid var(--secondary-color);
  color: var(--secondary-text-color);
  background-color: var(--secondary-color);
}

.login:hover, .register:hover {
  transform: scale(1.05);
}
.login:hover {
  color: var(--secondary-text-color);
  background-color: var(--primary-color);
}
</style>