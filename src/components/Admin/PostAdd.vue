<script setup lang="ts">
import SubmitButton from '../sharedComponent/SubmitButton.vue';
import BaseInput from '../sharedComponent/BaseInput.vue';
import TextArea from '../sharedComponent/TextArea.vue';
import { db } from '@/firebase';
import { Timestamp, addDoc, collection, getDocs, query, where } from '@firebase/firestore';
import { ref } from 'vue';
</script>

<script lang="ts">
const titleRef = ref("")

export default {
  data() {
    return {
      newPostText: ""
    }
  },
  methods: {
    updateNewPostText(value: string) {
      this.newPostText = value
    },
    async addPost() {
      const goalsRef = collection(db, "goals");
      const activeGoalsQuery = query(goalsRef, where("isAvailable", "==", true));
      const querySnapshot = await getDocs(activeGoalsQuery);
      const activeGoals = querySnapshot.docs.map(doc => doc.data());
      
      await addDoc(collection(db, "diary"), {
        title: titleRef.value,
        text: this.newPostText,
        date: Timestamp.fromDate(new Date()),
        fixedGoals: activeGoals
      });
    }
  },
  components: { SubmitButton, BaseInput, TextArea }
}
</script>

<template>
  <form @submit.prevent="addPost" :class=$style.addPostForm>
    <BaseInput label="Title" v-model="titleRef" />
    <TextArea label="Text" @update:newPostText="updateNewPostText" class="text-area" />
    <SubmitButton />
  </form>
</template>

<style module lang="scss">
.addPostForm {
  max-width: 400px;
  display: flex;
  flex-direction: column;
}
</style>