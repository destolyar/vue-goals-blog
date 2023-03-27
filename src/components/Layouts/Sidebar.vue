<script setup lang="ts">
import GoalsList from '../sharedComponent/GoalsList.vue';
import { db } from '@/firebase';
import { query, collection, getDocs, QuerySnapshot, type DocumentData } from '@firebase/firestore';
import { onMounted, ref } from 'vue';

interface GoalEntry {
  id: string;
  goal: string;
  goalValue: number;
  currentValue: number;
  isAvailable: boolean
}

const goalsRef = collection(db, "goals");
const goalsQuery = query(goalsRef);
const goalsEntries = ref<GoalEntry[]>([]);

const fetchData = async () => {
  const querySnapshot: QuerySnapshot<DocumentData> = await getDocs(goalsQuery);
    (goalsEntries.value = querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  })) as GoalEntry[]).filter(goal => goal.isAvailable);
};

onMounted(fetchData)
</script>

<template>
  <aside :class=$style.sidebarContainer>
    <GoalsList v-bind:goalsEntries="goalsEntries" />
  </aside>
</template>

<style module lang="scss">
@import "../../assets/breakpoints.scss";
.sidebarContainer {
  margin-left: 40px;

  @include laptop {
    margin: 0;
  }
}
</style>
