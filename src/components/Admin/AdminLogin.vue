<script setup lang="ts">
import SubmitButton from '../sharedComponent/SubmitButton.vue';
import BaseInput from '../sharedComponent/BaseInput.vue';
import { ref } from 'vue';
</script>

<script lang="ts">
const passwordRef = ref("")

export default {
  methods: {
    onSubmit() {
      if (passwordRef.value.toString() === import.meta.env.VITE_ADMIN_PASSWORD) {
        this.$emit("checkAdmin", true)
      }
    }
  }
}
</script>

<template>
  <form @submit.prevent="onSubmit" :class=$style.form>
    <BaseInput label="Admin password" type="password" v-model="passwordRef" />
    <SubmitButton />
  </form>
</template>

<style module lang="scss">
.form {
  margin: 0 auto;
  margin-top: 20px;
  min-width: 300px;
  display: flex;
  flex-direction: column;
}
</style>