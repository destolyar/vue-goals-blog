<script setup lang="ts">
import DiaryListItemVue from './DiaryListItem.vue';
import { db } from '@/firebase';
import { QuerySnapshot, collection, getDocs, query, type DocumentData, Timestamp } from '@firebase/firestore';
import { onMounted, ref } from 'vue';

interface DiaryEntry {
  id: string;
  title: string;
  text: string;
  date: Timestamp;
}

const diaryRef = collection(db, "diary");
const diaryQuery = query(diaryRef);
const diaryEntries = ref<DiaryEntry[]>([]);

const fetchData = async () => {
  const querySnapshot: QuerySnapshot<DocumentData> = await getDocs(diaryQuery);
  diaryEntries.value = querySnapshot.docs.map((doc) => ({
    ...doc.data() as DiaryEntry,
    id: doc.id,
  })) as DiaryEntry[];
};

onMounted(fetchData);
</script>

<template>
  <section :class=$style.container>
    <DiaryListItemVue v-for="entry in diaryEntries.sort((firstEntry, secondEntry) => secondEntry.date.seconds - firstEntry.date.seconds)" v-bind:title="entry.title" v-bind:timestamp="entry.date"
      v-bind:id="entry.id" v-bind:text="entry.text" />
  </section>
</template>

<style module lang="scss">
@import "../../assets/breakpoints.scss";

.container {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: min-content;
  gap: 20px;
  width: 100%;

  @include laptop {
    order: 2;
  }
}
</style>
