<template>
  <label :if="label" class="label">{{ label }}</label>
  <input type="text" :value="modelValue" @input="updateValue" v-bind="$attrs" class="input">
</template>

<script setup lang="ts">
import { defineEmits } from 'vue'
const emit = defineEmits(['update:modelValue'])

const updateValue = (e: Event) => {
  emit('update:modelValue', (e.target as HTMLInputElement).value)
}
defineProps({
  label: {
    type: [String, Boolean],
    default: false
  },
  modelValue: {
    type: String,
    default: ""
  }
})
</script>

<style scoped>
.label {
  margin-bottom: 5px;
}

.input {
  padding-left: 10px;
  margin-bottom: 10px;
  border: 1px solid var(--third-color);
  height: 35px;
  border-radius: 7.5px;
}
</style>