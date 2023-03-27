<script setup lang="ts">
import DiaryListVue from '@/components/Diary/DiaryList.vue';
import Layout from '@/components/Layouts/Layout.vue';
</script>

<script lang="ts">
export default {
  data: function () {
    return {
      title: 'My Title'
    }
  },
  // Usage with context the component
  head: {
    // To use "this" in the component, it is necessary to return the object through a function
    title: function () {
      return {
        inner: this.title
      }
    },
    meta: [
      { name: 'description', content: 'My description', id: 'desc' }
    ]
  }
}
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