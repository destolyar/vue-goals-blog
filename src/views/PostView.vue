<script setup lang="ts">
import { db } from '@/firebase';
import { Timestamp, doc, getDoc } from '@firebase/firestore';
import { useRoute } from 'vue-router';
import PostLayout from '@/components/Layouts/PostLayout.vue';
import PostBody from "../components/Post/PostBody.vue"
import { onMounted, ref } from 'vue';
import GoalsListVue from '@/components/sharedComponent/GoalsList.vue';

interface GoalEntry {
  id: string;
  goal: string;
  goalValue: number;
  currentValue: number;
  isAvailable: boolean
}

interface PostInterface {
  date: Timestamp,
  text: string,
  title: string,
  fixedGoals: GoalEntry[]
}

const post = ref<PostInterface>()

const fetchPost = async () => {
  const route = useRoute()
  const postId = route.params.postId as string
  const postRef = doc(db, "diary", postId)
  post.value = (await getDoc(postRef)).data() as PostInterface;
}

onMounted(fetchPost)
</script>

<script lang="ts">
export default {
  methods: {
    formatDate(timestamp: Timestamp) {
      const date = timestamp.toDate();
      return `${date.getUTCDate()}.${date.getMonth()}.${date.getFullYear()}`;
    },
  },
  components: { GoalsListVue }
}
</script>

<template>
  <PostLayout>
    <PostBody v-if="post" v-bind="post" v-bind:date="formatDate(post.date)" />
    <section :class=$style.fixedGoalsContainer>
      <h2 :class=$style.fixedGoalsTitle>Goals that were present at that time:</h2>
      <GoalsListVue v-if="post" v-bind:goals-entries="post.fixedGoals" />
    </section>
  </PostLayout>
</template>

<style module lang="scss">
@import "../assets/breakpoints.scss";
.fixedGoalsContainer {
  width: 40%;

  @include desktop {
    width: 60%;
  }

  @include laptop {
    width: 100%;
  }
}

.fixedGoalsTitle {
  font-size: 1.5rem;
  margin-bottom: 15px;

  @include tablets {
    font-size: 1.5rem;
  }
}
</style>