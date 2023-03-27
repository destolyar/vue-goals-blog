<script setup lang="ts">
defineProps({
  legendText: String
})
</script>


<template>
  <legend :class=$style.legend>{{ legendText }}</legend>
</template>

<style module lang="scss">
.legend {
  margin: 0 auto;
  font-size: 25px;
  margin-bottom: 30px;
}
</style>