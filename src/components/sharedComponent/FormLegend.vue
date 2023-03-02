<script setup lang="ts">
defineProps({
  legendText: String
})
</script>


<template>
  <legend class="legend">{{ legendText }}</legend>
</template>

<style>
.legend {
  margin: 0 auto;
  font-size: 25px;
  margin-bottom: 30px;
}
</style>