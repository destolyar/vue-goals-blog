<script setup lang="ts">
import DiaryListVue from '@/components/Diary/DiaryList.vue';
import Layout from '@/components/Layouts/Layout.vue';
</script>

<template>
  <Layout>
    <h1 :class=$style.pageTitle>Diary and current goals</h1>
    <DiaryListVue />
  </Layout>
</template>

<style module lang="scss">
@import "../assets/breakpoints.scss";
.pageTitle {
  grid-column: 1 / 3;
  flex-grow: 1;
  flex-basis: 100%;
  font-size: 2rem;
  margin-bottom: 30px;

  @include tablets {
    font-size: 1.5rem;
    margin-bottom: 20px;
  }
}
</style>