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
@import "../../assets/breakpoints.scss";

.layout {
  padding: 20px 80px;

  @include laptop {
    display: flex;
    flex-direction: column;
    padding: 20px;
  }

  @include phones {
    padding: 20px 10px;
  }
}
</style>