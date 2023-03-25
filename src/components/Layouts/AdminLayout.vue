<script script lang="ts">
import Header from './Header.vue';
import Sidebar from './Sidebar.vue'

export default {
  components: {
    Header,
    Sidebar
  }
}
</script>

<template>
  <Header />
  <main :class=$style.layout>
    <slot></slot>
  </main>
</template>

<style module lang="scss">
.layout {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px 80px;
}</style>