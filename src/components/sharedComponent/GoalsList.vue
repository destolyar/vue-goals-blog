<script setup lang="ts">
import GoalsListItem from '../Layouts/GoalsListItem.vue';

</script>

<script lang="ts">
interface GoalEntry {
  id: string;
  goal: string;
  goalValue: number;
  currentValue: number;
  isAvailable: boolean
}

export default {
  props: {
    goalsEntries: {
      type: Object as () => GoalEntry[],
      required: true
    }
  }
}
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
  gap: 20px;
  border: 2px solid $primary-border;

  @include laptop {
    order: 1;
    margin: 0;
    margin-bottom: 20px;
  }
}
</style>