<script setup lang="ts">
import { useCollection } from 'vuefire';
import GoalsListItem from '../Layouts/GoalsListItem.vue';
import { collection } from 'firebase/firestore';
import { db } from '@/firebase';

const goalsEntries = useCollection(collection(db, "goals"))
</script>

<template>
  <section :class="$style.container">
    <GoalsListItem v-for="goalEntry in goalsEntries" v-bind:goal="goalEntry.goal" v-bind:goal-value="goalEntry.goalValue"
      v-bind:current-value="goalEntry.currentValue" />
  </section>
</template>

<style module lang="scss">
@import "../../assets/colors.scss";
@import "../../assets/breakpoints.scss";

.container {
  display: flex;
  flex-direction: column;
  height: fit-content;
  border-radius: 10px;
  padding: 20px;
  margin-left: 40px;
  gap: 20px;
  border: 2px solid $primary-border;

  @include laptop {
    order: 1;
    margin: 0;
    margin-bottom: 20px;
  }
}
</style>