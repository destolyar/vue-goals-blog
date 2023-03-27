<script setup lang="ts">
defineProps({
  title: {
    required: true,
    type: String
  }
})
</script>

<template>
  <h1 :class=$style.pageTitle>{{ title }}</h1>
</template>

<style module lang="scss">
.pageTitle {
  font-size: 2rem;
}
</style>