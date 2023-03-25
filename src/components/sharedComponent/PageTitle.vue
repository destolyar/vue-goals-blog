<script setup lang="ts">
defineProps({
  title: {
    required: true,
    type: String
  }
})
</script>

<template>
  <h1 class="page-title">{{ title }}</h1>
</template>

<style class="page-title">
.page-title {
  font-size: 2rem;
}
</style>