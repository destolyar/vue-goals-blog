<script setup lang="ts">
import FormLegend from '../sharedComponent/FormLegend.vue';
import BaseInput from '../sharedComponent/BaseInput.vue';
import SubmitButtonVue from '../sharedComponent/SubmitButton.vue';
import { ref } from 'vue';

const emailRef = ref("")
const passwordRef = ref("")
</script>

<template>
  <form class="form">
    <FormLegend legend-text="Sign In" />

    <BaseInput label="Email" type="email" v-model="emailRef" />
    <BaseInput label="Password" type="password" v-model="passwordRef" />

    <SubmitButtonVue />
  </form>
</template>

<style>
.form {
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
}
</style>