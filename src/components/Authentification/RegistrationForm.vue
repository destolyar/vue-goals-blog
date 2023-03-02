<script setup lang="ts">
import BaseInput from '../sharedComponent/BaseInput.vue';
import FormLegend from '../sharedComponent/FormLegend.vue';
import SubmitButton from '../sharedComponent/SubmitButton.vue';
import { ref } from 'vue';

const emailRef = ref("")
const passwordRef = ref("")
const repeatPasswordRef = ref("")
</script>

<template>
  <form class="form">
    <FormLegend legend-text="Sign Up"/>
    <BaseInput label="Email" type="email" v-model="emailRef" />
    <BaseInput label="Password" type="password" v-model="passwordRef" />
    <BaseInput label="Repeat password" type="password" v-model="repeatPasswordRef" />

    <SubmitButton />
  </form>
</template>

<style scoped>
.form {
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
}
</style>