<script setup lang="ts">
import Layout from '@/components/Layouts/Layout.vue';
</script>

<template>
  <Layout>
    <h1 :class=$style.title>About reason for this blog</h1>
    <section :class=$style.about>
      <p :class=$style.paragraph>Here, I am trying to describe my goals and focus on achieving them.</p>
      <p :class=$style.paragraph>It can be difficult sometimes to stay focused on your goals, especially for me - a person who
        tends not to follow through.</p>
      <br />
      <p :class=$style.paragraph>On the main page, you can find my diary where every day I will write about the things that I am
        doing to get closer to them.</p>
    </section>
  </Layout>
</template>

<style module lang="scss">
@import "../assets/breakpoints.scss";

.title {
  grid-column: 1 / 3;
  font-size: 2rem;
  margin-bottom: 20px;

  @include tablets {
    font-size: 1.5rem;
    margin-bottom: 20px;
  }
}

.paragraph {
  margin-bottom: 5px;
}

.about {
  width: 100%;
  flex-grow: 1;
  font-size: 1.2rem;
  margin-bottom: 20px;
}

</style>
