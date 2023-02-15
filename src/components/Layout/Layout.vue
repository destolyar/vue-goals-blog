<script script lang="ts">
import Header from './Header.vue';
export default {
  components: {
    Header
  }
}
</script>

<template>
  <Header />
  <main class="layout">
    <slot></slot>
  </main>
</template>

<style scoped>
.layout {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
  padding: 20px 80px;
}
</style>