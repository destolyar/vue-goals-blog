<script setup lang="ts">
import { db } from '@/firebase';
import { Timestamp, collection, doc } from '@firebase/firestore';
import { computed } from '@vue/reactivity';
import { useRoute } from 'vue-router';
import { useDocument } from 'vuefire';
import PostLayout from '@/components/Layouts/PostLayout.vue';
import PostBody from "../components/Post/PostBody.vue"

const route = useRoute()
const postId = route.params.postId as string
const post = useDocument(doc(collection(db, 'diary'), postId))

const postFormatted = computed(() => {
  const postValue = post.value
  return {
    title: postValue?.title ?? '',
    date: postValue?.date ?? '',
    text: postValue?.text ?? ''
  }
})
</script>

<script lang="ts">
export default {
  methods: {
    formatDate(timestamp: Timestamp) {
      const date = timestamp.toDate()
      return `${date.getUTCDate()}.${date.getMonth()}.${date.getFullYear()}`
    },
  }
}
</script>

<template>
  <PostLayout>
    <PostBody v-bind="postFormatted" v-bind:date="formatDate(postFormatted.date)"/>
  </PostLayout>
</template>