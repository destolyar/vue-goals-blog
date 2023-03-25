<script setup lang="ts">
import { db } from '@/firebase';
import { collection } from 'firebase/firestore';
import { useCollection } from 'vuefire';
import DiaryListItemVue from './DiaryListItem.vue';

const diaryEntries = useCollection(collection(db, "diary"))
</script>

<template>
  <section :class=$style.container>
    <DiaryListItemVue v-for="entry in diaryEntries.reverse()" v-bind:title="entry.title" v-bind:timestamp="entry.date" v-bind:id="entry.id"
      v-bind:text="entry.text" />
  </section>
</template>

<style module lang="scss">
@import "../../assets/breakpoints.scss";
.container {
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
  width: 100%;

  @include laptop {
    order: 2;
  }
}
</style>