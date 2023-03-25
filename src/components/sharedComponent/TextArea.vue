<script setup lang="ts">
import { defineEmits } from 'vue';
const emit = defineEmits(['update:newPostText'])

const updateNewPostText = (e: Event) => {
  emit('update:newPostText', (e.target as HTMLTextAreaElement).value)
}

defineProps({
  label: {
    type: [String, Boolean],
    default: false
  },
  newPostText: {
    type: String,
    default: ""
  }
})
</script>

<template>
  <label v-if="label" class="label">{{ label }}</label>
  <textarea type="textarea" :value="newPostText" @input="updateNewPostText" class="new-post-text" v-bind="$attrs"/>
</template>
