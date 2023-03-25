<template>
  <label v-if="label" :class=$style.label>{{ label }}</label>
  <input type="text" :value="modelValue" @input="updateValue" v-bind="$attrs" :class=$style.input>
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

<style module lang="scss">
@import "../../assets/colors.scss";
.label {
  margin-bottom: 10px;
}

.input {
  padding-left: 10px;
  margin-bottom: 10px;
  border: 1px solid $third-color;
  outline: none;
  height: 35px;
  border-radius: 7.5px;

  &:focus {
    border: 1px solid $third-color;
  }
}
</style>